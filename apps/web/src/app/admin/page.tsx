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
import { useToast } from "@/context/Toast";
import {
  DashPage,
  MobileOverlay,
  DashSidebar,
  SidebarBrandWrapper,
  SidebarBrandLink,
  BrandIcon,
  BrandName,
  SidebarUserCard,
  UserCardInner,
  UserAvatarLg,
  UserInfo,
  UserName,
  UserStatusRow,
  StatusDot,
  UserRole,
  SidebarNav,
  DashNavBtn,
  NavActiveDot,
  SidebarFooter,
  SignOutBtn,
  DashMain,
  DashTopbar,
  TopbarLeft,
  MobileMenuBtn,
  TopbarTitle,
  TopbarSubtitle,
  TopbarRight,
  HomeLink,
  UserAvatarSm,
  DashContent,
  TabPane,
  StatsGrid,
  StatCardBlue,
  StatCardHeader,
  StatLabel,
  StatValue,
  StatCardGreen,
  StatCardAmber,
  DashCard,
  ChartHeaderRow,
  ChartTitle,
  ChartDesc,
  ChartContainer,
  ChartBarColumn,
  ChartBar,
  ChartBarLabel,
  TabPaneGap20,
  SectionTopRow,
  SectionTitle,
  SectionCount,
  DashTable,
  TableHeaderRow,
  TableTh,
  TableTr,
  TableTdMono,
  TableTdTitle,
  TableTdBold,
  TableTdPad,
  Select,
  DeleteBtn,
  BlueButton,
  TourFormBody,
  TourFormTitle,
  TourFormGrid,
  FieldWrapper,
  FieldLabel,
  FieldInput,
  CheckboxRow,
  CheckboxInput,
  CheckboxLabel,
  TourFormActions,
  GhostButton,
  TableImgTd,
  TableImg,
  EditBtn
} from "./admin.styles";

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
  const toast = useToast();

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
        toast.error(`Image upload failed: ${errData.details || errData.error || "Unknown error"}`);
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
      image: uploadedUrl,
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
      title: "", titleBn: "", price: "", duration: "", durationBn: "",
      description: "", descriptionBn: "", location: "", locationBn: "",
      distanceNote: "", imgUrl: "", popular: false, startDate: "", endDate: ""
    });
    setTourFile(null);
    setEditingTourId(null);
  };

  return (
    <DashPage>
      {/* SIDEBAR */}
      <>
        <AnimatePresence>
          {sidebarOpen && (
            <MobileOverlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
            />
          )}
        </AnimatePresence>

        <DashSidebar $open={sidebarOpen}>
          {/* Brand */}
          <SidebarBrandWrapper>
            <SidebarBrandLink as={Link} href="/">
              <BrandIcon>
                <span className="material-symbols-outlined" style={{ color: "#fff", fontSize: "18px" }}>flight_takeoff</span>
              </BrandIcon>
              <BrandName>CholoBuddy</BrandName>
            </SidebarBrandLink>
          </SidebarBrandWrapper>

          {/* User card */}
          <SidebarUserCard>
            <UserCardInner>
              <UserAvatarLg>{initials}</UserAvatarLg>
              <UserInfo>
                <UserName>{user?.name || "Admin"}</UserName>
                <UserStatusRow>
                  <StatusDot $color="#705d00" />
                  <UserRole>System Admin</UserRole>
                </UserStatusRow>
              </UserInfo>
            </UserCardInner>
          </SidebarUserCard>

          {/* Nav */}
          <SidebarNav>
            {NAV_ITEMS.map(item => (
              <DashNavBtn
                key={item.id}
                onClick={() => { setActiveTab(item.id); setSidebarOpen(false); }}
                $active={activeTab === item.id}
              >
                <span className="material-symbols-outlined" style={{ fontSize: "18px", color: activeTab === item.id ? "#705d00" : undefined }}>
                  {item.icon}
                </span>
                {item.label}
                {activeTab === item.id && <NavActiveDot />}
              </DashNavBtn>
            ))}
          </SidebarNav>

          {/* Sign out */}
          <SidebarFooter>
            <SignOutBtn onClick={handleSignOut}>
              <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>logout</span>
              {t("common.logout")}
            </SignOutBtn>
          </SidebarFooter>
        </DashSidebar>
      </>

      {/* MAIN CONTAINER */}
      <DashMain>
        {/* Top bar */}
        <DashTopbar>
          <TopbarLeft>
            <MobileMenuBtn onClick={() => setSidebarOpen(true)}>
              <span className="material-symbols-outlined" style={{ fontSize: "22px" }}>menu</span>
            </MobileMenuBtn>
            <div>
              <TopbarTitle>{NAV_ITEMS.find(n => n.id === activeTab)?.label}</TopbarTitle>
              <TopbarSubtitle>CholoBuddy Admin Control</TopbarSubtitle>
            </div>
          </TopbarLeft>
          <TopbarRight>
            <HomeLink as={Link} href="/">
              <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>home</span>
              Home
            </HomeLink>
            <UserAvatarSm>{initials}</UserAvatarSm>
          </TopbarRight>
        </DashTopbar>

        {/* Content Area */}
        <DashContent>
          <AnimatePresence mode="wait">

            {/* OVERVIEW TAB */}
            {activeTab === "dashboard" && (
              <motion.div
                key="dashboard"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <TabPane>
                  {/* Core Metrics Grid */}
                  <StatsGrid>
                    <StatCardBlue>
                      <StatCardHeader>
                        <div>
                          <StatLabel>{t("admin.stats.revenue")}</StatLabel>
                          <StatValue>৳{analytics?.totalRevenue?.toLocaleString() || 0}</StatValue>
                        </div>
                        <span className="material-symbols-outlined" style={{ color: "#705d00", fontSize: "28px", opacity: 0.8 }}>payments</span>
                      </StatCardHeader>
                    </StatCardBlue>

                    <StatCardGreen>
                      <StatCardHeader>
                        <div>
                          <StatLabel>{t("admin.stats.active")}</StatLabel>
                          <StatValue>{analytics?.activeTrips || 0}</StatValue>
                        </div>
                        <span className="material-symbols-outlined" style={{ color: "#526069", fontSize: "28px", opacity: 0.8 }}>flight_takeoff</span>
                      </StatCardHeader>
                    </StatCardGreen>

                    <StatCardAmber>
                      <StatCardHeader>
                        <div>
                          <StatLabel>Total Users</StatLabel>
                          <StatValue>{analytics?.newUsers || 0}</StatValue>
                        </div>
                        <span className="material-symbols-outlined" style={{ color: "#705d00", fontSize: "28px", opacity: 0.8 }}>group</span>
                      </StatCardHeader>
                    </StatCardAmber>

                    <StatCardGreen>
                      <StatCardHeader>
                        <div>
                          <StatLabel>Completed Trips</StatLabel>
                          <StatValue>{analytics?.completedBookings || 0}</StatValue>
                        </div>
                        <span className="material-symbols-outlined" style={{ color: "#526069", fontSize: "28px", opacity: 0.8 }}>check_circle</span>
                      </StatCardHeader>
                    </StatCardGreen>
                  </StatsGrid>

                  {/* Chart Panel */}
                  <DashCard style={{ padding: "24px" }}>
                    <ChartHeaderRow>
                      <ChartTitle>{t("admin.revenue_trends.title")}</ChartTitle>
                      <ChartDesc>{t("admin.revenue_trends.desc")}</ChartDesc>
                    </ChartHeaderRow>
                    <ChartContainer>
                      {[55, 75, 45, 90, 60, 85, 110, 70, 95, 65, 80, 105].map((val, idx) => (
                        <ChartBarColumn key={idx}>
                          <ChartBar $percent={val * 1.3} />
                          <ChartBarLabel>{idx + 1}</ChartBarLabel>
                        </ChartBarColumn>
                      ))}
                    </ChartContainer>
                  </DashCard>
                </TabPane>
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
              >
                <TabPaneGap20>
                  <SectionTopRow>
                    <SectionTitle>All Bookings Management</SectionTitle>
                    <SectionCount>{bookings.length} bookings</SectionCount>
                  </SectionTopRow>
                  <DashCard style={{ overflowX: "auto" }}>
                    <DashTable>
                      <thead>
                        <TableHeaderRow>
                          {["ID", "Tour", "Amount", "Status", "Actions"].map(h => (
                            <TableTh key={h}>{h}</TableTh>
                          ))}
                        </TableHeaderRow>
                      </thead>
                      <tbody>
                        {bookings.map((tx) => (
                          <TableTr key={tx._id}>
                            <TableTdMono>#{tx._id.slice(-6)}</TableTdMono>
                            <TableTdTitle>{tx.tourTitle}</TableTdTitle>
                            <TableTdBold>৳{tx.totalAmount}</TableTdBold>
                            <TableTdPad>
                              <Select
                                value={tx.status}
                                onChange={(e) => updateBookingStatus(tx._id, e.target.value)}
                              >
                                <option value="Pending">Pending</option>
                                <option value="Completed">Completed</option>
                                <option value="Refunded">Refunded</option>
                              </Select>
                            </TableTdPad>
                            <TableTdPad>
                              <DeleteBtn onClick={() => deleteBooking(tx._id)}>
                                Delete
                              </DeleteBtn>
                            </TableTdPad>
                          </TableTr>
                        ))}
                      </tbody>
                    </DashTable>
                  </DashCard>
                </TabPaneGap20>
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
              >
                <TabPaneGap20>
                  <SectionTopRow>
                    <SectionTitle>Tours Management</SectionTitle>
                    <BlueButton
                      onClick={() => {
                        setEditingTourId(null);
                        setTourForm({
                          title: "", titleBn: "", price: "", duration: "", durationBn: "",
                          description: "", descriptionBn: "", location: "", locationBn: "",
                          distanceNote: "", imgUrl: "", popular: false, startDate: "", endDate: ""
                        });
                        setTourFile(null);
                        setShowTourModal(true);
                      }}
                    >
                      Add Tour
                    </BlueButton>
                  </SectionTopRow>

                  {showTourModal && (
                    <DashCard style={{ padding: "24px" }}>
                      <TourFormBody onSubmit={handleSaveTour}>
                        <TourFormTitle>
                          {editingTourId ? "Edit Tour" : "Create New Tour"}
                        </TourFormTitle>
                        <TourFormGrid>
                          <FieldWrapper>
                            <FieldLabel>Tour Title (EN)</FieldLabel>
                            <FieldInput required placeholder="e.g. Sundarbans Safari" value={tourForm.title} onChange={e => setTourForm({...tourForm, title: e.target.value})} />
                          </FieldWrapper>
                          <FieldWrapper>
                            <FieldLabel>Tour Title (BN)</FieldLabel>
                            <FieldInput placeholder="e.g. সুন্দরবন সাফারি" value={tourForm.titleBn} onChange={e => setTourForm({...tourForm, titleBn: e.target.value})} />
                          </FieldWrapper>
                        </TourFormGrid>

                        <TourFormGrid>
                          <FieldWrapper>
                            <FieldLabel>Price (৳)</FieldLabel>
                            <FieldInput required placeholder="Price" type="number" value={tourForm.price} onChange={e => setTourForm({...tourForm, price: e.target.value})} />
                          </FieldWrapper>
                          <FieldWrapper>
                            <FieldLabel>Distance Note</FieldLabel>
                            <FieldInput placeholder="e.g. 2.5 km from forest base" value={tourForm.distanceNote} onChange={e => setTourForm({...tourForm, distanceNote: e.target.value})} />
                          </FieldWrapper>
                        </TourFormGrid>

                        <TourFormGrid>
                          <FieldWrapper>
                            <FieldLabel>Duration (EN)</FieldLabel>
                            <FieldInput required placeholder="e.g. 3 Days / 2 Nights" value={tourForm.duration} onChange={e => setTourForm({...tourForm, duration: e.target.value})} />
                          </FieldWrapper>
                          <FieldWrapper>
                            <FieldLabel>Duration (BN)</FieldLabel>
                            <FieldInput placeholder="e.g. ৩ দিন / ২ রাত" value={tourForm.durationBn} onChange={e => setTourForm({...tourForm, durationBn: e.target.value})} />
                          </FieldWrapper>
                        </TourFormGrid>

                        <TourFormGrid>
                          <FieldWrapper>
                            <FieldLabel>Location (EN)</FieldLabel>
                            <FieldInput placeholder="e.g. Sundarbans, Bangladesh" value={tourForm.location} onChange={e => setTourForm({...tourForm, location: e.target.value})} />
                          </FieldWrapper>
                          <FieldWrapper>
                            <FieldLabel>Location (BN)</FieldLabel>
                            <FieldInput placeholder="e.g. সুন্দরবন, বাংলাদেশ" value={tourForm.locationBn} onChange={e => setTourForm({...tourForm, locationBn: e.target.value})} />
                          </FieldWrapper>
                        </TourFormGrid>

                        <FieldWrapper>
                          <FieldLabel>Description (EN)</FieldLabel>
                          <FieldInput
                            as="textarea"
                            rows={3}
                            required
                            placeholder="English Tour Description"
                            value={tourForm.description}
                            onChange={e => setTourForm({...tourForm, description: e.target.value})}
                            style={{ padding: "10px", borderRadius: "8px", border: "1px solid rgba(82, 96, 105, 0.15)", outline: "none", resize: "vertical" }}
                          />
                        </FieldWrapper>

                        <FieldWrapper>
                          <FieldLabel>Description (BN)</FieldLabel>
                          <FieldInput
                            as="textarea"
                            rows={3}
                            placeholder="Bangla Tour Description"
                            value={tourForm.descriptionBn}
                            onChange={e => setTourForm({...tourForm, descriptionBn: e.target.value})}
                            style={{ padding: "10px", borderRadius: "8px", border: "1px solid rgba(82, 96, 105, 0.15)", outline: "none", resize: "vertical" }}
                          />
                        </FieldWrapper>

                        <TourFormGrid>
                          <FieldWrapper>
                            <FieldLabel>Starting Date</FieldLabel>
                            <FieldInput type="date" value={tourForm.startDate} onChange={e => setTourForm({...tourForm, startDate: e.target.value})} />
                          </FieldWrapper>
                          <FieldWrapper>
                            <FieldLabel>Ending Date</FieldLabel>
                            <FieldInput type="date" value={tourForm.endDate} onChange={e => setTourForm({...tourForm, endDate: e.target.value})} />
                          </FieldWrapper>
                        </TourFormGrid>

                        <TourFormGrid>
                          <FieldWrapper>
                            <FieldLabel>Image File</FieldLabel>
                            <FieldInput type="file" accept="image/*" onChange={e => setTourFile(e.target.files?.[0] || null)} />
                          </FieldWrapper>
                          <FieldWrapper>
                            <FieldLabel>Or Image URL</FieldLabel>
                            <FieldInput placeholder="Image URL (if not uploading)" value={tourForm.imgUrl} onChange={e => setTourForm({...tourForm, imgUrl: e.target.value})} />
                          </FieldWrapper>
                        </TourFormGrid>

                        <CheckboxRow>
                          <CheckboxInput
                            id="popular"
                            type="checkbox"
                            checked={tourForm.popular}
                            onChange={e => setTourForm({...tourForm, popular: e.target.checked})}
                          />
                          <CheckboxLabel htmlFor="popular">
                            Mark as Popular / Featured Tour
                          </CheckboxLabel>
                        </CheckboxRow>

                        <TourFormActions>
                          <BlueButton type="submit">Save</BlueButton>
                          <GhostButton
                            type="button"
                            onClick={() => {
                              setShowTourModal(false);
                              setEditingTourId(null);
                            }}
                          >
                            Cancel
                          </GhostButton>
                        </TourFormActions>
                      </TourFormBody>
                    </DashCard>
                  )}

                  <DashCard style={{ overflowX: "auto" }}>
                    <DashTable>
                      <thead>
                        <TableHeaderRow>
                          {["Image", "Title", "Price", "Actions"].map(h => (
                            <TableTh key={h}>{h}</TableTh>
                          ))}
                        </TableHeaderRow>
                      </thead>
                      <tbody>
                        {tours.map((t) => (
                          <TableTr key={t._id}>
                            <TableImgTd>
                              <TableImg src={t.imgUrl} alt={t.title} />
                            </TableImgTd>
                            <TableTdTitle>{t.title}</TableTdTitle>
                            <TableTdBold>৳{t.price}</TableTdBold>
                            <TableTdPad>
                              <EditBtn
                                onClick={() => {
                                  setEditingTourId(t._id);
                                  setTourForm({
                                    title: t.title || "", titleBn: t.titleBn || "",
                                    price: t.price?.toString() || "", duration: t.duration || "",
                                    durationBn: t.durationBn || "", description: t.description || "",
                                    descriptionBn: t.descriptionBn || "", location: t.location || "",
                                    locationBn: t.locationBn || "", distanceNote: t.distanceNote || "",
                                    imgUrl: t.imgUrl || "", popular: !!t.popular,
                                    startDate: t.startDate || "", endDate: t.endDate || ""
                                  });
                                  setTourFile(null);
                                  setShowTourModal(true);
                                }}
                              >
                                Edit
                              </EditBtn>
                              <DeleteBtn onClick={() => deleteTour(t._id)}>
                                Delete
                              </DeleteBtn>
                            </TableTdPad>
                          </TableTr>
                        ))}
                      </tbody>
                    </DashTable>
                  </DashCard>
                </TabPaneGap20>
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
              >
                <TabPaneGap20>
                  <SectionTopRow>
                    <SectionTitle>User Management</SectionTitle>
                    <SectionCount>{users.length} users</SectionCount>
                  </SectionTopRow>
                  <DashCard style={{ overflowX: "auto" }}>
                    <DashTable>
                      <thead>
                        <TableHeaderRow>
                          {["Name", "Email", "Role"].map(h => (
                            <TableTh key={h}>{h}</TableTh>
                          ))}
                        </TableHeaderRow>
                      </thead>
                      <tbody>
                        {users.map((u) => (
                          <TableTr key={u._id || u.id}>
                            <TableTdTitle>{u.name}</TableTdTitle>
                            <TableTdMono style={{ color: "#526069" }}>{u.email}</TableTdMono>
                            <TableTdPad>
                              <Select
                                value={u.role || "user"}
                                onChange={(e) => updateUserRole(u._id || u.id, e.target.value)}
                              >
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                              </Select>
                            </TableTdPad>
                          </TableTr>
                        ))}
                      </tbody>
                    </DashTable>
                  </DashCard>
                </TabPaneGap20>
              </motion.div>
            )}

          </AnimatePresence>
        </DashContent>
      </DashMain>
    </DashPage>
  );
}
