"use client";

import React from "react";
import { useNewsletter } from "@/hooks/useNewsletter";
import { useLanguage } from "@/hooks/useLanguage";
import {
  SectionContainer,
  InnerContainer,
  SectionTitle,
  SectionDesc,
  SuccessWrapper,
  SubscribeForm,
  EmailInput,
  SubscribeButton
} from "./NewsletterSection.styles";

export default function NewsletterSection() {
  const { email, setEmail, status, handleSubscribe } = useNewsletter();
  const { currentLanguage } = useLanguage();
  const isEn = currentLanguage === "en";

  return (
    <SectionContainer>
      <InnerContainer
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <SectionTitle>
          {isEn
            ? "Receive Curated Bangladesh Journeys"
            : "বাংলাদেশের বিশেষ ভ্রমণ পান"}
        </SectionTitle>
        <SectionDesc>
          {isEn
            ? "Hand-picked itineraries, seasonal highlights, and exclusive traveler stories — delivered to your inbox."
            : "বিশেষভাবে নির্বাচিত ভ্রমণসূচি, মৌসুমী হাইলাইট এবং একচেটিয়া ভ্রমণ গল্প — আপনার ইনবক্সে।"}
        </SectionDesc>

        {status === "success" ? (
          <SuccessWrapper>
            <span className="material-symbols-outlined">check_circle</span>
            <span>
              {isEn
                ? "Welcome aboard! We'll be in touch soon."
                : "স্বাগতম! শীঘ্রই যোগাযোগ করব।"}
            </span>
          </SuccessWrapper>
        ) : (
          <SubscribeForm onSubmit={handleSubscribe}>
            <EmailInput
              placeholder={isEn ? "your@email.com" : "আপনার ইমেইল"}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <SubscribeButton type="submit" disabled={status === "loading"}>
              {status === "loading"
                ? "..."
                : isEn
                ? "Subscribe"
                : "সাবস্ক্রাইব"}
            </SubscribeButton>
          </SubscribeForm>
        )}
      </InnerContainer>
    </SectionContainer>
  );
}
