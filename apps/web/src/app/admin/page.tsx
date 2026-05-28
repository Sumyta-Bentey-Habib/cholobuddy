"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { useAuth } from "@/hooks/useAuth";
import { useAdminBookings } from "@/hooks/useAdminBookings";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useTours } from "@/hooks/useTours";
import { useUsers } from "@/hooks/useUsers";
import * as S from "./admin.styles";

type AdminTab = "dashboard" | "bookings" | "tours" | "users";

const NAV_ITEMS: { id: AdminTab; icon: string; label: string }[] = [
  { id: "dashboard", icon: "dashboard",           label: "Overview" },
  { id: "bookings",  icon: "confirmation_number", label: "Bookings" },
  { id: "tours",     icon: "travel_explore",       label: "Tours"    },
  { id: "users",     icon: "group",                label: "Users"    },
];

export default function AdminPage() {
  const { t } = useLanguage();
  const router = useRouter();
  const { user, signOut } = useAuth();
  
  const { analytics } = useAnalytics();
  const { bookings, updateBookingStatus, deleteBooking } = useAdminBookings();
  const { tours, createTour, updateTour, deleteTour } = useTours();
  const { users, updateUserRole } = useUsers();

  const [activeTab, setActiveTab] = useState<AdminTab>("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Tour Form Modal State
  const [showTourModal, setShowTourModal] = useState(false);
  const [tourForm, setTourForm] = useState({
    title: "",
    titleBn: "",
    price: "",
    duration: "",
    durationBn: "",
    description: "",
    descriptionBn: "",
    location: "",
    locationBn: "",
    distanceNote: "",
    imgUrl: "",
    popular: false,
    startDate: "",
    endDate: ""
  });
  const [tourFile, setTourFile] = useState<File | null>(null);
  const [editingTourId, setEditingTourId] = useState<string | null>(null);

  const handleSignOut = async () => {
    await signOut();
    router.push("/login");
  };

  const initials = user?.name
    ? user.name.split(" ").map((n: string) => n[0]).join("").slice(0, 2).toUpperCase()
    : "AD";

  const handleSaveTour = async (e: React.FormEvent) => {
    e.preventDefault();
    let uploadedUrl = tourForm.imgUrl;
    
    if (tourFile) {
      const formData = new FormData();
      formData.append("file", tourFile);
      const res = await fetch("/api/upload", { method: "POST", body: formData });
      if (res.ok) {
        const data = await res.json();
        uploadedUrl = data.url;
      } else {
        const errData = await res.json().catch(() => ({}));
        alert(`Image upload failed: ${errData.details || errData.error || "Unknown error"}`);
        return;
      }
    }

    const payload = {
      title: tourForm.title,
      titleBn: tourForm.titleBn,
      price: Number(tourForm.price),
      duration: tourForm.duration,
      durationBn: tourForm.durationBn,
      description: tourForm.description,
      descriptionBn: tourForm.descriptionBn,
      location: tourForm.location,
      locationBn: tourForm.locationBn,
      distanceNote: tourForm.distanceNote,
      imgUrl: uploadedUrl,
      image: uploadedUrl, // fallback for backend validations
      popular: tourForm.popular,
      startDate: tourForm.startDate,
      endDate: tourForm.endDate
    };

    if (editingTourId) {
      await updateTour(editingTourId, payload);
    } else {
      await createTour(payload);
    }

    setShowTourModal(false);
    setTourForm({
      title: "",
      titleBn: "",
      price: "",
      duration: "",
      durationBn: "",
      description: "",
      descriptionBn: "",
      location: "",
      locationBn: "",
      distanceNote: "",
      imgUrl: "",
      popular: false,
      startDate: "",
      endDate: ""
    });
    setTourFile(null);
    setEditingTourId(null);
  };

  return (
    <S.DashPage>
      {/* SIDEBAR */}
      <>
        {/* Mobile overlay */}
        <AnimatePresence>
          {sidebarOpen && (
            <S.MobileOverlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
            />
          )}
        </AnimatePresence>

        <S.DashSidebar $open={sidebarOpen}>
          {/* Brand */}
          <S.SidebarBrandWrapper>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
              <S.BrandIcon>
                <span className="material-symbols-outlined" style={{ color: "#fff", fontSize: "18px" }}>flight_takeoff</span>
              </S.BrandIcon>
              <span style={{ fontFamily: "monospace", fontSize: "13px", fontWeight: 700, letterSpacing: "0.18em", color: "#000000", textTransform: "uppercase" }}>
                CholoBuddy
              </span>
            </Link>
          </S.SidebarBrandWrapper>

          {/* User card */}
          <S.SidebarUserCard>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <S.UserAvatar style={{ width: "40px", height: "40px", fontSize: "13px" }}>{initials}</S.UserAvatar>
              <div style={{ minWidth: 0 }}>
                <p style={{ fontFamily: "monospace", fontSize: "13px", fontWeight: 700, color: "#000000", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {user?.name || "Admin"}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "3px" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "9999px", background: "#705d00" }} />
                  <p style={{ fontFamily: "monospace", fontSize: "9px", color: "#526069", textTransform: "uppercase", letterSpacing: "0.15em" }}>
                    System Admin
                  </p>
                </div>
              </div>
            </div>
          </S.SidebarUserCard>

          {/* Nav */}
          <S.SidebarNav>
            {NAV_ITEMS.map(item => (
              <S.DashNavBtn
                key={item.id}
                onClick={() => { setActiveTab(item.id); setSidebarOpen(false); }}
                $active={activeTab === item.id}
              >
                <span className="material-symbols-outlined" style={{ fontSize: "18px", color: activeTab === item.id ? "#705d00" : undefined }}>
                  {item.icon}
                </span>
                {item.label}
                {activeTab === item.id && (
                  <span style={{ marginLeft: "auto", width: "6px", height: "6px", borderRadius: "9999px", background: "#c9a900" }} />
                )}
              </S.DashNavBtn>
            ))}
          </S.SidebarNav>

          {/* Sign out */}
          <S.SidebarFooter>
            <S.SignOutBtn onClick={handleSignOut}>
              <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>logout</span>
              {t("common.logout")}
            </S.SignOutBtn>
          </S.SidebarFooter>
        </S.DashSidebar>
      </>

      {/* MAIN CONTAINER */}
      <S.DashMain>
        {/* Top bar */}
        <S.DashTopbar>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <S.MobileMenuBtn onClick={() => setSidebarOpen(true)}>
              <span className="material-symbols-outlined" style={{ fontSize: "22px" }}>menu</span>
            </S.MobileMenuBtn>
            <div>
              <h1 style={{ fontFamily: "monospace", fontSize: "13px", fontWeight: 700, color: "#000000", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                {NAV_ITEMS.find(n => n.id === activeTab)?.label}
              </h1>
              <p style={{ fontFamily: "monospace", fontSize: "9px", color: "#526069", textTransform: "uppercase", letterSpacing: "0.2em", marginTop: "2px" }}>
                CholoBuddy Admin Control
              </p>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Link
              href="/"
              style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "7px 12px", borderRadius: "8px", border: "1px solid rgba(82, 96, 105, 0.15)", background: "#f1f3f5", fontFamily: "monospace", fontSize: "11px", color: "#526069", textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.1em", transition: "all 0.2s" }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>home</span>
              Home
            </Link>
            <S.UserAvatar style={{ width: "32px", height: "32px", fontSize: "11px" }}>{initials}</S.UserAvatar>
          </div>
        </S.DashTopbar>

        {/* Content Area */}
        <S.DashContent>
          <AnimatePresence mode="wait">
            
            {/* OVERVIEW TAB */}
            {activeTab === "dashboard" && (
              <motion.div
                key="dashboard"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                style={{ display: "flex", flexDirection: "column", gap: "28px" }}
              >
                {/* Core Metrics Grid */}
                <S.StatsGrid>
                  <S.StatCardBlue>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <div>
                        <p style={{ fontFamily: "monospace", fontSize: "9px", color: "#526069", textTransform: "uppercase", letterSpacing: "0.2em" }}>
                          {t("admin.stats.revenue")}
                        </p>
                        <p style={{ fontFamily: "monospace", fontSize: "32px", fontWeight: 700, color: "#000000", marginTop: "8px" }}>
                          ৳{analytics?.totalRevenue?.toLocaleString() || 0}
                        </p>
                      </div>
                      <span className="material-symbols-outlined" style={{ color: "#705d00", fontSize: "28px", opacity: 0.8 }}>payments</span>
                    </div>
                  </S.StatCardBlue>

                  <S.StatCardGreen>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <div>
                        <p style={{ fontFamily: "monospace", fontSize: "9px", color: "#526069", textTransform: "uppercase", letterSpacing: "0.2em" }}>
                          {t("admin.stats.active")}
                        </p>
                        <p style={{ fontFamily: "monospace", fontSize: "32px", fontWeight: 700, color: "#000000", marginTop: "8px" }}>
                          {analytics?.activeTrips || 0}
                        </p>
                      </div>
                      <span className="material-symbols-outlined" style={{ color: "#526069", fontSize: "28px", opacity: 0.8 }}>flight_takeoff</span>
                    </div>
                  </S.StatCardGreen>

                  <S.StatCardAmber>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <div>
                        <p style={{ fontFamily: "monospace", fontSize: "9px", color: "#526069", textTransform: "uppercase", letterSpacing: "0.2em" }}>
                          Total Users
                        </p>
                        <p style={{ fontFamily: "monospace", fontSize: "32px", fontWeight: 700, color: "#000000", marginTop: "8px" }}>
                          {analytics?.newUsers || 0}
                        </p>
                      </div>
                      <span className="material-symbols-outlined" style={{ color: "#705d00", fontSize: "28px", opacity: 0.8 }}>group</span>
                    </div>
                  </S.StatCardAmber>

                  <S.StatCardGreen>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <div>
                        <p style={{ fontFamily: "monospace", fontSize: "9px", color: "#526069", textTransform: "uppercase", letterSpacing: "0.2em" }}>
                          Completed Trips
                        </p>
                        <p style={{ fontFamily: "monospace", fontSize: "32px", fontWeight: 700, color: "#000000", marginTop: "8px" }}>
                          {analytics?.completedBookings || 0}
                        </p>
                      </div>
                      <span className="material-symbols-outlined" style={{ color: "#526069", fontSize: "28px", opacity: 0.8 }}>check_circle</span>
                    </div>
                  </S.StatCardGreen>
                </S.StatsGrid>

                {/* Graphics Panel */}
                <S.DashCard style={{ padding: "24px" }}>
                  <div style={{ marginBottom: "20px" }}>
                    <h3 style={{ fontFamily: "monospace", fontSize: "11px", fontWeight: 700, color: "#000000", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                      {t("admin.revenue_trends.title")}
                    </h3>
                    <p style={{ color: "#526069", fontSize: "12px", marginTop: "4px" }}>
                      {t("admin.revenue_trends.desc")}
                    </p>
                  </div>
                  {/* Chart Graphics */}
                  <S.ChartContainer>
                    {[55, 75, 45, 90, 60, 85, 110, 70, 95, 65, 80, 105].map((val, idx) => (
                      <S.ChartBarColumn key={idx}>
                        <S.ChartBar $percent={val * 1.3} />
                        <S.ChartBarLabel>{idx + 1}</S.ChartBarLabel>
                      </S.ChartBarColumn>
                    ))}
                  </S.ChartContainer>
                </S.DashCard>
              </motion.div>
            )}

            {/* BOOKINGS TAB */}
            {activeTab === "bookings" && (
              <motion.div
                key="bookings"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                style={{ display: "flex", flexDirection: "column", gap: "20px" }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <h2 style={{ fontFamily: "monospace", fontSize: "12px", fontWeight: 700, color: "#000000", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    All Bookings Management
                  </h2>
                  <span style={{ fontFamily: "monospace", fontSize: "10px", color: "#526069", textTransform: "uppercase" }}>
                    {bookings.length} bookings
                  </span>
                </div>
                <S.DashCard style={{ overflowX: "auto" }}>
                  <S.DashTable>
                    <thead>
                      <tr style={{ borderBottom: "1px solid rgba(82, 96, 105, 0.08)" }}>
                        {["ID", "Tour", "Amount", "Status", "Actions"].map(h => (
                          <th key={h} style={{ padding: "14px 20px", textAlign: "left", fontFamily: "monospace", fontSize: "9px", fontWeight: 700, color: "#526069", textTransform: "uppercase", letterSpacing: "0.2em" }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {bookings.map((tx) => (
                        <tr key={tx._id} style={{ borderBottom: "1px solid rgba(82, 96, 105, 0.08)" }}>
                          <td style={{ padding: "14px 20px", fontFamily: "monospace", fontSize: "11px", color: "#8e9aa2" }}>#{tx._id.slice(-6)}</td>
                          <td style={{ padding: "14px 20px", fontFamily: "monospace", fontSize: "11px", fontWeight: 700, color: "#000000", textTransform: "uppercase", maxWidth: "160px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                            {tx.tourTitle}
                          </td>
                          <td style={{ padding: "14px 20px", fontFamily: "monospace", fontSize: "11px", fontWeight: 700, color: "#000000" }}>৳{tx.totalAmount}</td>
                          <td style={{ padding: "14px 20px" }}>
                            <S.Select
                              value={tx.status}
                              onChange={(e) => updateBookingStatus(tx._id, e.target.value)}
                            >
                              <option value="Pending">Pending</option>
                              <option value="Completed">Completed</option>
                              <option value="Refunded">Refunded</option>
                            </S.Select>
                          </td>
                          <td style={{ padding: "14px 20px" }}>
                            <button
                              onClick={() => deleteBooking(tx._id)}
                              style={{ fontFamily: "monospace", fontSize: "10px", fontWeight: 700, color: "rgba(239, 68, 68, 0.7)", border: "1px solid rgba(239, 68, 68, 0.2)", padding: "6px 12px", borderRadius: "8px", cursor: "pointer", background: "transparent", transition: "all 0.2s" }}
                              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(239,68,68,.08)"; (e.currentTarget as HTMLButtonElement).style.color = "#ef4444"; }}
                              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; (e.currentTarget as HTMLButtonElement).style.color = "rgba(239, 68, 68, 0.7)"; }}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </S.DashTable>
                </S.DashCard>
              </motion.div>
            )}

            {/* TOURS TAB */}
            {activeTab === "tours" && (
              <motion.div
                key="tours"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                style={{ display: "flex", flexDirection: "column", gap: "20px" }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <h2 style={{ fontFamily: "monospace", fontSize: "12px", fontWeight: 700, color: "#000000", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    Tours Management
                  </h2>
                  <S.BlueButton
                    onClick={() => {
                      setEditingTourId(null);
                      setTourForm({
                        title: "",
                        titleBn: "",
                        price: "",
                        duration: "",
                        durationBn: "",
                        description: "",
                        descriptionBn: "",
                        location: "",
                        locationBn: "",
                        distanceNote: "",
                        imgUrl: "",
                        popular: false,
                        startDate: "",
                        endDate: ""
                      });
                      setTourFile(null);
                      setShowTourModal(true);
                    }}
                  >
                    Add Tour
                  </S.BlueButton>
                </div>

                {showTourModal && (
                  <S.DashCard style={{ padding: "24px" }}>
                    <form onSubmit={handleSaveTour} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                      <h4 style={{ fontFamily: "monospace", fontSize: "12px", fontWeight: 700, color: "#000000", textTransform: "uppercase" }}>
                        {editingTourId ? "Edit Tour" : "Create New Tour"}
                      </h4>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                        <S.FieldWrapper>
                          <S.FieldLabel>Tour Title (EN)</S.FieldLabel>
                          <S.FieldInput
                            required
                            placeholder="e.g. Sundarbans Safari"
                            value={tourForm.title}
                            onChange={e => setTourForm({...tourForm, title: e.target.value})}
                          />
                        </S.FieldWrapper>
                        <S.FieldWrapper>
                          <S.FieldLabel>Tour Title (BN)</S.FieldLabel>
                          <S.FieldInput
                            placeholder="e.g. সুন্দরবন সাফারি"
                            value={tourForm.titleBn}
                            onChange={e => setTourForm({...tourForm, titleBn: e.target.value})}
                          />
                        </S.FieldWrapper>
                      </div>

                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                        <S.FieldWrapper>
                          <S.FieldLabel>Price (৳)</S.FieldLabel>
                          <S.FieldInput
                            required
                            placeholder="Price"
                            type="number"
                            value={tourForm.price}
                            onChange={e => setTourForm({...tourForm, price: e.target.value})}
                          />
                        </S.FieldWrapper>
                        <S.FieldWrapper>
                          <S.FieldLabel>Distance Note</S.FieldLabel>
                          <S.FieldInput
                            placeholder="e.g. 2.5 km from forest base"
                            value={tourForm.distanceNote}
                            onChange={e => setTourForm({...tourForm, distanceNote: e.target.value})}
                          />
                        </S.FieldWrapper>
                      </div>

                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                        <S.FieldWrapper>
                          <S.FieldLabel>Duration (EN)</S.FieldLabel>
                          <S.FieldInput
                            required
                            placeholder="e.g. 3 Days / 2 Nights"
                            value={tourForm.duration}
                            onChange={e => setTourForm({...tourForm, duration: e.target.value})}
                          />
                        </S.FieldWrapper>
                        <S.FieldWrapper>
                          <S.FieldLabel>Duration (BN)</S.FieldLabel>
                          <S.FieldInput
                            placeholder="e.g. ৩ দিন / ২ রাত"
                            value={tourForm.durationBn}
                            onChange={e => setTourForm({...tourForm, durationBn: e.target.value})}
                          />
                        </S.FieldWrapper>
                      </div>

                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                        <S.FieldWrapper>
                          <S.FieldLabel>Location (EN)</S.FieldLabel>
                          <S.FieldInput
                            placeholder="e.g. Sundarbans, Bangladesh"
                            value={tourForm.location}
                            onChange={e => setTourForm({...tourForm, location: e.target.value})}
                          />
                        </S.FieldWrapper>
                        <S.FieldWrapper>
                          <S.FieldLabel>Location (BN)</S.FieldLabel>
                          <S.FieldInput
                            placeholder="e.g. সুন্দরবন, বাংলাদেশ"
                            value={tourForm.locationBn}
                            onChange={e => setTourForm({...tourForm, locationBn: e.target.value})}
                          />
                        </S.FieldWrapper>
                      </div>

                      <S.FieldWrapper>
                        <S.FieldLabel>Description (EN)</S.FieldLabel>
                        <S.FieldInput
                          as="textarea"
                          rows={3}
                          required
                          placeholder="English Tour Description"
                          value={tourForm.description}
                          onChange={e => setTourForm({...tourForm, description: e.target.value})}
                          style={{ padding: "10px", borderRadius: "8px", border: "1px solid rgba(82, 96, 105, 0.15)", outline: "none", resize: "vertical" }}
                        />
                      </S.FieldWrapper>

                      <S.FieldWrapper>
                        <S.FieldLabel>Description (BN)</S.FieldLabel>
                        <S.FieldInput
                          as="textarea"
                          rows={3}
                          placeholder="Bangla Tour Description"
                          value={tourForm.descriptionBn}
                          onChange={e => setTourForm({...tourForm, descriptionBn: e.target.value})}
                          style={{ padding: "10px", borderRadius: "8px", border: "1px solid rgba(82, 96, 105, 0.15)", outline: "none", resize: "vertical" }}
                        />
                      </S.FieldWrapper>

                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                        <S.FieldWrapper>
                          <S.FieldLabel>Starting Date</S.FieldLabel>
                          <S.FieldInput
                            type="date"
                            value={tourForm.startDate}
                            onChange={e => setTourForm({...tourForm, startDate: e.target.value})}
                          />
                        </S.FieldWrapper>
                        <S.FieldWrapper>
                          <S.FieldLabel>Ending Date</S.FieldLabel>
                          <S.FieldInput
                            type="date"
                            value={tourForm.endDate}
                            onChange={e => setTourForm({...tourForm, endDate: e.target.value})}
                          />
                        </S.FieldWrapper>
                      </div>

                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", alignItems: "center" }}>
                        <S.FieldWrapper>
                          <S.FieldLabel>Image File</S.FieldLabel>
                          <S.FieldInput
                            type="file"
                            accept="image/*"
                            onChange={e => setTourFile(e.target.files?.[0] || null)}
                          />
                        </S.FieldWrapper>
                        <S.FieldWrapper>
                          <S.FieldLabel>Or Image URL</S.FieldLabel>
                          <S.FieldInput
                            placeholder="Image URL (if not uploading)"
                            value={tourForm.imgUrl}
                            onChange={e => setTourForm({...tourForm, imgUrl: e.target.value})}
                          />
                        </S.FieldWrapper>
                      </div>

                      <div style={{ display: "flex", alignItems: "center", gap: "8px", margin: "8px 0" }}>
                        <input
                          id="popular"
                          type="checkbox"
                          checked={tourForm.popular}
                          onChange={e => setTourForm({...tourForm, popular: e.target.checked})}
                          style={{ width: "16px", height: "16px", cursor: "pointer" }}
                        />
                        <label htmlFor="popular" style={{ fontFamily: "monospace", fontSize: "11px", fontWeight: 700, color: "#000000", cursor: "pointer", textTransform: "uppercase" }}>
                          Mark as Popular / Featured Tour
                        </label>
                      </div>
                      <div style={{ display: "flex", gap: "12px" }}>
                        <S.BlueButton type="submit">Save</S.BlueButton>
                        <S.GhostButton
                          type="button"
                          onClick={() => {
                            setShowTourModal(false);
                            setEditingTourId(null);
                          }}
                        >
                          Cancel
                        </S.GhostButton>
                      </div>
                    </form>
                  </S.DashCard>
                )}

                <S.DashCard style={{ overflowX: "auto" }}>
                  <S.DashTable>
                    <thead>
                      <tr style={{ borderBottom: "1px solid rgba(82, 96, 105, 0.08)" }}>
                        {["Image", "Title", "Price", "Actions"].map(h => (
                          <th key={h} style={{ padding: "14px 20px", textAlign: "left", fontFamily: "monospace", fontSize: "9px", fontWeight: 700, color: "#526069", textTransform: "uppercase", letterSpacing: "0.2em" }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {tours.map((t) => (
                        <tr key={t._id} style={{ borderBottom: "1px solid rgba(82, 96, 105, 0.08)" }}>
                          <td style={{ padding: "14px 20px" }}>
                            <img
                              src={t.imgUrl}
                              alt={t.title}
                              style={{ width: "48px", height: "48px", objectFit: "cover", borderRadius: "12px" }}
                            />
                          </td>
                          <td style={{ padding: "14px 20px", fontFamily: "monospace", fontSize: "11px", fontWeight: 700, color: "#000000", textTransform: "uppercase" }}>
                            {t.title}
                          </td>
                          <td style={{ padding: "14px 20px", fontFamily: "monospace", fontSize: "11px", color: "#000000" }}>৳{t.price}</td>
                          <td style={{ padding: "14px 20px" }}>
                            <button
                              onClick={() => {
                                setEditingTourId(t._id);
                                setTourForm({
                                  title: t.title || "",
                                  titleBn: t.titleBn || "",
                                  price: t.price?.toString() || "",
                                  duration: t.duration || "",
                                  durationBn: t.durationBn || "",
                                  description: t.description || "",
                                  descriptionBn: t.descriptionBn || "",
                                  location: t.location || "",
                                  locationBn: t.locationBn || "",
                                  distanceNote: t.distanceNote || "",
                                  imgUrl: t.imgUrl || "",
                                  popular: !!t.popular,
                                  startDate: t.startDate || "",
                                  endDate: t.endDate || ""
                                });
                                setTourFile(null);
                                setShowTourModal(true);
                              }}
                              style={{ fontFamily: "monospace", fontSize: "10px", fontWeight: 700, color: "#705d00", border: "1px solid rgba(82, 96, 105, 0.15)", padding: "6px 12px", borderRadius: "8px", cursor: "pointer", background: "transparent", transition: "all 0.2s", marginRight: "8px" }}
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => deleteTour(t._id)}
                              style={{ fontFamily: "monospace", fontSize: "10px", fontWeight: 700, color: "rgba(239, 68, 68, 0.7)", border: "1px solid rgba(239, 68, 68, 0.2)", padding: "6px 12px", borderRadius: "8px", cursor: "pointer", background: "transparent", transition: "all 0.2s" }}
                              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(239,68,68,.08)"; (e.currentTarget as HTMLButtonElement).style.color = "#ef4444"; }}
                              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; (e.currentTarget as HTMLButtonElement).style.color = "rgba(239, 68, 68, 0.7)"; }}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </S.DashTable>
                </S.DashCard>
              </motion.div>
            )}

            {/* USERS TAB */}
            {activeTab === "users" && (
              <motion.div
                key="users"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                style={{ display: "flex", flexDirection: "column", gap: "20px" }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <h2 style={{ fontFamily: "monospace", fontSize: "12px", fontWeight: 700, color: "#000000", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    User Management
                  </h2>
                  <span style={{ fontFamily: "monospace", fontSize: "10px", color: "#526069", textTransform: "uppercase" }}>
                    {users.length} users
                  </span>
                </div>
                <S.DashCard style={{ overflowX: "auto" }}>
                  <S.DashTable>
                    <thead>
                      <tr style={{ borderBottom: "1px solid rgba(82, 96, 105, 0.08)" }}>
                        {["Name", "Email", "Role"].map(h => (
                          <th key={h} style={{ padding: "14px 20px", textAlign: "left", fontFamily: "monospace", fontSize: "9px", fontWeight: 700, color: "#526069", textTransform: "uppercase", letterSpacing: "0.2em" }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((u) => (
                        <tr key={u._id || u.id} style={{ borderBottom: "1px solid rgba(82, 96, 105, 0.08)" }}>
                          <td style={{ padding: "14px 20px", fontFamily: "monospace", fontSize: "11px", fontWeight: 700, color: "#000000", textTransform: "uppercase" }}>
                            {u.name}
                          </td>
                          <td style={{ padding: "14px 20px", fontFamily: "monospace", fontSize: "11px", color: "#526069" }}>{u.email}</td>
                          <td style={{ padding: "14px 20px" }}>
                            <S.Select
                              value={u.role || "user"}
                              onChange={(e) => updateUserRole(u._id || u.id, e.target.value)}
                            >
                              <option value="user">User</option>
                              <option value="admin">Admin</option>
                            </S.Select>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </S.DashTable>
                </S.DashCard>
              </motion.div>
            )}

          </AnimatePresence>
        </S.DashContent>
      </S.DashMain>
    </S.DashPage>
  );
}
