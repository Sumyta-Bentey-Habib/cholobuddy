"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/hooks/useLanguage";
import { useAnimationVariants } from "@/hooks/useAnimationVariants";
import {
  ContactContainer,
  ContactHero,
  ContactHeroBg,
  HeroFade,
  HeroContent,
  HeroSub,
  HeroTitle,
  ContactMain,
  ContactGrid,
  InfoColumn,
  InfoHeader,
  InfoCard,
  InfoIconWrapper,
  InfoLabel,
  InfoValue,
  FollowJourney,
  SocialHandle,
  FormColumn,
  FormLabel,
  FormInput,
  FormTextarea,
  InquiryGroup,
  InquiryBtn,
  SubmitButton,
  SuccessCard,
  FormFieldWrapper
} from "./contact.styles";

const CONTACT_INFO = [
  {
    icon: "location_on",
    label: "Head Office",
    labelBn: "প্রধান কার্যালয়",
    value: "House 12, Road 27, Gulshan-1, Dhaka 1212",
    valueBn: "হাউস ১২, রোড ২৭, গুলশান-১, ঢাকা ১২১২",
  },
  {
    icon: "phone",
    label: "Phone",
    labelBn: "ফোন",
    value: "+880 1700-000000",
    valueBn: "+৮৮০ ১৭০০-০০০০০০",
  },
  {
    icon: "mail",
    label: "Email",
    labelBn: "ইমেইল",
    value: "hello@cholobuddy.com.bd",
    valueBn: "hello@cholobuddy.com.bd",
  },
];

const INQUIRY_TYPES = [
  { value: "bespoke", label: "Bespoke Itinerary", labelBn: "বিশেষ ভ্রমণসূচি" },
  { value: "group", label: "Group Travel", labelBn: "দলীয় ভ্রমণ" },
  { value: "corporate", label: "Corporate Retreat", labelBn: "কর্পোরেট রিট্রিট" },
  { value: "support", label: "Booking Support", labelBn: "বুকিং সহায়তা" },
];

export default function ContactPage() {
  const {
    t: t
  } = useLanguage();
  const { containerVariants, itemVariants } = useAnimationVariants();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [inquiryType, setInquiryType] = useState("bespoke");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <ContactContainer>
      <Navbar />
      <main>
        {/* Hero Section */}
        <ContactHero>
          <ContactHeroBg />
          <HeroFade />
          <HeroContent>
            <HeroSub>{t("Reach Out")}</HeroSub>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <HeroTitle>{t("Let's Begin.")}</HeroTitle>
            </motion.h1>
          </HeroContent>
        </ContactHero>

        {/* Main Section */}
        <ContactMain>
          <ContactGrid>
            {/* Left Info Column */}
            <InfoColumn
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <InfoHeader>
                <h2>{t("Get in Touch")}</h2>
                <p>
                  {t(
                    "Whether you're dreaming of a private Sundarbans safari, a tea estate retreat in Sylhet, or a bespoke coastal escape in Cox's Bazar — our concierge team is here to design it for you."
                  )}
                </p>
              </InfoHeader>

              {CONTACT_INFO.map((info) => (
                <InfoCard key={info.icon} variants={itemVariants}>
                  <InfoIconWrapper>
                    <span className="material-symbols-outlined">{info.icon}</span>
                  </InfoIconWrapper>
                  <div>
                    <InfoLabel>{t(info.label)}</InfoLabel>
                    <InfoValue>{t(info.value)}</InfoValue>
                  </div>
                </InfoCard>
              ))}

              <FollowJourney variants={itemVariants}>
                <p>{t("Follow Our Journey")}</p>
                <div>
                  <SocialHandle>@cholobuddy</SocialHandle>
                  <SocialHandle>@cholobuddybd</SocialHandle>
                </div>
              </FollowJourney>
            </InfoColumn>

            {/* Right Form Column */}
            <FormColumn
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {status === "success" ? (
                <SuccessCard>
                  <span className="material-symbols-outlined">check_circle</span>
                  <h3>{t("Message Sent!")}</h3>
                  <p>
                    {t("Our concierge will be in touch within 24 hours.")}
                  </p>
                </SuccessCard>
              ) : (
                <form onSubmit={handleSubmit}>
                  <FormFieldWrapper>
                    <FormLabel>{t("Full Name")}</FormLabel>
                    <FormInput
                      type="text"
                      required
                      placeholder={t("Amira Khan")}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </FormFieldWrapper>

                  <FormFieldWrapper>
                    <FormLabel>{t("Email Address")}</FormLabel>
                    <FormInput
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormFieldWrapper>

                  <FormFieldWrapper>
                    <FormLabel>{t("Inquiry Type")}</FormLabel>
                    <InquiryGroup>
                      {INQUIRY_TYPES.map((type) => (
                        <InquiryBtn
                          key={type.value}
                          type="button"
                          $active={inquiryType === type.value}
                          onClick={() => setInquiryType(type.value)}
                        >
                          {t(type.label)}
                        </InquiryBtn>
                      ))}
                    </InquiryGroup>
                  </FormFieldWrapper>

                  <FormFieldWrapper $mb="32px">
                    <FormLabel>{t("Your Message")}</FormLabel>
                    <FormTextarea
                      rows={4}
                      required
                      placeholder={
                        t("Tell us about your dream Bangladesh journey...")
                      }
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </FormFieldWrapper>

                  <SubmitButton type="submit" disabled={status === "loading"}>
                    {status === "loading"
                      ? "..."
                      : t("Send Message")}
                  </SubmitButton>
                </form>
              )}
            </FormColumn>
          </ContactGrid>
        </ContactMain>
      </main>
      <Footer />
    </ContactContainer>
  );
}
