"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/context/Toast";
import * as S from "./login.styles";

const destinations = ["Cox's Bazar", "Sundarbans", "Bandarban", "Sylhet", "Saint Martin"];

function LoginContent() {
  const { t } = useLanguage();
  const { signIn } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const res = await signIn({ email, password });
    setIsSubmitting(false);
    if (res?.error) {
      toast.error(res.error.message || "Login failed");
    } else {
      const userRole = (res.data?.user as any)?.role || "user";
      if (userRole === "admin") {
        toast.success(t("login.toast_admin"));
        setTimeout(() => router.push(callbackUrl || "/admin"), 1000);
      } else {
        toast.success(t("login.toast_traveler"));
        setTimeout(() => router.push(callbackUrl || "/dashboard"), 1000);
      }
    }
  };

  const handleOAuth = (provider: string) => toast.info(`${t("login.toast_oauth")} (${provider})`);
  const handleOTP   = () => toast.info(t("login.toast_otp"));

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
                <S.FormLabel>{t("login.password_label")}</S.FormLabel>
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
                <Link href={callbackUrl ? `/register?callbackUrl=${encodeURIComponent(callbackUrl)}` : "/register"} style={{ color: "#c9a900", fontWeight: 700, textDecoration: "none" }}>
                  {t("login.create_account")}
                </Link>
              </p>
            </form>
          </S.AuthGlassCard>
        </motion.div>
      </S.AuthRight>
    </S.AuthPage>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <main style={{ minHeight: "100vh", backgroundColor: "#0b0c10", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: "32px", height: "32px", border: "4px solid #ffffff", borderTopColor: "transparent", borderRadius: "50%", animation: "spin 1s linear infinite" }} />
      </main>
    }>
      <LoginContent />
    </Suspense>
  );
}
