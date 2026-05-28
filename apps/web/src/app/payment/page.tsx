"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/hooks/useAuth";
import { useLanguage } from "@/hooks/useLanguage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/context/Toast";
import * as S from "./payment.styles";

function PaymentContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { user, role } = useAuth();
  const { t } = useLanguage();
  const toast = useToast();

  const tourId = searchParams.get("tourId") || "";
  const tourTitle = searchParams.get("tourTitle") || "";
  const guests = parseInt(searchParams.get("guests") || "1", 10);
  const dateKey = searchParams.get("date") || "oct_24";
  const totalAmount = parseInt(searchParams.get("totalAmount") || "0", 10);

  // Active Tab: "cards" | "mobile" | "internet"
  const [activeTab, setActiveTab] = useState<"cards" | "mobile" | "internet">("cards");

  // Input states
  const [selectedMobile, setSelectedMobile] = useState<"bkash" | "nagad" | "rocket" | "upay">("bkash");
  const [mobileStep, setMobileStep] = useState<"number" | "otp" | "pin">("number");
  const [mobileNumber, setMobileNumber] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const [pinCode, setPinCode] = useState("");

  const [cardType, setCardType] = useState<"visa" | "mastercard" | "amex" | "unknown">("visa");
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");

  const [selectedBank, setSelectedBank] = useState<string | null>(null);
  const [bankUsername, setBankUsername] = useState("");
  const [bankPassword, setBankPassword] = useState("");
  const [bankStep, setBankStep] = useState<"select" | "login">("select");

  // Payment progress states
  const [processing, setProcessing] = useState(false);
  const [processingMsg, setProcessingMsg] = useState("");
  const [txnId, setTxnId] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  useEffect(() => {
    // Redirect to home if user is an admin or no tour details
    if (role === "admin") {
      router.push("/");
      return;
    }
    if (!tourId || totalAmount <= 0) {
      router.push("/");
    }
  }, [tourId, totalAmount, role, router]);

  // Card type detector based on first digit
  const handleCardNumberChange = (val: string) => {
    const clean = val.replace(/\D/g, "");
    setCardNumber(clean.slice(0, 16));

    if (clean.startsWith("4")) {
      setCardType("visa");
    } else if (clean.startsWith("5")) {
      setCardType("mastercard");
    } else if (clean.startsWith("3")) {
      setCardType("amex");
    } else {
      setCardType("unknown");
    }
  };

  const handleMobileNumberChange = (val: string) => {
    setMobileNumber(val.replace(/\D/g, "").slice(0, 11));
  };

  const handleOtpChange = (val: string) => {
    setOtpCode(val.replace(/\D/g, "").slice(0, 6));
  };

  const handlePinChange = (val: string) => {
    setPinCode(val.replace(/\D/g, "").slice(0, 4));
  };

  const formatCardNumber = (num: string) => {
    const chunks = num.match(/.{1,4}/g);
    return chunks ? chunks.join(" ") : num;
  };

  const dateLabels: Record<string, string> = {
    oct_24: "Oct 24 – 28, 2026",
    nov_08: "Nov 08 – 12, 2026",
    dec_15: "Dec 15 – 19, 2026",
  };

  const mobileProviderDetails = {
    bkash: { label: "bKash", color: "#E2125B", bg: "#FFEBF0" },
    nagad: { label: "Nagad", color: "#F15A22", bg: "#FFF2EB" },
    rocket: { label: "Rocket", color: "#8C3494", bg: "#FAF0FC" },
    upay: { label: "Upay", color: "#00529C", bg: "#EBF4FF" },
  };

  // Perform checkout
  const handlePaymentSubmit = async () => {
    setProcessing(true);
    setProcessingMsg("Contacting secure merchant server...");

    setTimeout(() => {
      setProcessingMsg("Authorizing secure transaction with bank gateway...");

      setTimeout(() => {
        setProcessingMsg("Processing payment authorization code...");

        setTimeout(async () => {
          try {
            // Call backend API to record the booking
            const res = await fetch("/api/bookings", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                tourId,
                tourTitle,
                guests,
                date: dateKey,
                totalAmount,
              }),
            });

            if (res.ok) {
              const data = await res.json();
              const simulatedTxn = "TXN-" + Math.random().toString(36).substring(2, 10).toUpperCase();
              setTxnId(simulatedTxn);
              setPaymentSuccess(true);
              toast.success("Payment completed successfully!");
            } else {
              toast.error("Payment failed on backend: Booking could not be created.");
            }
          } catch (e) {
            console.error(e);
            toast.error("Network error: Could not complete booking.");
          } finally {
            setProcessing(false);
          }
        }, 1000);
      }, 1000);
    }, 1000);
  };

  if (paymentSuccess) {
    return (
      <S.SuccessContainer>
        <S.SuccessCard
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Animated checkmark */}
          <S.CheckCircle>
            <span className="material-symbols-outlined">check</span>
          </S.CheckCircle>

          <S.PageTitle style={{ fontSize: "24px", marginBottom: "8px" }}>
            Payment Successful!
          </S.PageTitle>
          <p style={{ color: "rgba(25, 28, 29, 0.8)", fontSize: "14px", marginBottom: "24px" }}>
            Your booking for <strong style={{ color: "#000000" }}>{tourTitle}</strong> has been secured.
          </p>

          {/* Receipt details */}
          <S.SuccessReceipt>
            <S.ReceiptRow>
              <S.ReceiptLabel>Transaction ID:</S.ReceiptLabel>
              <S.ReceiptVal>{txnId}</S.ReceiptVal>
            </S.ReceiptRow>
            <S.ReceiptRow>
              <S.ReceiptLabel>Payment Type:</S.ReceiptLabel>
              <S.ReceiptVal style={{ textTransform: "uppercase" }}>
                {activeTab === "cards" ? "Credit Card" : activeTab === "mobile" ? `${selectedMobile} mobile` : "Net Banking"}
              </S.ReceiptVal>
            </S.ReceiptRow>
            <S.ReceiptRow>
              <S.ReceiptLabel>Traveler:</S.ReceiptLabel>
              <S.ReceiptVal>{user?.name || "Premium Explorer"}</S.ReceiptVal>
            </S.ReceiptRow>
            <S.ReceiptRow>
              <S.ReceiptLabel>Total Guests:</S.ReceiptLabel>
              <S.ReceiptVal>{guests} traveler(s)</S.ReceiptVal>
            </S.ReceiptRow>
            <S.ReceiptRow>
              <S.ReceiptLabel>Date Range:</S.ReceiptLabel>
              <S.ReceiptVal>{dateLabels[dateKey] || dateKey}</S.ReceiptVal>
            </S.ReceiptRow>
            <S.ReceiptRow style={{ borderTop: "1px solid rgba(196, 199, 199, 0.2)", paddingTop: "12px", fontWeight: "bold", fontSize: "14px", color: "#000000" }}>
              <S.ReceiptLabel style={{ opacity: 1 }}>Amount Paid:</S.ReceiptLabel>
              <span style={{ color: "#705d00" }}>৳{totalAmount.toLocaleString()}</span>
            </S.ReceiptRow>
          </S.SuccessReceipt>

          <S.ActionButtonGroup>
            <S.PrimaryBtn
              onClick={() => router.push("/dashboard")}
              style={{ flex: "none", padding: "14px 28px" }}
            >
              Go to Dashboard
            </S.PrimaryBtn>
            <S.SecondaryBtn
              onClick={() => router.push("/")}
              style={{ flex: "none", padding: "14px 28px" }}
            >
              Return Home
            </S.SecondaryBtn>
          </S.ActionButtonGroup>
        </S.SuccessCard>
      </S.SuccessContainer>
    );
  }

  return (
    <S.PaymentContainer>
      {/* Processing Loader Overlay */}
      <AnimatePresence>
        {processing && (
          <S.ProcessingOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <S.LoaderWrapper>
              <S.Spinner />
              <S.ProcessingMsg>
                {processingMsg}
              </S.ProcessingMsg>
            </S.LoaderWrapper>
          </S.ProcessingOverlay>
        )}
      </AnimatePresence>

      <S.GridWrapper>
        {/* Breadcrumb / Title */}
        <div style={{ marginBottom: "32px", userSelect: "none" }}>
          <S.BreadcrumbButton onClick={() => router.back()}>
            <span className="material-symbols-outlined">arrow_back</span>
            Back to Tour Details
          </S.BreadcrumbButton>
          <S.PageTitle>
            Checkout Securely
          </S.PageTitle>
          <S.PageSubtitle>
            SSLCommerz Dummy Sandbox Gateway
          </S.PageSubtitle>
        </div>

        <S.ContentLayout>
          {/* Left Column - Payment Tabs */}
          <S.PaymentFormPanel>
            <S.TabHeader>
              <S.TabButton
                onClick={() => setActiveTab("cards")}
                $active={activeTab === "cards"}
              >
                <span className="material-symbols-outlined">credit_card</span>
                Cards
              </S.TabButton>
              <S.TabButton
                onClick={() => setActiveTab("mobile")}
                $active={activeTab === "mobile"}
              >
                <span className="material-symbols-outlined">phone_iphone</span>
                Mobile Banking
              </S.TabButton>
              <S.TabButton
                onClick={() => setActiveTab("internet")}
                $active={activeTab === "internet"}
              >
                <span className="material-symbols-outlined">language</span>
                Net Banking
              </S.TabButton>
            </S.TabHeader>

            {/* TAB CONTENT: CARDS */}
            {activeTab === "cards" && (
              <div>
                <S.TabTitle>Enter Card Details</S.TabTitle>

                {/* Mock Card Preview */}
                <S.CardPreview>
                  <S.CardHeader>
                    <S.CardSystemLabel>CholoBuddy Card</S.CardSystemLabel>
                    {cardType === "visa" && <S.CardBrand $brandColor="#2A52BE">VISA</S.CardBrand>}
                    {cardType === "mastercard" && <S.CardBrand $brandColor="#E52A2D">MasterCard</S.CardBrand>}
                    {cardType === "amex" && <S.CardBrand $brandColor="#007BC4">AMEX</S.CardBrand>}
                    {cardType === "unknown" && <S.CardSystemLabel style={{ opacity: 0.4 }}>CARD</S.CardSystemLabel>}
                  </S.CardHeader>
                  <S.CardNumberDisplay>
                    {cardNumber ? formatCardNumber(cardNumber) : "•••• •••• •••• ••••"}
                  </S.CardNumberDisplay>
                  <S.CardFooter>
                    <S.CardHolderBlock>
                      <S.CardDetailLabel>Card Holder</S.CardDetailLabel>
                      <S.CardDetailValue>{cardHolder || "EXPLORER NAME"}</S.CardDetailValue>
                    </S.CardHolderBlock>
                    <div>
                      <S.CardDetailLabel>Expires</S.CardDetailLabel>
                      <S.CardDetailValue>{cardExpiry || "MM/YY"}</S.CardDetailValue>
                    </div>
                  </S.CardFooter>
                </S.CardPreview>

                {/* Form fields */}
                <S.CardFieldsGrid>
                  <S.FieldWrapper>
                    <S.FieldLabel>Card Number</S.FieldLabel>
                    <S.FieldInput
                      type="text"
                      value={cardNumber}
                      onChange={(e) => handleCardNumberChange(e.target.value)}
                      placeholder="4000 1234 5678 9010"
                    />
                  </S.FieldWrapper>
                  <S.FieldWrapper>
                    <S.FieldLabel>Card Holder Name</S.FieldLabel>
                    <S.FieldInput
                      type="text"
                      value={cardHolder}
                      onChange={(e) => setCardHolder(e.target.value)}
                      placeholder="Marcus Chen"
                    />
                  </S.FieldWrapper>
                  <S.FieldWrapper>
                    <S.FieldLabel>Expiration Date</S.FieldLabel>
                    <S.FieldInput
                      type="text"
                      value={cardExpiry}
                      onChange={(e) => setCardExpiry(e.target.value.slice(0, 5))}
                      placeholder="MM/YY"
                    />
                  </S.FieldWrapper>
                  <S.FieldWrapper>
                    <S.FieldLabel>CVV</S.FieldLabel>
                    <S.FieldInput
                      type="password"
                      value={cardCvv}
                      onChange={(e) => setCardCvv(e.target.value.replace(/\D/g, "").slice(0, 3))}
                      placeholder="•••"
                    />
                  </S.FieldWrapper>
                </S.CardFieldsGrid>

                <S.PayButton
                  onClick={handlePaymentSubmit}
                  disabled={!cardNumber || !cardHolder || !cardExpiry || !cardCvv}
                >
                  Pay ৳{totalAmount.toLocaleString()} Securely
                </S.PayButton>
              </div>
            )}

            {/* TAB CONTENT: MOBILE BANKING */}
            {activeTab === "mobile" && (
              <div>
                <S.TabTitle>Select Mobile Provider</S.TabTitle>

                {/* Mobile provider buttons */}
                <S.ProviderGrid>
                  {(Object.keys(mobileProviderDetails) as Array<keyof typeof mobileProviderDetails>).map((prov) => {
                    const info = mobileProviderDetails[prov];
                    return (
                      <S.ProviderBtn
                        key={prov}
                        onClick={() => {
                          setSelectedMobile(prov);
                          setMobileStep("number");
                        }}
                        $selected={selectedMobile === prov}
                        $brandColor={info.color}
                        $bgColor={info.bg}
                      >
                        <span>{info.label}</span>
                      </S.ProviderBtn>
                    );
                  })}
                </S.ProviderGrid>

                {/* Mobile Sub-views */}
                <S.MobileFormWrapper>
                  <S.ProviderBadgeWrapper>
                    <S.ProviderBadge>
                      {selectedMobile} sandbox checkout
                    </S.ProviderBadge>
                  </S.ProviderBadgeWrapper>

                  {mobileStep === "number" && (
                    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                      <S.FieldWrapper>
                        <S.FieldLabel style={{ textAlign: "left" }}>
                          {selectedMobile} Wallet Number
                        </S.FieldLabel>
                        <S.FieldInput
                          type="text"
                          value={mobileNumber}
                          onChange={(e) => handleMobileNumberChange(e.target.value)}
                          placeholder="017xxxxxxxx"
                          style={{ textAlign: "center", fontFamily: "monospace", fontWeight: "bold", letterSpacing: "0.1em" }}
                        />
                      </S.FieldWrapper>
                      <S.PrimaryBtn
                        onClick={() => setMobileStep("otp")}
                        disabled={mobileNumber.length !== 11}
                        style={{ width: "100%" }}
                      >
                        Send Verification Code
                      </S.PrimaryBtn>
                    </div>
                  )}

                  {mobileStep === "otp" && (
                    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                      <p style={{ textAlign: "center", fontSize: "12px", color: "rgba(25, 28, 29, 0.8)" }}>
                        Verification code sent to <strong style={{ fontFamily: "monospace" }}>{mobileNumber}</strong>. (Hint: Enter <strong style={{ fontFamily: "monospace" }}>123456</strong>)
                      </p>
                      <S.FieldWrapper>
                        <S.FieldInput
                          type="text"
                          value={otpCode}
                          onChange={(e) => handleOtpChange(e.target.value)}
                          placeholder="••••••"
                          style={{ textAlign: "center", fontFamily: "monospace", fontWeight: "bold", letterSpacing: "0.15em" }}
                        />
                      </S.FieldWrapper>
                      <S.ButtonGroup>
                        <S.SecondaryBtn
                          onClick={() => setMobileStep("number")}
                        >
                          Back
                        </S.SecondaryBtn>
                        <S.PrimaryBtn
                          onClick={() => setMobileStep("pin")}
                          disabled={otpCode.length !== 6}
                        >
                          Verify OTP
                        </S.PrimaryBtn>
                      </S.ButtonGroup>
                    </div>
                  )}

                  {mobileStep === "pin" && (
                    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                      <p style={{ textAlign: "center", fontSize: "12px", color: "rgba(25, 28, 29, 0.8)" }}>
                        Enter wallet PIN to confirm. (Hint: Enter <strong style={{ fontFamily: "monospace" }}>1234</strong>)
                      </p>
                      <S.FieldWrapper>
                        <S.FieldInput
                          type="password"
                          value={pinCode}
                          onChange={(e) => handlePinChange(e.target.value)}
                          placeholder="••••"
                          style={{ textAlign: "center", fontFamily: "monospace", fontWeight: "bold", letterSpacing: "0.15em" }}
                        />
                      </S.FieldWrapper>
                      <S.ButtonGroup>
                        <S.SecondaryBtn
                          onClick={() => setMobileStep("otp")}
                        >
                          Back
                        </S.SecondaryBtn>
                        <S.PrimaryBtn
                          onClick={handlePaymentSubmit}
                          disabled={pinCode.length !== 4}
                        >
                          Confirm Pay
                        </S.PrimaryBtn>
                      </S.ButtonGroup>
                    </div>
                  )}
                </S.MobileFormWrapper>
              </div>
            )}

            {/* TAB CONTENT: NET BANKING */}
            {activeTab === "internet" && (
              <div>
                <S.TabTitle>Select Internet Bank</S.TabTitle>

                {bankStep === "select" && (
                  <S.ProviderGrid>
                    {[
                      { id: "brac", name: "BRAC Bank" },
                      { id: "city", name: "City Bank" },
                      { id: "islamic", name: "Islami Bank" },
                      { id: "mtb", name: "Mutual Trust" },
                    ].map((b) => (
                      <S.ProviderBtn
                        key={b.id}
                        onClick={() => {
                          setSelectedBank(b.name);
                          setBankStep("login");
                        }}
                        $selected={false}
                        $brandColor="#000000"
                        $bgColor="transparent"
                        style={{ height: "80px" }}
                      >
                        <span style={{ fontSize: "12px" }}>{b.name}</span>
                      </S.ProviderBtn>
                    ))}
                  </S.ProviderGrid>
                )}

                {bankStep === "login" && selectedBank && (
                  <S.MobileFormWrapper>
                    <S.ProviderBadgeWrapper>
                      <S.ProviderBadge>
                        {selectedBank} Portal Login
                      </S.ProviderBadge>
                    </S.ProviderBadgeWrapper>

                    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                      <S.FieldWrapper>
                        <S.FieldLabel>Username</S.FieldLabel>
                        <S.FieldInput
                          type="text"
                          value={bankUsername}
                          onChange={(e) => setBankUsername(e.target.value)}
                          placeholder="marcus_chen"
                        />
                      </S.FieldWrapper>
                      <S.FieldWrapper>
                        <S.FieldLabel>Password</S.FieldLabel>
                        <S.FieldInput
                          type="password"
                          value={bankPassword}
                          onChange={(e) => setBankPassword(e.target.value)}
                          placeholder="••••••••"
                        />
                      </S.FieldWrapper>
                      <S.ButtonGroup style={{ marginTop: "8px" }}>
                        <S.SecondaryBtn
                          onClick={() => {
                            setBankStep("select");
                            setSelectedBank(null);
                          }}
                        >
                          Cancel
                        </S.SecondaryBtn>
                        <S.PrimaryBtn
                          onClick={handlePaymentSubmit}
                          disabled={!bankUsername || !bankPassword}
                        >
                          Login & Pay
                        </S.PrimaryBtn>
                      </S.ButtonGroup>
                    </div>
                  </S.MobileFormWrapper>
                )}
              </div>
            )}
          </S.PaymentFormPanel>

          {/* Right Column - Booking Summary Card */}
          <S.SummaryCard>
            <S.SummaryHeader>Booking Summary</S.SummaryHeader>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <span style={{ fontFamily: "monospace", fontSize: "10px", color: "#526069", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: "bold", display: "block" }}>
                  Tour Plan
                </span>
                <S.SummaryTourTitle>{tourTitle}</S.SummaryTourTitle>
              </div>

              <S.DetailRow>
                <S.DetailCell>
                  <S.DetailLabel>Travel Date</S.DetailLabel>
                  <S.DetailVal>{dateLabels[dateKey] || dateKey}</S.DetailVal>
                </S.DetailCell>
                <S.DetailCell>
                  <S.DetailLabel>Travelers</S.DetailLabel>
                  <S.DetailVal>{guests} guest(s)</S.DetailVal>
                </S.DetailCell>
              </S.DetailRow>

              <S.CostBox>
                <S.CostRow>
                  <span>Booking Subtotal:</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>৳{(totalAmount * 0.96).toLocaleString()}</span>
                </S.CostRow>
                <S.CostRow>
                  <span>Eco-Tax & Service (4%):</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>৳{(totalAmount * 0.04).toLocaleString()}</span>
                </S.CostRow>
                <S.CostTotalRow>
                  <span>Total Amount:</span>
                  <span style={{ color: "#705d00" }}>৳{totalAmount.toLocaleString()}</span>
                </S.CostTotalRow>
              </S.CostBox>
            </div>
          </S.SummaryCard>
        </S.ContentLayout>
      </S.GridWrapper>
    </S.PaymentContainer>
  );
}

export default function PaymentPage() {
  return (
    <>
      <Navbar />
      <Suspense fallback={
        <main style={{ minHeight: "100vh", paddingTop: "72px", backgroundColor: "#f8f9fa", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: "32px", height: "32px", border: "4px solid #000000", borderTopColor: "transparent", borderRadius: "50%", animation: "spin 1s linear infinite" }} />
        </main>
      }>
        <PaymentContent />
      </Suspense>
      <Footer />
    </>
  );
}
