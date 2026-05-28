"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBubble from "@/components/ChatBubble";
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
  SuccessCard
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
  const { isEn } = useLanguage();
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
            <HeroSub>{isEn ? "Reach Out" : "যোগাযোগ করুন"}</HeroSub>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <HeroTitle>{isEn ? "Let's Begin." : "শুরু করা যাক।"}</HeroTitle>
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
                <h2>{isEn ? "Get in Touch" : "যোগাযোগ করুন"}</h2>
                <p>
                  {isEn
                    ? "Whether you're dreaming of a private Sundarbans safari, a tea estate retreat in Sylhet, or a bespoke coastal escape in Cox's Bazar — our concierge team is here to design it for you."
                    : "আপনি সুন্দরবনে একটি ব্যক্তিগত সাফারি, সিলেটে একটি চা-বাগান রিট্রিট বা কক্সবাজারে একটি উপকূলীয় পালানোর স্বপ্ন দেখছেন — আমাদের কনসিয়ার্জ দল এটি আপনার জন্য ডিজাইন করতে এখানে আছে।"}
                </p>
              </InfoHeader>

              {CONTACT_INFO.map((info) => (
                <InfoCard key={info.icon} variants={itemVariants}>
                  <InfoIconWrapper>
                    <span className="material-symbols-outlined">{info.icon}</span>
                  </InfoIconWrapper>
                  <div>
                    <InfoLabel>{isEn ? info.label : info.labelBn}</InfoLabel>
                    <InfoValue>{isEn ? info.value : info.valueBn}</InfoValue>
                  </div>
                </InfoCard>
              ))}

              <FollowJourney variants={itemVariants}>
                <p>{isEn ? "Follow Our Journey" : "আমাদের যাত্রা অনুসরণ করুন"}</p>
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
                  <h3>{isEn ? "Message Sent!" : "বার্তা পাঠানো হয়েছে!"}</h3>
                  <p>
                    {isEn
                      ? "Our concierge will be in touch within 24 hours."
                      : "আমাদের কনসিয়ার্জ ২৪ ঘণ্টার মধ্যে যোগাযোগ করবে।"}
                  </p>
                </SuccessCard>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: "24px" }}>
                    <FormLabel>{isEn ? "Full Name" : "পুরো নাম"}</FormLabel>
                    <FormInput
                      type="text"
                      required
                      placeholder={isEn ? "Amira Khan" : "আমিরা খান"}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div style={{ marginBottom: "24px" }}>
                    <FormLabel>{isEn ? "Email Address" : "ইমেইল ঠিকানা"}</FormLabel>
                    <FormInput
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div style={{ marginBottom: "24px" }}>
                    <FormLabel>{isEn ? "Inquiry Type" : "অনুসন্ধানের ধরন"}</FormLabel>
                    <InquiryGroup>
                      {INQUIRY_TYPES.map((type) => (
                        <InquiryBtn
                          key={type.value}
                          type="button"
                          $active={inquiryType === type.value}
                          onClick={() => setInquiryType(type.value)}
                        >
                          {isEn ? type.label : type.labelBn}
                        </InquiryBtn>
                      ))}
                    </InquiryGroup>
                  </div>

                  <div style={{ marginBottom: "32px" }}>
                    <FormLabel>{isEn ? "Your Message" : "আপনার বার্তা"}</FormLabel>
                    <FormTextarea
                      rows={4}
                      required
                      placeholder={
                        isEn
                          ? "Tell us about your dream Bangladesh journey..."
                          : "আপনার স্বপ্নের বাংলাদেশ যাত্রা সম্পর্কে বলুন..."
                      }
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>

                  <SubmitButton type="submit" disabled={status === "loading"}>
                    {status === "loading"
                      ? "..."
                      : isEn
                      ? "Send Message"
                      : "বার্তা পাঠান"}
                  </SubmitButton>
                </form>
              )}
            </FormColumn>
          </ContactGrid>
        </ContactMain>
      </main>

      <Footer />
      <ChatBubble />
    </ContactContainer>
  );
}
