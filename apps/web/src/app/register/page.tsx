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
  FeatureGrid,
  FeatureItem,
  FeatureIconBox,
  FeatureLabel,
  QuoteBlock,
  QuoteItalic,
  QuoteAuthor,
  AuthRight,
  FloatingHomeArea,
  HomeLink,
  FloatOrb,
  AuthGlassCard,
  GlassShimmer,
  FormHeader,
  FormTitle,
  FormSubtitle,
  ProgressBarWrapper,
  ProgressBarFill,
  ProgressNote,
  FormBody,
  FormLabel,
  InputGroup,
  InputIcon,
  FormInput,
  EyeButton,
  SubmitBtn,
  FormFooterText,
  FormLink,
  SuspenseFallback,
  SpinnerDiv
} from "./register.styles";

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
  const toast = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error(t("register.toast_mismatch"));
      return;
    }
    setIsSubmitting(true);
    const res = await signUp({ email, password, name: fullname });
    setIsSubmitting(false);
    if (res?.error) {
      toast.error(res.error.message || "Registration failed");
    } else {
      toast.success(t("register.toast_success"));
      setTimeout(() => router.push(callbackUrl || "/dashboard"), 1000);
    }
  };

  const handleOAuth = (provider: string) => toast.info(`${t("login.toast_oauth")} (${provider})`);
  const handleOTP   = () => toast.info(t("login.toast_otp"));

  const filled = [fullname, email, password, confirmPassword].filter(Boolean).length;
  const progress = (filled / 4) * 100;

  return (
    <AuthPage>
      {/* LEFT PANEL */}
      <AuthLeft>
        <AuthBgImage style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop')" }} />
        <AuthBgFade />
        <AuthGridTexture />
        <AuthOrb $position="p1" />
        <AuthOrb $position="p2" />

        <LeftPanelContent>
          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <BrandRow as={Link} href="/">
              <BrandIcon $variant="purple">
                <span className="material-symbols-outlined" style={{ color: "#fff", fontSize: "18px" }}>flight_takeoff</span>
              </BrandIcon>
              <BrandName>CholoBuddy</BrandName>
            </BrandRow>
          </motion.div>

          {/* Headline */}
          <HeadlineSection>
            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}>
              <AdTagline>Begin your journey</AdTagline>
              <HeroH1>
                Join thousands of<br />
                <GradientSpan>adventurous travelers</GradientSpan>
              </HeroH1>
              <HeroDesc>
                Create your account and unlock premium travel experiences across Bangladesh's most breathtaking destinations.
              </HeroDesc>
            </motion.div>

            {/* Feature grid */}
            <FeatureGrid
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {features.map((f, i) => (
                <FeatureItem
                  key={f.label}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, delay: 0.5 + i * 0.07 }}
                >
                  <FeatureIconBox>
                    <span className="material-symbols-outlined" style={{ color: "#e9c400", fontSize: "16px" }}>{f.icon}</span>
                  </FeatureIconBox>
                  <FeatureLabel>{f.label}</FeatureLabel>
                </FeatureItem>
              ))}
            </FeatureGrid>
          </HeadlineSection>

          {/* Quote */}
          <QuoteBlock
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.75 }}
          >
            <QuoteItalic>
              "The world is a book, and those who do not travel read only one page."
            </QuoteItalic>
            <QuoteAuthor>— Saint Augustine</QuoteAuthor>
          </QuoteBlock>
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
            <GlassShimmer $variant="purple" />

            {/* Header + progress */}
            <FormHeader>
              <FormTitle>{t("register.welcome")}</FormTitle>
              <FormSubtitle>{t("register.desc")}</FormSubtitle>

              {/* Progress bar */}
              <ProgressBarWrapper>
                <ProgressBarFill animate={{ width: `${progress}%` }} transition={{ duration: 0.35 }} />
              </ProgressBarWrapper>
              <ProgressNote>{filled}/4 fields completed</ProgressNote>
            </FormHeader>

            {/* Form */}
            <FormBody onSubmit={handleSubmit}>
              {/* Full Name */}
              <div>
                <FormLabel>{t("register.fullname_label")}</FormLabel>
                <InputGroup>
                  <InputIcon className="material-symbols-outlined">person</InputIcon>
                  <FormInput
                    required
                    type="text"
                    value={fullname}
                    onChange={e => setFullname(e.target.value)}
                    placeholder={t("register.fullname_placeholder")}
                    $focusVariant="purple"
                  />
                </InputGroup>
              </div>

              {/* Email */}
              <div>
                <FormLabel>{t("register.email_label")}</FormLabel>
                <InputGroup>
                  <InputIcon className="material-symbols-outlined">mail</InputIcon>
                  <FormInput
                    required
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder={t("register.email_placeholder")}
                    $focusVariant="purple"
                  />
                </InputGroup>
              </div>

              {/* Password */}
              <div>
                <FormLabel>{t("register.password_label")}</FormLabel>
                <InputGroup>
                  <InputIcon className="material-symbols-outlined">lock</InputIcon>
                  <FormInput
                    required
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder={t("register.password_placeholder")}
                    $hasRightIcon={true}
                    $focusVariant="purple"
                  />
                  <EyeButton type="button" onClick={() => setShowPassword(v => !v)}>
                    <span className="material-symbols-outlined" style={{ fontSize: "17px" }}>
                      {showPassword ? "visibility_off" : "visibility"}
                    </span>
                  </EyeButton>
                </InputGroup>
              </div>

              {/* Confirm Password */}
              <div>
                <FormLabel>{t("register.confirm_password_label")}</FormLabel>
                <InputGroup>
                  <InputIcon className="material-symbols-outlined">lock_clock</InputIcon>
                  <FormInput
                    required
                    type={showConfirm ? "text" : "password"}
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    placeholder={t("register.confirm_password_placeholder")}
                    $hasRightIcon={true}
                    $focusVariant="purple"
                  />
                  <EyeButton type="button" onClick={() => setShowConfirm(v => !v)}>
                    <span className="material-symbols-outlined" style={{ fontSize: "17px" }}>
                      {showConfirm ? "visibility_off" : "visibility"}
                    </span>
                  </EyeButton>
                </InputGroup>
              </div>

              {/* Submit */}
              <SubmitBtn type="submit" disabled={isSubmitting}>
                {isSubmitting ? t("register.submit_loading") : t("register.submit_idle")}
              </SubmitBtn>

              <FormFooterText>
                {t("register.have_account")}{" "}
                <FormLink as={Link} href={callbackUrl ? `/login?callbackUrl=${encodeURIComponent(callbackUrl)}` : "/login"}>
                  {t("register.sign_in")}
                </FormLink>
              </FormFooterText>
            </FormBody>
          </AuthGlassCard>
        </motion.div>
      </AuthRight>
    </AuthPage>
  );
}

export default function RegisterPage() {
  return (
    <Suspense fallback={
      <SuspenseFallback>
        <SpinnerDiv />
      </SuspenseFallback>
    }>
      <RegisterContent />
    </Suspense>
  );
}
