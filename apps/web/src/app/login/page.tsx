"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/context/Toast";
import {
  AuthPage,
  AuthLeft,
  AuthBgImage,
  AuthBgFade,
  AuthGridTexture,
  AuthOrb,
  LeftPanelContent,
  BrandRow,
  BrandIcon,
  BrandName,
  HeadlineSection,
  AdTagline,
  HeroH1,
  GradientSpan,
  HeroDesc,
  ChipList,
  DestinationChip,
  ChipDot,
  StatsGrid,
  StatBlock,
  AuthRight,
  FloatingHomeArea,
  HomeLink,
  FloatOrb,
  AuthGlassCard,
  GlassShimmer,
  FormHeader,
  FormTitle,
  FormSubtitle,
  FormBody,
  FormLabel,
  InputGroup,
  InputIcon,
  FormInput,
  EyeButton,
  RememberRow,
  RememberCheck,
  RememberLabel,
  SubmitBtn,
  FormFooterText,
  FormLink,
  SuspenseFallback,
  SpinnerDiv
} from "./login.styles";

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
    <AuthPage>
      {/* LEFT PANEL */}
      <AuthLeft>
        <AuthBgImage style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=1600&auto=format&fit=crop')" }} />
        <AuthBgFade />
        <AuthGridTexture />
        <AuthOrb $position="1" />
        <AuthOrb $position="2" />

        {/* Content */}
        <LeftPanelContent>
          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <BrandRow as={Link} href="/">
              <BrandIcon $variant="blue">
                <span className="material-symbols-outlined" style={{ color: "#fff", fontSize: "18px" }}>flight_takeoff</span>
              </BrandIcon>
              <BrandName>CholoBuddy</BrandName>
            </BrandRow>
          </motion.div>

          {/* Headline */}
          <HeadlineSection>
            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}>
              <AdTagline>Your next adventure awaits</AdTagline>
              <HeroH1>
                Explore the beauty<br />of{" "}
                <GradientSpan>Bangladesh</GradientSpan>
              </HeroH1>
              <HeroDesc>
                Premium curated travel experiences — from the mangroves of the Sundarbans to the peaks of Bandarban.
              </HeroDesc>
            </motion.div>

            {/* Destination chips */}
            <ChipList
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.45 }}
            >
              {destinations.map((d, i) => (
                <DestinationChip
                  key={d}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, delay: 0.55 + i * 0.07 }}
                >
                  <ChipDot />
                  {d}
                </DestinationChip>
              ))}
            </ChipList>
          </HeadlineSection>

          {/* Bottom stats */}
          <StatsGrid
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.65 }}
          >
            {[{ value: "50K+", label: "Travelers" }, { value: "120+", label: "Destinations" }, { value: "4.9★", label: "Rating" }].map(s => (
              <StatBlock key={s.label}>
                <p>{s.value}</p>
                <p>{s.label}</p>
              </StatBlock>
            ))}
          </StatsGrid>
        </LeftPanelContent>
      </AuthLeft>

      {/* RIGHT PANEL */}
      <AuthRight>
        {/* Floating Home Button */}
        <FloatingHomeArea>
          <HomeLink as={Link} href="/">
            <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>home</span>
            Home
          </HomeLink>
        </FloatingHomeArea>
        <FloatOrb />

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: "relative", width: "100%", maxWidth: "420px" }}
        >
          <AuthGlassCard>
            <GlassShimmer $variant="blue" />

            {/* Header */}
            <FormHeader>
              <FormTitle>{t("login.welcome")}</FormTitle>
              <FormSubtitle>{t("login.desc")}</FormSubtitle>
            </FormHeader>

            {/* Form */}
            <FormBody onSubmit={handleSubmit}>
              {/* Email */}
              <div>
                <FormLabel>{t("login.email_label")}</FormLabel>
                <InputGroup>
                  <InputIcon className="material-symbols-outlined">mail</InputIcon>
                  <FormInput
                    required
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder={t("login.email_placeholder")}
                  />
                </InputGroup>
              </div>

              {/* Password */}
              <div>
                <FormLabel>{t("login.password_label")}</FormLabel>
                <InputGroup>
                  <InputIcon className="material-symbols-outlined">lock</InputIcon>
                  <FormInput
                    required
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder={t("login.password_placeholder")}
                    $hasRightIcon={true}
                  />
                  <EyeButton type="button" onClick={() => setShowPassword(v => !v)}>
                    <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
                      {showPassword ? "visibility_off" : "visibility"}
                    </span>
                  </EyeButton>
                </InputGroup>
              </div>

              {/* Remember */}
              <RememberRow>
                <RememberCheck
                  id="remember"
                  type="checkbox"
                />
                <RememberLabel htmlFor="remember">
                  {t("login.remember")}
                </RememberLabel>
              </RememberRow>

              {/* Submit */}
              <SubmitBtn type="submit" disabled={isSubmitting}>
                {isSubmitting ? t("login.submit_loading") : t("login.submit_idle")}
              </SubmitBtn>

              <FormFooterText>
                {t("login.new_here")}{" "}
                <FormLink as={Link} href={callbackUrl ? `/register?callbackUrl=${encodeURIComponent(callbackUrl)}` : "/register"}>
                  {t("login.create_account")}
                </FormLink>
              </FormFooterText>
            </FormBody>
          </AuthGlassCard>
        </motion.div>
      </AuthRight>
    </AuthPage>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <SuspenseFallback>
        <SpinnerDiv />
      </SuspenseFallback>
    }>
      <LoginContent />
    </Suspense>
  );
}
