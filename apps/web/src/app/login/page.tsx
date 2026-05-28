"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { useAuth } from "@/hooks/useAuth";
import * as S from "./login.styles";

interface ToastState {
  show: boolean;
  message: string;
  type: "success" | "info" | "error";
}

const destinations = ["Cox's Bazar", "Sundarbans", "Bandarban", "Sylhet", "Saint Martin"];

export default function LoginPage() {
  const { t } = useLanguage();
  const { signIn } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<ToastState>({ show: false, message: "", type: "info" });

  const showToast = (message: string, type: "success" | "info" | "error" = "info") => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast(p => ({ ...p, show: false })), 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const res = await signIn({ email, password });
    setIsSubmitting(false);
    if (res?.error) {
      showToast(res.error.message || "Login failed", "error");
    } else {
      const userRole = (res.data?.user as any)?.role || "user";
      if (userRole === "admin") {
        showToast(t("login.toast_admin"), "success");
        setTimeout(() => router.push("/admin"), 1000);
      } else {
        showToast(t("login.toast_traveler"), "success");
        setTimeout(() => router.push("/dashboard"), 1000);
      }
    }
  };

  const handleOAuth = (provider: string) => showToast(`${t("login.toast_oauth")} (${provider})`, "info");
  const handleOTP   = () => showToast(t("login.toast_otp"), "info");

  return (
    <S.AuthPage>
      {/* LEFT PANEL */}
      <S.AuthLeft>
        <S.AuthBgImage style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=1600&auto=format&fit=crop')" }} />
        <S.AuthBgFade />
        <S.AuthGridTexture />
        <S.AuthOrb $position="1" />
        <S.AuthOrb $position="2" />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", height: "100%", padding: "48px 56px" }}>
          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
              <S.BrandIcon $variant="blue">
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
                Your next adventure awaits
              </p>
              <h1 style={{ fontSize: "40px", fontWeight: 800, color: "#fff", lineHeight: 1.15, marginBottom: "16px" }}>
                Explore the beauty<br />of{" "}
                <span style={{ background: "linear-gradient(135deg,#c9a900,#e9c400,#526069)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Bangladesh
                </span>
              </h1>
              <p style={{ color: "#94a3b8", fontSize: "15px", lineHeight: 1.7, maxWidth: "420px", marginTop: "12px" }}>
                Premium curated travel experiences — from the mangroves of the Sundarbans to the peaks of Bandarban.
              </p>
            </motion.div>

            {/* Destination chips */}
            <S.ChipList
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.45 }}
            >
              {destinations.map((d, i) => (
                <S.DestinationChip
                  key={d}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, delay: 0.55 + i * 0.07 }}
                >
                  <S.ChipDot />
                  {d}
                </S.DestinationChip>
              ))}
            </S.ChipList>
          </div>

          {/* Bottom stats */}
          <S.StatsGrid
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.65 }}
          >
            {[{ value: "50K+", label: "Travelers" }, { value: "120+", label: "Destinations" }, { value: "4.9★", label: "Rating" }].map(s => (
              <S.StatBlock key={s.label}>
                <p>{s.value}</p>
                <p>{s.label}</p>
              </S.StatBlock>
            ))}
          </S.StatsGrid>
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
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "360px", height: "360px", borderRadius: "9999px", background: "rgba(59,130,246,.06)", filter: "blur(80px)", pointerEvents: "none" }} />

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: "relative", width: "100%", maxWidth: "420px" }}
        >
          <S.AuthGlassCard>
            <S.GlassShimmer $variant="blue" />

            {/* Header */}
            <div style={{ position: "relative", marginBottom: "28px" }}>
              <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#fff", marginBottom: "6px" }}>{t("login.welcome")}</h2>
              <p style={{ color: "#64748b", fontSize: "14px" }}>{t("login.desc")}</p>
            </div>

            {/* Social auth */}
            <S.SocialAuthRow>
              <S.SocialButton onClick={() => handleOAuth("Google")}>
                <img alt="Google" src="https://www.gstatic.com/images/branding/product/1x/gsa_android_64dp.png" style={{ width: "16px", height: "16px" }} />
                <span style={{ fontFamily: "monospace", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  {t("login.google")}
                </span>
              </S.SocialButton>
              <S.SocialButton onClick={handleOTP}>
                <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>sms</span>
                <span style={{ fontFamily: "monospace", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  {t("login.otp")}
                </span>
              </S.SocialButton>
            </S.SocialAuthRow>

            {/* Divider */}
            <S.Divider>
              <S.DividerLine />
              <S.DividerText>{t("login.divider")}</S.DividerText>
              <S.DividerLine />
            </S.Divider>

            {/* Form */}
            <form onSubmit={handleSubmit} style={{ position: "relative", display: "flex", flexDirection: "column", gap: "16px" }}>
              {/* Email */}
              <div>
                <S.FormLabel>{t("login.email_label")}</S.FormLabel>
                <S.InputGroup>
                  <S.InputIcon className="material-symbols-outlined">mail</S.InputIcon>
                  <S.FormInput
                    required
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder={t("login.email_placeholder")}
                  />
                </S.InputGroup>
              </div>

              {/* Password */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                  <S.FormLabel style={{ marginBottom: 0 }}>{t("login.password_label")}</S.FormLabel>
                  <a href="#" style={{ fontFamily: "monospace", fontSize: "10px", fontWeight: 700, color: "#c9a900", textTransform: "uppercase", letterSpacing: "0.1em", textDecoration: "none" }}>
                    {t("login.forgot")}
                  </a>
                </div>
                <S.InputGroup>
                  <S.InputIcon className="material-symbols-outlined">lock</S.InputIcon>
                  <S.FormInput
                    required
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder={t("login.password_placeholder")}
                    $hasRightIcon={true}
                  />
                  <S.EyeButton type="button" onClick={() => setShowPassword(v => !v)}>
                    <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
                      {showPassword ? "visibility_off" : "visibility"}
                    </span>
                  </S.EyeButton>
                </S.InputGroup>
              </div>

              {/* Remember */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <input
                  id="remember"
                  type="checkbox"
                  style={{ width: "16px", height: "16px", borderRadius: "4px", border: "1px solid rgba(255,255,255,.2)", background: "rgba(255,255,255,.05)", cursor: "pointer", accentColor: "#c9a900" }}
                />
                <label htmlFor="remember" style={{ fontFamily: "monospace", fontSize: "10px", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.12em", cursor: "pointer" }}>
                  {t("login.remember")}
                </label>
              </div>

              {/* Submit */}
              <S.SubmitBtn type="submit" disabled={isSubmitting}>
                {isSubmitting ? t("login.submit_loading") : t("login.submit_idle")}
              </S.SubmitBtn>

              <p style={{ textAlign: "center", fontFamily: "monospace", fontSize: "11px", color: "#475569", textTransform: "uppercase", letterSpacing: "0.12em", paddingTop: "4px" }}>
                {t("login.new_here")}{" "}
                <Link href="/register" style={{ color: "#c9a900", fontWeight: 700, textDecoration: "none" }}>
                  {t("login.create_account")}
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
