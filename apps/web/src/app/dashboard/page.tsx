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
  DashHero,
  DashHeroBg,
  HeroOrb,
  HeroContent,
  HeroTagline,
  HeroWelcome,
  HeroDesc,
  HeroActions,
  BlueButton,
  SecondaryBtn,
  StatsGrid,
  StatCardBlue,
  StatCardHeader,
  StatLabel,
  StatValue,
  StatCardGreen,
  StatCardAmber,
  DashCard,
  CardHeaderRow,
  CardTitle,
  ViewAllBtn,
  BookingRow,
  BookingLeft,
  BookingIconBox,
  BookingInfo,
  BookingTitle,
  BookingId,
  BookingRight,
  BookingAmount,
  StatusPill,
  TabPaneGap20,
  SectionTopRow,
  SectionTitle,
  SectionCount,
  TourGrid,
  ImageCard,
  CardImageWrapper,
  CardImg,
  CardImgFade,
  CardPrice,
  CardBody,
  CardName,
  DashTable,
  TableHeaderRow,
  TableTh,
  TableTr,
  TableTdMono,
  TableTdTitle,
  TableTdGray,
  TableTdBold,
  TableTdPad,
  CancelBtn,
  EmptyCell,
  EmptyIcon,
  EmptyText,
  BrowseToursBtn,
  WishlistHeart,
  PinkButton,
  TabPaneMaxWidth,
  HelpTitle,
  HelpInfoBanner,
  HelpInfoIconBox,
  HelpInfoTitle,
  HelpInfoDesc,
  HelpFormTitle,
  HelpTicketForm,
  HelpFieldLabel,
  Textarea,
  ContactGrid2,
  ContactOption,
  ContactOptionTitle,
  ContactOptionDesc,
  ModalBackdrop,
  ModalCard,
  ModalIconBox,
  ModalTitle,
  ModalDesc,
  ModalActions,
  TicketReceipt,
  TicketReceiptRow,
  TicketReceiptVal
} from "./dashboard.styles";

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
  const toast = useToast();

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
  const [cancelingBookingId, setCancelingBookingId] = useState<string | null>(null);
  const [showTicketSuccess, setShowTicketSuccess] = useState(false);
  const [submittedTicketId, setSubmittedTicketId] = useState("");

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
    const mockTicketId = "TK-" + Math.floor(100000 + Math.random() * 900000);
    setSubmittedTicketId(mockTicketId);
    setTimeout(() => {
      setTicketSent(false);
      setShowTicketSuccess(true);
      toast.success("Priority concierge ticket successfully dispatched.");
    }, 1200);
  };

  const savedTrips = savedTripsData;
  const activeBookingsCount = bookings.filter(b => b.status === "Pending").length;
  const completedBookingsCount = bookings.filter(b => b.status === "Completed").length;

  const initials = user?.name
    ? user.name.split(" ").map((n: string) => n[0]).join("").slice(0, 2).toUpperCase()
    : "EX";

  return (
    <DashPage>
      {/* SIDEBAR */}
      <>
        {/* Mobile overlay */}
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
                <UserName>{user?.name || "Explorer"}</UserName>
                <UserStatusRow>
                  <StatusDot $color="#34d399" />
                  <UserRole>
                    {isAdmin ? "Administrator" : "Level 3 Traveler"}
                  </UserRole>
                </UserStatusRow>
              </UserInfo>
            </UserCardInner>
          </SidebarUserCard>

          {/* Nav */}
          <SidebarNav>
            {visibleNavItems.map(item => (
              <DashNavBtn
                key={item.id}
                onClick={() => { setActiveTab(item.id); setSidebarOpen(false); }}
                $active={activeTab === item.id}
              >
                <span className="material-symbols-outlined" style={{ fontSize: "18px", color: activeTab === item.id ? "#e8b84b" : "#8899b0" }}>
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
              {t("dashboard.sidebar.sign_out")}
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
              <TopbarTitle>
                {visibleNavItems.find(n => n.id === activeTab)?.label || "Overview"}
              </TopbarTitle>
              <TopbarSubtitle>CholoBuddy Dashboard</TopbarSubtitle>
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
                  {/* Hero banner */}
                  <DashHero>
                    <DashHeroBg style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=1200&auto=format&fit=crop')" }} />
                    <HeroOrb />
                    <HeroContent>
                      <HeroTagline>Welcome back</HeroTagline>
                      <HeroWelcome>{user?.name?.split(" ")[0] || "Explorer"} 👋</HeroWelcome>
                      <HeroDesc>
                        {isAdmin ? t("dashboard.welcome_desc_admin") : t("dashboard.welcome_desc")}
                      </HeroDesc>
                      <HeroActions>
                        <BlueButton onClick={() => setActiveTab("all-tours")}>
                          <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>explore</span>
                          Browse Tours
                        </BlueButton>
                        {!isAdmin && (
                          <SecondaryBtn onClick={() => setActiveTab("my-trips")}>
                            <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>luggage</span>
                            My Bookings
                          </SecondaryBtn>
                        )}
                      </HeroActions>
                    </HeroContent>
                  </DashHero>

                  {/* Stats */}
                  {!isAdmin && (
                    <StatsGrid>
                      <StatCardBlue>
                        <StatCardHeader>
                          <div>
                            <StatLabel>{t("dashboard.stats.active_trips")}</StatLabel>
                            <StatValue>{activeBookingsCount}</StatValue>
                          </div>
                          <span className="material-symbols-outlined" style={{ color: "#e8b84b", fontSize: "28px", opacity: 0.9 }}>flight_takeoff</span>
                        </StatCardHeader>
                      </StatCardBlue>
                      <StatCardGreen>
                        <StatCardHeader>
                          <div>
                            <StatLabel>{t("dashboard.stats.completed")}</StatLabel>
                            <StatValue>{completedBookingsCount}</StatValue>
                          </div>
                          <span className="material-symbols-outlined" style={{ color: "#34d399", fontSize: "28px", opacity: 0.9 }}>check_circle</span>
                        </StatCardHeader>
                      </StatCardGreen>
                      <StatCardAmber>
                        <StatCardHeader>
                          <div>
                            <StatLabel>{t("dashboard.stats.level")}</StatLabel>
                            <StatValue style={{ fontSize: "28px" }}>Lvl 3</StatValue>
                          </div>
                          <span className="material-symbols-outlined" style={{ color: "#8b5cf6", fontSize: "28px", opacity: 0.9 }}>military_tech</span>
                        </StatCardHeader>
                      </StatCardAmber>
                    </StatsGrid>
                  )}

                  {/* Recent Bookings */}
                  {!isAdmin && bookings.length > 0 && (
                    <DashCard>
                      <CardHeaderRow>
                        <CardTitle>Recent Bookings</CardTitle>
                        <ViewAllBtn onClick={() => setActiveTab("my-trips")}>
                          View all →
                        </ViewAllBtn>
                      </CardHeaderRow>
                      <div>
                        {bookings.slice(0, 3).map(b => (
                          <BookingRow key={b._id}>
                            <BookingLeft>
                              <BookingIconBox>
                                <span className="material-symbols-outlined" style={{ color: "#e8b84b", fontSize: "15px" }}>luggage</span>
                              </BookingIconBox>
                              <BookingInfo>
                                <BookingTitle>{b.tourTitle}</BookingTitle>
                                <BookingId>#{b._id.slice(-6)}</BookingId>
                              </BookingInfo>
                            </BookingLeft>
                            <BookingRight>
                              <BookingAmount>{t("common.currency")}{b.totalAmount}</BookingAmount>
                              <StatusPill $status={b.status}>{b.status}</StatusPill>
                            </BookingRight>
                          </BookingRow>
                        ))}
                      </div>
                    </DashCard>
                  )}
                </TabPane>
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
              >
                <TabPaneGap20>
                  <SectionTopRow>
                    <SectionTitle>All Available Tours</SectionTitle>
                    <SectionCount>{tours.length} tours</SectionCount>
                  </SectionTopRow>
                  <TourGrid>
                    {tours.map((tour, i) => (
                      <ImageCard
                        key={tour._id}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25, delay: i * 0.04 }}
                      >
                        <CardImageWrapper>
                          <CardImg
                            alt={tour.title}
                            src={tour.imgUrl || "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=600&auto=format&fit=crop"}
                            style={{ filter: "brightness(0.7)" }}
                            onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                            onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                          />
                          <CardImgFade style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)" }} />
                          <CardPrice>{t("common.currency")}{tour.price}</CardPrice>
                        </CardImageWrapper>
                        <CardBody>
                          <CardName>{tour.title}</CardName>
                          {!isAdmin ? (
                            <BlueButton
                              onClick={() => handleDashboardBook(tour._id, tour.title, tour.price)}
                              style={{ padding: "8px 14px", borderRadius: "8px", fontSize: "10px" }}
                            >
                              Book
                              <span className="material-symbols-outlined" style={{ fontSize: "13px" }}>arrow_forward</span>
                            </BlueButton>
                          ) : (
                            <BlueButton
                              disabled
                              style={{ padding: "8px 14px", borderRadius: "8px", fontSize: "10px", opacity: 0.5, cursor: "not-allowed", backgroundColor: "#e2e8f0", color: "#64748b", border: "1px solid #cbd5e1" }}
                            >
                              Admin
                            </BlueButton>
                          )}
                        </CardBody>
                      </ImageCard>
                    ))}
                  </TourGrid>
                </TabPaneGap20>
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
                <SectionTopRow style={{ marginBottom: "20px" }}>
                  <SectionTitle>My Bookings</SectionTitle>
                  <SectionCount>{bookings.length} total</SectionCount>
                </SectionTopRow>
                <DashCard style={{ overflowX: "auto" }}>
                  <DashTable>
                    <thead>
                      <TableHeaderRow>
                        {["ID", "Tour", "Guests", "Amount", "Status", "Action"].map(h => (
                          <TableTh key={h}>{h}</TableTh>
                        ))}
                      </TableHeaderRow>
                    </thead>
                    <tbody>
                      {bookings.map(b => (
                        <TableTr key={b._id}>
                          <TableTdMono>#{b._id.slice(-6)}</TableTdMono>
                          <TableTdTitle>{b.tourTitle}</TableTdTitle>
                          <TableTdGray>{b.guests}</TableTdGray>
                          <TableTdBold>{t("common.currency")}{b.totalAmount}</TableTdBold>
                          <TableTdPad>
                            <StatusPill $status={b.status}>{b.status}</StatusPill>
                          </TableTdPad>
                          <TableTdPad>
                            <CancelBtn onClick={() => setCancelingBookingId(b._id)}>
                              Cancel
                            </CancelBtn>
                          </TableTdPad>
                        </TableTr>
                      ))}
                      {bookings.length === 0 && (
                        <tr>
                          <EmptyCell colSpan={6}>
                            <EmptyIcon className="material-symbols-outlined">luggage</EmptyIcon>
                            <EmptyText>No bookings yet</EmptyText>
                            <BrowseToursBtn onClick={() => setActiveTab("all-tours")}>
                              Browse tours →
                            </BrowseToursBtn>
                          </EmptyCell>
                        </tr>
                      )}
                    </tbody>
                  </DashTable>
                </DashCard>
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
              >
                <TabPaneGap20>
                  <SectionTopRow>
                    <SectionTitle>{t("dashboard.saved_trips")}</SectionTitle>
                    <SectionCount>{savedTripsData.length} saved</SectionCount>
                  </SectionTopRow>
                  <TourGrid>
                    {savedTripsData.map((trip, i) => (
                      <ImageCard
                        key={trip.id}
                        $wishlist={true}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25, delay: i * 0.04 }}
                      >
                        <CardImageWrapper>
                          <CardImg
                            alt={trip.title}
                            src={trip.imgUrl}
                            onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                            onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                          />
                          <CardImgFade />
                          <WishlistHeart>
                            <span className="material-symbols-outlined" style={{ color: "#f87171", fontSize: "14px", fontVariationSettings: "'FILL' 1" }}>favorite</span>
                          </WishlistHeart>
                          <CardPrice>{t("common.currency")}{trip.price}</CardPrice>
                        </CardImageWrapper>
                        <CardBody>
                          <CardName>{trip.title}</CardName>
                          <PinkButton onClick={() => router.push(`/trips/${trip.id}`)}>
                            {t("common.book_now")}
                          </PinkButton>
                        </CardBody>
                      </ImageCard>
                    ))}
                  </TourGrid>
                </TabPaneGap20>
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
              >
                <TabPaneMaxWidth>
                  <HelpTitle>Concierge Help Desk</HelpTitle>

                  {/* Info banner */}
                  <HelpInfoBanner>
                    <HelpInfoIconBox>
                      <span className="material-symbols-outlined" style={{ color: "#e8b84b", fontSize: "20px" }}>support_agent</span>
                    </HelpInfoIconBox>
                    <div>
                      <HelpInfoTitle>Priority Access</HelpInfoTitle>
                      <HelpInfoDesc>
                        As a Level 3 Traveler, you have priority concierge access. Our team typically responds within 2–4 hours.
                      </HelpInfoDesc>
                    </div>
                  </HelpInfoBanner>

                  {/* Form */}
                  <DashCard style={{ padding: "24px" }}>
                    <HelpFormTitle>Submit a Ticket</HelpFormTitle>
                    <HelpTicketForm onSubmit={handleTicketSubmit}>
                      <div>
                        <HelpFieldLabel>Your Message</HelpFieldLabel>
                        <Textarea
                          rows={5}
                          required
                          value={ticketMsg}
                          onChange={e => setTicketMsg(e.target.value)}
                          placeholder={`How can we assist you today, ${user?.name?.split(" ")[0] || "Explorer"}?`}
                        />
                      </div>
                      <BlueButton type="submit" disabled={ticketSent}>
                        <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>
                          {ticketSent ? "schedule" : "send"}
                        </span>
                        {ticketSent ? "Dispatching..." : "Submit Priority Ticket"}
                      </BlueButton>
                    </HelpTicketForm>
                  </DashCard>

                  {/* Contact options */}
                  <ContactGrid2>
                    {[
                      { icon: "chat_bubble", label: "Live Chat",     desc: "Avg wait: 5 min", color: "#e8b84b", bg: "rgba(232,184,75,.08)",  border: "rgba(232,184,75,.18)" },
                      { icon: "call",        label: "Phone Support", desc: "9am–9pm BDT",     color: "#34d399", bg: "rgba(52,211,153,.08)", border: "rgba(52,211,153,.18)" },
                    ].map(opt => (
                      <ContactOption key={opt.label} $bg={opt.bg} $border={opt.border}>
                        <span className="material-symbols-outlined" style={{ color: opt.color, fontSize: "22px" }}>{opt.icon}</span>
                        <div>
                          <ContactOptionTitle>{opt.label}</ContactOptionTitle>
                          <ContactOptionDesc>{opt.desc}</ContactOptionDesc>
                        </div>
                      </ContactOption>
                    ))}
                  </ContactGrid2>
                </TabPaneMaxWidth>
              </motion.div>
            )}

          </AnimatePresence>
        </DashContent>
      </DashMain>
      {/* CANCELLATION CONFIRMATION MODAL */}
      <AnimatePresence>
        {cancelingBookingId && (
          <ModalBackdrop
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCancelingBookingId(null)}
          >
            <ModalCard
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              transition={{ type: "spring", duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ModalIconBox>
                <span className="material-symbols-outlined" style={{ fontSize: "24px" }}>warning</span>
              </ModalIconBox>
              <ModalTitle>Cancel Booking Request</ModalTitle>
              <ModalDesc>
                Are you sure you want to cancel this booking? This action is irreversible and might be subject to our standard terms and conditions.
              </ModalDesc>
              <ModalActions>
                <SecondaryBtn
                  onClick={() => setCancelingBookingId(null)}
                  style={{ minWidth: "90px" }}
                >
                  Go Back
                </SecondaryBtn>
                <CancelBtn
                  onClick={async () => {
                    if (cancelingBookingId) {
                      await deleteBooking(cancelingBookingId);
                      setCancelingBookingId(null);
                    }
                  }}
                  style={{ minWidth: "90px", padding: "10px 16px", borderRadius: "12px", border: "1px solid #ef4444" }}
                >
                  Yes, Cancel
                </CancelBtn>
              </ModalActions>
            </ModalCard>
          </ModalBackdrop>
        )}
      </AnimatePresence>

      {/* CONCIERGE TICKET DISPATCHED MODAL */}
      <AnimatePresence>
        {showTicketSuccess && (
          <ModalBackdrop
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowTicketSuccess(false)}
          >
            <ModalCard
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              transition={{ type: "spring", duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ModalIconBox $color="rgba(34, 197, 94, 0.08)" style={{ color: "#22c55e" }}>
                <span className="material-symbols-outlined" style={{ fontSize: "24px" }}>verified</span>
              </ModalIconBox>
              <ModalTitle>Concierge Dispatched</ModalTitle>
              <ModalDesc>
                Your priority travel ticket has been logged in our secure system. A concierge agent has been assigned to your query.
              </ModalDesc>
              <TicketReceipt>
                <TicketReceiptRow>
                  <span>Ticket Reference:</span>
                  <TicketReceiptVal>{submittedTicketId}</TicketReceiptVal>
                </TicketReceiptRow>
                <TicketReceiptRow>
                  <span>Priority Tier:</span>
                  <TicketReceiptVal style={{ color: "#e8b84b" }}>Level 3 Concierge</TicketReceiptVal>
                </TicketReceiptRow>
                <TicketReceiptRow>
                  <span>Est. Response:</span>
                  <TicketReceiptVal>2 - 4 Hours</TicketReceiptVal>
                </TicketReceiptRow>
              </TicketReceipt>
              <ModalActions>
                <BlueButton
                  onClick={() => {
                    setShowTicketSuccess(false);
                    setTicketMsg("");
                  }}
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Acknowledge & Close
                </BlueButton>
              </ModalActions>
            </ModalCard>
          </ModalBackdrop>
        )}
      </AnimatePresence>
    </DashPage>
  );
}
