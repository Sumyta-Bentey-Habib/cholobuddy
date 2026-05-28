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
} from "./styles";

export default function NewsletterSection() {
  const { email, setEmail, status, handleSubscribe } = useNewsletter();
  const {
    t: t,
    currentLanguage
  } = useLanguage();

  return (
    <SectionContainer>
      <InnerContainer
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <SectionTitle>
          {t("Receive Curated Bangladesh Journeys")}
        </SectionTitle>
        <SectionDesc>
          {t(
            "Hand-picked itineraries, seasonal highlights, and exclusive traveler stories — delivered to your inbox."
          )}
        </SectionDesc>

        {status === "success" ? (
          <SuccessWrapper>
            <span className="material-symbols-outlined">check_circle</span>
            <span>
              {t("Welcome aboard! We'll be in touch soon.")}
            </span>
          </SuccessWrapper>
        ) : (
          <SubscribeForm onSubmit={handleSubscribe}>
            <EmailInput
              placeholder={t("your@email.com")}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <SubscribeButton type="submit" disabled={status === "loading"}>
              {status === "loading"
                ? "..."
                : t("Subscribe")}
            </SubscribeButton>
          </SubscribeForm>
        )}
      </InnerContainer>
    </SectionContainer>
  );
}
