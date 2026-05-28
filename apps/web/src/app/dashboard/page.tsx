"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { savedTripsData } from "@/lib/data";
import { useLanguage } from "@/hooks/useLanguage";
import { useAuth } from "@/hooks/useAuth";
import { useBookings } from "@/hooks/useBookings";
import { useTours } from "@/hooks/useTours";
import * as S from "./dashboard.styles";

type ActiveTab = "dashboard" | "all-tours" | "my-trips" | "wishlist" | "help-desk";

const NAV_ITEMS: { id: ActiveTab; icon: string; label: string }[] = [
  { id: "dashboard", icon: "dashboard",     label: "Overview"    },
  { id: "all-tours", icon: "explore",       label: "All Tours"   },
  { id: "my-trips",  icon: "luggage",       label: "My Bookings" },
  { id: "wishlist",  icon: "favorite",      label: "Wishlist"    },
  { id: "help-desk", icon: "support_agent", label: "Help Desk"   },
];

export default function DashboardPage() {
  const { t } = useLanguage();
  const router = useRouter();
  const { user, role, signOut } = useAuth();
  const { bookings, deleteBooking } = useBookings();
  const { tours } = useTours();

  const isAdmin = role === "admin";
  const visibleNavItems = NAV_ITEMS.filter(item => {
    if (isAdmin && (item.id === "my-trips" || item.id === "wishlist")) {
      return false;
    }
    return true;
  });

  const [activeTab, setActiveTab] = useState<ActiveTab>("dashboard");
  const [ticketMsg, setTicketMsg] = useState("");
  const [ticketSent, setTicketSent] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleDashboardBook = (tourId: string, tourTitle: string, tourPrice: any) => {
    const priceVal = parseInt(tourPrice.toString().replace(/,/g, "")) || 12500;
    const guestsCount = 2;
    const ecoTaxVal = Math.round(priceVal * 0.04);
    const totalVal = (priceVal + ecoTaxVal) * guestsCount;
    router.push(
      `/payment?tourId=${tourId}&tourTitle=${encodeURIComponent(tourTitle)}&guests=${guestsCount}&date=oct_24&totalAmount=${totalVal}`
    );
  };

  const handleSignOut = async () => {
    await signOut();
    router.push("/login");
  };

  const handleTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketMsg.trim()) return;
    setTicketSent(true);
    setTimeout(() => {
      setTicketMsg("");
      setTicketSent(false);
      alert("Priority concierge ticket successfully dispatched.");
    }, 1500);
  };

  const savedTrips = savedTripsData;
  const activeBookingsCount = bookings.filter(b => b.status === "Pending").length;
  const completedBookingsCount = bookings.filter(b => b.status === "Completed").length;

  const initials = user?.name
    ? user.name.split(" ").map((n: string) => n[0]).join("").slice(0, 2).toUpperCase()
    : "EX";

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
                  {user?.name || "Explorer"}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "3px" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "9999px", background: "#34d399" }} />
                  <p style={{ fontFamily: "monospace", fontSize: "9px", color: "#526069", textTransform: "uppercase", letterSpacing: "0.15em" }}>
                    {isAdmin ? "Administrator" : "Level 3 Traveler"}
                  </p>
                </div>
              </div>
            </div>
          </S.SidebarUserCard>

          {/* Nav */}
          <S.SidebarNav>
            {visibleNavItems.map(item => (
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
              {t("dashboard.sidebar.sign_out")}
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
                {visibleNavItems.find(n => n.id === activeTab)?.label || "Overview"}
              </h1>
              <p style={{ fontFamily: "monospace", fontSize: "9px", color: "#526069", textTransform: "uppercase", letterSpacing: "0.2em", marginTop: "2px" }}>
                CholoBuddy Dashboard
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
                {/* Hero banner */}
                <S.DashHero>
                  <S.DashHeroBg style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=1200&auto=format&fit=crop')" }} />
                  <div style={{ position: "absolute", top: 0, left: 0, width: "280px", height: "180px", background: "rgba(201,169,0,.08)", filter: "blur(80px)", pointerEvents: "none" }} />
                  <div style={{ position: "relative", zIndex: 1 }}>
                    <p style={{ fontFamily: "monospace", fontSize: "10px", color: "#705d00", textTransform: "uppercase", letterSpacing: "0.3em", marginBottom: "8px" }}>
                      Welcome back
                    </p>
                    <h2 style={{ fontSize: "28px", fontWeight: 700, color: "#000000", marginBottom: "10px" }}>
                      {user?.name?.split(" ")[0] || "Explorer"} 👋
                    </h2>
                    <p style={{ color: "#526069", fontSize: "14px", maxWidth: "540px", lineHeight: 1.6, marginBottom: "24px" }}>
                      {isAdmin ? t("dashboard.welcome_desc_admin") : t("dashboard.welcome_desc")}
                    </p>
                    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                      <S.BlueButton onClick={() => setActiveTab("all-tours")}>
                        <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>explore</span>
                        Browse Tours
                      </S.BlueButton>
                      {!isAdmin && (
                        <button
                          onClick={() => setActiveTab("my-trips")}
                          style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 18px", borderRadius: "10px", fontFamily: "monospace", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", background: "#f1f3f5", border: "1px solid rgba(82, 96, 105, 0.15)", color: "#526069", cursor: "pointer", transition: "all .2s" }}
                        >
                          <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>luggage</span>
                          My Bookings
                        </button>
                      )}
                    </div>
                  </div>
                </S.DashHero>

                {/* Stats */}
                {!isAdmin && (
                  <S.StatsGrid>
                    <S.StatCardBlue>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                        <div>
                          <p style={{ fontFamily: "monospace", fontSize: "9px", color: "#526069", textTransform: "uppercase", letterSpacing: "0.2em" }}>
                            {t("dashboard.stats.active_trips")}
                          </p>
                          <p style={{ fontFamily: "monospace", fontSize: "32px", fontWeight: 700, color: "#000000", marginTop: "8px" }}>
                            {activeBookingsCount}
                          </p>
                        </div>
                        <span className="material-symbols-outlined" style={{ color: "#705d00", fontSize: "28px", opacity: 0.8 }}>flight_takeoff</span>
                      </div>
                    </S.StatCardBlue>
                    <S.StatCardGreen>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                        <div>
                          <p style={{ fontFamily: "monospace", fontSize: "9px", color: "#526069", textTransform: "uppercase", letterSpacing: "0.2em" }}>
                            {t("dashboard.stats.completed")}
                          </p>
                          <p style={{ fontFamily: "monospace", fontSize: "32px", fontWeight: 700, color: "#000000", marginTop: "8px" }}>
                            {completedBookingsCount}
                          </p>
                        </div>
                        <span className="material-symbols-outlined" style={{ color: "#526069", fontSize: "28px", opacity: 0.8 }}>check_circle</span>
                      </div>
                    </S.StatCardGreen>
                    <S.StatCardAmber>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                        <div>
                          <p style={{ fontFamily: "monospace", fontSize: "9px", color: "#526069", textTransform: "uppercase", letterSpacing: "0.2em" }}>
                            {t("dashboard.stats.level")}
                          </p>
                          <p style={{ fontFamily: "monospace", fontSize: "28px", fontWeight: 700, color: "#000000", marginTop: "8px" }}>
                            Lvl 3
                          </p>
                        </div>
                        <span className="material-symbols-outlined" style={{ color: "#705d00", fontSize: "28px", opacity: 0.8 }}>military_tech</span>
                      </div>
                    </S.StatCardAmber>
                  </S.StatsGrid>
                )}

                {/* Recent Bookings */}
                {!isAdmin && bookings.length > 0 && (
                  <S.DashCard>
                    <div style={{ padding: "18px 24px", borderBottom: "1px solid rgba(82, 96, 105, 0.08)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <h3 style={{ fontFamily: "monospace", fontSize: "11px", fontWeight: 700, color: "#000000", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                        Recent Bookings
                      </h3>
                      <button
                        onClick={() => setActiveTab("my-trips")}
                        style={{ background: "none", border: "none", fontFamily: "monospace", fontSize: "10px", color: "#705d00", textTransform: "uppercase", letterSpacing: "0.1em", cursor: "pointer" }}
                      >
                        View all →
                      </button>
                    </div>
                    <div>
                      {bookings.slice(0, 3).map(b => (
                        <div key={b._id} style={{ padding: "14px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", borderBottom: "1px solid rgba(82, 96, 105, 0.08)" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "12px", minWidth: 0 }}>
                            <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "rgba(201,169,0,.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                              <span className="material-symbols-outlined" style={{ color: "#705d00", fontSize: "15px" }}>luggage</span>
                            </div>
                            <div style={{ minWidth: 0 }}>
                              <p style={{ fontFamily: "monospace", fontSize: "11px", fontWeight: 700, color: "#000000", textTransform: "uppercase", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                                {b.tourTitle}
                              </p>
                              <p style={{ fontFamily: "monospace", fontSize: "9px", color: "#8e9aa2", marginTop: "2px" }}>
                                #{b._id.slice(-6)}
                              </p>
                            </div>
                          </div>
                          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexShrink: 0 }}>
                            <span style={{ fontFamily: "monospace", fontSize: "12px", fontWeight: 700, color: "#000000" }}>৳{b.totalAmount}</span>
                            <S.StatusPill $status={b.status}>{b.status}</S.StatusPill>
                          </div>
                        </div>
                      ))}
                    </div>
                  </S.DashCard>
                )}
              </motion.div>
            )}

            {/* ALL TOURS TAB */}
            {activeTab === "all-tours" && (
              <motion.div
                key="all-tours"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                style={{ display: "flex", flexDirection: "column", gap: "20px" }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <h2 style={{ fontFamily: "monospace", fontSize: "12px", fontWeight: 700, color: "#000000", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    All Available Tours
                  </h2>
                  <span style={{ fontFamily: "monospace", fontSize: "10px", color: "#526069", textTransform: "uppercase" }}>
                    {tours.length} tours
                  </span>
                </div>
                <S.TourGrid>
                  {tours.map((tour, i) => (
                    <S.ImageCard
                      key={tour._id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, delay: i * 0.04 }}
                    >
                      <div style={{ position: "relative", height: "160px", overflow: "hidden" }}>
                        <img
                          alt={tour.title}
                          src={tour.imgUrl || "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=600&auto=format&fit=crop"}
                          style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.7)", transition: "transform .5s" }}
                          onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                          onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                        />
                        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)" }} />
                        <p style={{ position: "absolute", bottom: "12px", left: "16px", fontFamily: "monospace", fontSize: "18px", fontWeight: 700, color: "#fff" }}>
                          ৳{tour.price}
                        </p>
                      </div>
                      <div style={{ padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                        <h4 style={{ fontFamily: "monospace", fontSize: "12px", fontWeight: 700, color: "#000000", textTransform: "uppercase", letterSpacing: "0.08em", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", minWidth: 0 }}>
                          {tour.title}
                        </h4>
                        {!isAdmin ? (
                          <S.BlueButton
                            onClick={() => handleDashboardBook(tour._id, tour.title, tour.price)}
                            style={{ padding: "8px 14px", borderRadius: "8px", fontSize: "10px" }}
                          >
                            Book
                            <span className="material-symbols-outlined" style={{ fontSize: "13px" }}>arrow_forward</span>
                          </S.BlueButton>
                        ) : (
                          <S.BlueButton
                            disabled
                            style={{ padding: "8px 14px", borderRadius: "8px", fontSize: "10px", opacity: 0.5, cursor: "not-allowed", backgroundColor: "#e2e8f0", color: "#64748b", border: "1px solid #cbd5e1" }}
                          >
                            Admin
                          </S.BlueButton>
                        )}
                      </div>
                    </S.ImageCard>
                  ))}
                </S.TourGrid>
              </motion.div>
            )}

            {/* MY BOOKINGS TAB */}
            {activeTab === "my-trips" && (
              <motion.div
                key="my-trips"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                  <h2 style={{ fontFamily: "monospace", fontSize: "12px", fontWeight: 700, color: "#000000", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    My Bookings
                  </h2>
                  <span style={{ fontFamily: "monospace", fontSize: "10px", color: "#526069", textTransform: "uppercase" }}>
                    {bookings.length} total
                  </span>
                </div>
                <S.DashCard style={{ overflowX: "auto" }}>
                  <S.DashTable>
                    <thead>
                      <tr style={{ borderBottom: "1px solid rgba(82, 96, 105, 0.08)" }}>
                        {["ID", "Tour", "Guests", "Amount", "Status", "Action"].map(h => (
                          <th key={h} style={{ padding: "14px 20px", textAlign: "left", fontFamily: "monospace", fontSize: "9px", fontWeight: 700, color: "#526069", textTransform: "uppercase", letterSpacing: "0.2em" }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {bookings.map(b => (
                        <tr key={b._id} style={{ borderBottom: "1px solid rgba(82, 96, 105, 0.08)" }}>
                          <td style={{ padding: "14px 20px", fontFamily: "monospace", fontSize: "11px", color: "#8e9aa2" }}>#{b._id.slice(-6)}</td>
                          <td style={{ padding: "14px 20px", fontFamily: "monospace", fontSize: "11px", fontWeight: 700, color: "#000000", textTransform: "uppercase", maxWidth: "160px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                            {b.tourTitle}
                          </td>
                          <td style={{ padding: "14px 20px", fontFamily: "monospace", fontSize: "11px", color: "#526069" }}>{b.guests}</td>
                          <td style={{ padding: "14px 20px", fontFamily: "monospace", fontSize: "11px", fontWeight: 700, color: "#000000" }}>৳{b.totalAmount}</td>
                          <td style={{ padding: "14px 20px" }}>
                            <S.StatusPill $status={b.status}>{b.status}</S.StatusPill>
                          </td>
                          <td style={{ padding: "14px 20px" }}>
                            <button
                              onClick={() => deleteBooking(b._id)}
                              style={{ fontFamily: "monospace", fontSize: "10px", fontWeight: 700, color: "rgba(239, 68, 68, 0.7)", border: "1px solid rgba(239, 68, 68, 0.2)", padding: "6px 12px", borderRadius: "8px", cursor: "pointer", background: "transparent", transition: "all 0.2s" }}
                              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(239,68,68,.08)"; (e.currentTarget as HTMLButtonElement).style.color = "#ef4444"; }}
                              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; (e.currentTarget as HTMLButtonElement).style.color = "rgba(239, 68, 68, 0.7)"; }}
                            >
                              Cancel
                            </button>
                          </td>
                        </tr>
                      ))}
                      {bookings.length === 0 && (
                        <tr>
                          <td colSpan={6} style={{ padding: "60px 20px", textAlign: "center" }}>
                            <span className="material-symbols-outlined" style={{ fontSize: "48px", color: "#8e9aa2", display: "block", marginBottom: "12px" }}>luggage</span>
                            <p style={{ fontFamily: "monospace", fontSize: "11px", color: "#526069", textTransform: "uppercase" }}>No bookings yet</p>
                            <button
                              onClick={() => setActiveTab("all-tours")}
                              style={{ marginTop: "12px", background: "none", border: "none", fontFamily: "monospace", fontSize: "11px", color: "#705d00", textTransform: "uppercase", cursor: "pointer" }}
                            >
                              Browse tours →
                            </button>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </S.DashTable>
                </S.DashCard>
              </motion.div>
            )}

            {/* WISHLIST TAB */}
            {activeTab === "wishlist" && (
              <motion.div
                key="wishlist"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                style={{ display: "flex", flexDirection: "column", gap: "20px" }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <h2 style={{ fontFamily: "monospace", fontSize: "12px", fontWeight: 700, color: "#000000", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    {t("dashboard.saved_trips")}
                  </h2>
                  <span style={{ fontFamily: "monospace", fontSize: "10px", color: "#526069", textTransform: "uppercase" }}>
                    {savedTrips.length} saved
                  </span>
                </div>
                <S.TourGrid>
                  {savedTrips.map((trip, i) => (
                    <S.ImageCard
                      key={trip.id}
                      $wishlist={true}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, delay: i * 0.04 }}
                    >
                      <div style={{ position: "relative", height: "160px", overflow: "hidden" }}>
                        <img
                          alt={trip.title}
                          src={trip.imgUrl}
                          style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.65)", transition: "transform .5s" }}
                          onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                          onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                        />
                        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)" }} />
                        <div style={{ position: "absolute", top: "12px", right: "12px", width: "28px", height: "28px", borderRadius: "9999px", background: "rgba(239,68,68,.20)", border: "1px solid rgba(239,68,68,.30)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <span className="material-symbols-outlined" style={{ color: "#f87171", fontSize: "14px", fontVariationSettings: "'FILL' 1" }}>favorite</span>
                        </div>
                        <p style={{ position: "absolute", bottom: "12px", left: "16px", fontFamily: "monospace", fontSize: "17px", fontWeight: 700, color: "#fff" }}>
                          ৳{trip.price}
                        </p>
                      </div>
                      <div style={{ padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                        <h4 style={{ fontFamily: "monospace", fontSize: "12px", fontWeight: 700, color: "#000000", textTransform: "uppercase", letterSpacing: "0.08em", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", minWidth: 0 }}>
                          {trip.title}
                        </h4>
                        <S.PinkButton onClick={() => router.push(`/trips/${trip.id}`)}>
                          {t("common.book_now")}
                        </S.PinkButton>
                      </div>
                    </S.ImageCard>
                  ))}
                </S.TourGrid>
              </motion.div>
            )}

            {/* HELP DESK TAB */}
            {activeTab === "help-desk" && (
              <motion.div
                key="help-desk"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                style={{ maxWidth: "640px", display: "flex", flexDirection: "column", gap: "20px" }}
              >
                <h2 style={{ fontFamily: "monospace", fontSize: "12px", fontWeight: 700, color: "#000000", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  Concierge Help Desk
                </h2>

                {/* Info banner */}
                <div style={{ background: "linear-gradient(135deg,rgba(201,169,0,.08),rgba(82,96,105,.08))", border: "1px solid rgba(201,169,0,.15)", borderRadius: "14px", padding: "20px", display: "flex", gap: "16px" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(201,169,0,.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span className="material-symbols-outlined" style={{ color: "#705d00", fontSize: "20px" }}>support_agent</span>
                  </div>
                  <div>
                    <p style={{ fontFamily: "monospace", fontSize: "11px", fontWeight: 700, color: "#000000", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "6px" }}>Priority Access</p>
                    <p style={{ color: "#526069", fontSize: "13px", lineHeight: 1.6 }}>
                      As a Level 3 Traveler, you have priority concierge access. Our team typically responds within 2–4 hours.
                    </p>
                  </div>
                </div>

                {/* Form */}
                <S.DashCard style={{ padding: "24px" }}>
                  <h3 style={{ fontFamily: "monospace", fontSize: "11px", fontWeight: 700, color: "#000000", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "20px" }}>
                    Submit a Ticket
                  </h3>
                  <form onSubmit={handleTicketSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    <div>
                      <label style={{ display: "block", fontFamily: "monospace", fontSize: "10px", fontWeight: 700, color: "#526069", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "6px" }}>
                        Your Message
                      </label>
                      <S.Textarea
                        rows={5}
                        required
                        value={ticketMsg}
                        onChange={e => setTicketMsg(e.target.value)}
                        placeholder={`How can we assist you today, ${user?.name?.split(" ")[0] || "Explorer"}?`}
                      />
                    </div>
                    <S.BlueButton type="submit" disabled={ticketSent}>
                      <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>
                        {ticketSent ? "schedule" : "send"}
                      </span>
                      {ticketSent ? "Dispatching..." : "Submit Priority Ticket"}
                    </S.BlueButton>
                  </form>
                </S.DashCard>

                {/* Contact options */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                  {[
                    { icon: "chat_bubble", label: "Live Chat",     desc: "Avg wait: 5 min", color: "#705d00", bg: "rgba(201,169,0,.08)", border: "rgba(201,169,0,.15)" },
                    { icon: "call",        label: "Phone Support", desc: "9am–9pm BDT",     color: "#526069", bg: "rgba(82,96,105,.08)", border: "rgba(82,96,105,.15)" },
                  ].map(opt => (
                    <div key={opt.label} style={{ background: opt.bg, border: `1px solid ${opt.border}`, borderRadius: "12px", padding: "16px", display: "flex", alignItems: "center", gap: "12px" }}>
                      <span className="material-symbols-outlined" style={{ color: opt.color, fontSize: "22px" }}>{opt.icon}</span>
                      <div>
                        <p style={{ fontFamily: "monospace", fontSize: "11px", fontWeight: 700, color: "#000000", textTransform: "uppercase", letterSpacing: "0.1em" }}>{opt.label}</p>
                        <p style={{ fontFamily: "monospace", fontSize: "9px", color: "#526069", marginTop: "2px" }}>{opt.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </S.DashContent>
      </S.DashMain>
    </S.DashPage>
  );
}
