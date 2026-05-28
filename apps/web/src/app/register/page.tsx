"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { useAuth } from "@/hooks/useAuth";
import * as S from "./register.styles";

interface ToastState {
  show: boolean;
  message: string;
  type: "success" | "info" | "error";
}

const features = [
  { icon: "travel_explore", label: "120+ destinations" },
  { icon: "star",           label: "Curated experiences" },
  { icon: "groups",         label: "Expert local guides" },
  { icon: "verified",       label: "Verified & trusted" },
];

function RegisterContent() {
  const { t } = useLanguage();
  const { signUp } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const [fullname,        setFullname]        = useState("");
  const [email,           setEmail]           = useState("");
  const [password,        setPassword]        = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword,    setShowPassword]    = useState(false);
  const [showConfirm,     setShowConfirm]     = useState(false);
  const [isSubmitting,    setIsSubmitting]    = useState(false);
  const [toast, setToast] = useState<ToastState>({ show: false, message: "", type: "info" });

  const showToast = (message: string, type: "success" | "info" | "error" = "info") => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast(p => ({ ...p, show: false })), 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      showToast(t("register.toast_mismatch"), "error");
      return;
    }
    setIsSubmitting(true);
    const res = await signUp({ email, password, name: fullname });
    setIsSubmitting(false);
    if (res?.error) {
      showToast(res.error.message || "Registration failed", "error");
    } else {
      showToast(t("register.toast_success"), "success");
      setTimeout(() => router.push(callbackUrl || "/dashboard"), 1000);
    }
  };

  const handleOAuth = (provider: string) => showToast(`${t("login.toast_oauth")} (${provider})`, "info");
  const handleOTP   = () => showToast(t("login.toast_otp"), "info");

  const filled = [fullname, email, password, confirmPassword].filter(Boolean).length;
  const progress = (filled / 4) * 100;

  return (
    <S.AuthPage>
      {/* LEFT PANEL */}
      <S.AuthLeft>
        <S.AuthBgImage style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop')" }} />
        <S.AuthBgFade />
        <S.AuthGridTexture />
        <S.AuthOrb $position="p1" />
        <S.AuthOrb $position="p2" />

        <div style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", height: "100%", padding: "48px 56px" }}>
          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
              <S.BrandIcon $variant="purple">
                <span className="material-symbols-outlined" style={{ color: "#fff", fontSize: "18px" }}>flight_takeoff</span>
              </S.BrandIcon>
              <span style={{ fontFamily: "monospace", fontSize: "13px", fontWeight: 700, letterSpacing: "0.2em", color: "#fff", textTransform: "uppercase" }}>
                CholoBuddy
              </span>
            </Link>
          </motion.div>

          {/* Headline */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}>
              <p style={{ fontFamily: "monospace", fontSize: "11px", letterSpacing: "0.3em", color: "#c9a900", textTransform: "uppercase", marginBottom: "20px" }}>
                Begin your journey
              </p>
              <h1 style={{ fontSize: "36px", fontWeight: 800, color: "#fff", lineHeight: 1.15, marginBottom: "16px" }}>
                Join thousands of<br />
                <span style={{ background: "linear-gradient(135deg,#526069,#c9a900,#e9c400)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  adventurous travelers
                </span>
              </h1>
              <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: 1.7, maxWidth: "400px", marginTop: "10px" }}>
                Create your account and unlock premium travel experiences across Bangladesh's most breathtaking destinations.
              </p>
            </motion.div>

            {/* Feature grid */}
            <S.FeatureGrid
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {features.map((f, i) => (
                <S.FeatureItem
                  key={f.label}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, delay: 0.5 + i * 0.07 }}
                >
                  <S.FeatureIconBox>
                    <span className="material-symbols-outlined" style={{ color: "#e9c400", fontSize: "16px" }}>{f.icon}</span>
                  </S.FeatureIconBox>
                  <S.FeatureLabel>{f.label}</S.FeatureLabel>
                </S.FeatureItem>
              ))}
            </S.FeatureGrid>
          </div>

          {/* Quote */}
          <S.QuoteBlock
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.75 }}
          >
            <p style={{ color: "#475569", fontSize: "13px", fontStyle: "italic", lineHeight: 1.7 }}>
              "The world is a book, and those who do not travel read only one page."
            </p>
            <p style={{ fontFamily: "monospace", fontSize: "10px", color: "#334155", textTransform: "uppercase", letterSpacing: "0.2em", marginTop: "8px" }}>
              — Saint Augustine
            </p>
          </S.QuoteBlock>
        </div>
      </S.AuthLeft>

      {/* RIGHT PANEL */}
      <S.AuthRight>
        {/* Floating Home Button */}
        <div style={{ position: "absolute", top: "24px", right: "24px", zIndex: 50 }}>
          <Link
            href="/"
            style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "8px 14px", borderRadius: "10px", border: "1px solid rgba(255, 255, 255, 0.09)", background: "rgba(255, 255, 255, 0.04)", fontFamily: "monospace", fontSize: "11px", color: "#bac9d3", textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.1em", transition: "all 0.2s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,.09)"; (e.currentTarget as HTMLAnchorElement).style.color = "#fff"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,.20)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,.04)"; (e.currentTarget as HTMLAnchorElement).style.color = "#bac9d3"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,.09)"; }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>home</span>
            Home
          </Link>
        </div>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "360px", height: "360px", borderRadius: "9999px", background: "rgba(139,92,246,.05)", filter: "blur(80px)", pointerEvents: "none" }} />

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: "relative", width: "100%", maxWidth: "420px" }}
        >
          <S.AuthGlassCard>
            <S.GlassShimmer $variant="purple" />

            {/* Header + progress */}
            <div style={{ position: "relative", marginBottom: "24px" }}>
              <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#fff", marginBottom: "4px" }}>{t("register.welcome")}</h2>
              <p style={{ color: "#64748b", fontSize: "13px", marginBottom: "16px" }}>{t("register.desc")}</p>

              {/* Progress bar */}
              <S.ProgressBarWrapper>
                <S.ProgressBarFill animate={{ width: `${progress}%` }} transition={{ duration: 0.35 }} />
              </S.ProgressBarWrapper>
              <p style={{ fontFamily: "monospace", fontSize: "9px", color: "#334155", textTransform: "uppercase", letterSpacing: "0.15em", marginTop: "4px" }}>
                {filled}/4 fields completed
              </p>
            </div>

            {/* Social auth */}
            <S.SocialAuthRow>
              <S.SocialButton onClick={() => handleOAuth("Google")}>
                <img alt="Google" src="https://www.gstatic.com/images/branding/product/1x/gsa_android_64dp.png" style={{ width: "15px", height: "15px" }} />
                <span style={{ fontFamily: "monospace", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  {t("register.google")}
                </span>
              </S.SocialButton>
              <S.SocialButton onClick={handleOTP}>
                <span className="material-symbols-outlined" style={{ fontSize: "15px" }}>sms</span>
                <span style={{ fontFamily: "monospace", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  {t("register.otp")}
                </span>
              </S.SocialButton>
            </S.SocialAuthRow>

            {/* Divider */}
            <S.Divider>
              <S.DividerLine />
              <S.DividerText>{t("register.divider")}</S.DividerText>
              <S.DividerLine />
            </S.Divider>

            {/* Form */}
            <form onSubmit={handleSubmit} style={{ position: "relative", display: "flex", flexDirection: "column", gap: "14px" }}>
              {/* Full Name */}
              <div>
                <S.FormLabel>{t("register.fullname_label")}</S.FormLabel>
                <S.InputGroup>
                  <S.InputIcon className="material-symbols-outlined">person</S.InputIcon>
                  <S.FormInput
                    required
                    type="text"
                    value={fullname}
                    onChange={e => setFullname(e.target.value)}
                    placeholder={t("register.fullname_placeholder")}
                    $focusVariant="purple"
                  />
                </S.InputGroup>
              </div>

              {/* Email */}
              <div>
                <S.FormLabel>{t("register.email_label")}</S.FormLabel>
                <S.InputGroup>
                  <S.InputIcon className="material-symbols-outlined">mail</S.InputIcon>
                  <S.FormInput
                    required
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder={t("register.email_placeholder")}
                    $focusVariant="purple"
                  />
                </S.InputGroup>
              </div>

              {/* Password */}
              <div>
                <S.FormLabel>{t("register.password_label")}</S.FormLabel>
                <S.InputGroup>
                  <S.InputIcon className="material-symbols-outlined">lock</S.InputIcon>
                  <S.FormInput
                    required
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder={t("register.password_placeholder")}
                    $hasRightIcon={true}
                    $focusVariant="purple"
                  />
                  <S.EyeButton type="button" onClick={() => setShowPassword(v => !v)}>
                    <span className="material-symbols-outlined" style={{ fontSize: "17px" }}>
                      {showPassword ? "visibility_off" : "visibility"}
                    </span>
                  </S.EyeButton>
                </S.InputGroup>
              </div>

              {/* Confirm Password */}
              <div>
                <S.FormLabel>{t("register.confirm_password_label")}</S.FormLabel>
                <S.InputGroup>
                  <S.InputIcon className="material-symbols-outlined">lock_clock</S.InputIcon>
                  <S.FormInput
                    required
                    type={showConfirm ? "text" : "password"}
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    placeholder={t("register.confirm_password_placeholder")}
                    $hasRightIcon={true}
                    $focusVariant="purple"
                  />
                  <S.EyeButton type="button" onClick={() => setShowConfirm(v => !v)}>
                    <span className="material-symbols-outlined" style={{ fontSize: "17px" }}>
                      {showConfirm ? "visibility_off" : "visibility"}
                    </span>
                  </S.EyeButton>
                </S.InputGroup>
              </div>

              {/* Submit */}
              <S.SubmitBtn type="submit" disabled={isSubmitting}>
                {isSubmitting ? t("register.submit_loading") : t("register.submit_idle")}
              </S.SubmitBtn>

              <p style={{ textAlign: "center", fontFamily: "monospace", fontSize: "11px", color: "#475569", textTransform: "uppercase", letterSpacing: "0.12em" }}>
                {t("register.have_account")}{" "}
                <Link href={callbackUrl ? `/login?callbackUrl=${encodeURIComponent(callbackUrl)}` : "/login"} style={{ color: "#c9a900", fontWeight: 700, textDecoration: "none" }}>
                  {t("register.sign_in")}
                </Link>
              </p>
            </form>
          </S.AuthGlassCard>
        </motion.div>
      </S.AuthRight>

      {/* Toast Notification */}
      <AnimatePresence>
        {toast.show && (
          <S.ToastNotification
            $type={toast.type}
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>
              {toast.type === "success" ? "check_circle" : toast.type === "error" ? "error" : "info"}
            </span>
            <span style={{ fontFamily: "monospace", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>
              {toast.message}
            </span>
          </S.ToastNotification>
        )}
      </AnimatePresence>
    </S.AuthPage>
  );
}

export default function RegisterPage() {
  return (
    <Suspense fallback={
      <main style={{ minHeight: "100vh", backgroundColor: "#0b0c10", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: "32px", height: "32px", border: "4px solid #ffffff", borderTopColor: "transparent", borderRadius: "50%", animation: "spin 1s linear infinite" }} />
      </main>
    }>
      <RegisterContent />
    </Suspense>
  );
}
