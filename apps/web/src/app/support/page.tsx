"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SupportForm from "@/components/SupportForm";
import FaqItem from "@/components/FaqItem";
import { faqsData } from "@/lib/data";
import { useLanguage } from "@/hooks/useLanguage";
import {
  SupportContainer,
  SupportHeader,
  SupportTitle,
  AlponaBorderTop,
  GridSection,
  GridContainer,
  Sidebar,
  Card,
  SidebarTitle,
  CategoryNav,
  CategoryBtn,
  InfoItem,
  InfoLabel,
  InfoValue,
  Separator,
  MapWrapper,
  MapBadge,
  MapContainer,
  IframeEl,
  MainContent,
  CardWithPadding,
  FaqTitle,
  FaqList
} from "./support.styles";

type FaqCategory = "cancellations" | "refunds" | "payments";

export default function SupportPage() {
  const { t, i18n } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<FaqCategory>("cancellations");

  return (
    <>
      <Navbar />

      <SupportContainer>
        {/* Support Header */}
        <SupportHeader>
          <SupportTitle
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t("support.title")}
          </SupportTitle>
        </SupportHeader>

        {/* Blueprint Ruler Divider */}
        <AlponaBorderTop />

        {/* Help-Center Layout Grid */}
        <GridSection>
          <GridContainer>
            
            {/* Left Sidebar: FAQ Categories & Hotlines */}
            <Sidebar>
              
              {/* FAQ Categories Selection */}
              <Card>
                <SidebarTitle>{t("FAQ Categories")}</SidebarTitle>
                <CategoryNav>
                  <CategoryBtn
                    onClick={() => setActiveCategory("cancellations")}
                    $active={activeCategory === "cancellations"}
                  >
                    <span className="material-symbols-outlined">cancel</span>
                    <span>{t("Cancellations")}</span>
                  </CategoryBtn>
                  <CategoryBtn
                    onClick={() => setActiveCategory("refunds")}
                    $active={activeCategory === "refunds"}
                  >
                    <span className="material-symbols-outlined">assignment_return</span>
                    <span>{t("Refunds")}</span>
                  </CategoryBtn>
                  <CategoryBtn
                    onClick={() => setActiveCategory("payments")}
                    $active={activeCategory === "payments"}
                  >
                    <span className="material-symbols-outlined">payments</span>
                    <span>{t("Payments & Billing")}</span>
                  </CategoryBtn>
                </CategoryNav>
              </Card>

              {/* Direct Hotlines & Office Addresses */}
              <Card>
                <InfoItem>
                  <InfoLabel>{t("support.address_label")}</InfoLabel>
                  <InfoValue>{t("support.address_val")}</InfoValue>
                </InfoItem>

                <Separator />

                <InfoItem>
                  <InfoLabel>{t("support.phone_label")}</InfoLabel>
                  <InfoValue>{t("support.phone_val")}</InfoValue>
                </InfoItem>
                <InfoItem>
                  <InfoLabel>{t("support.email_label")}</InfoLabel>
                  <InfoValue>hello@cholobuddy.com</InfoValue>
                </InfoItem>
              </Card>

              {/* Grayscale Map Snippet */}
              <MapWrapper>
                <MapBadge>{t("support.map_badge")}</MapBadge>
                <MapContainer>
                  <IframeEl
                    title="CholoBuddy HQ location map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.285816999742!2d90.41724031536254!3d23.737198994532296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85c3b123457%3A0x6b2e3e548dbcd81f!2sMotijheel%2C%20Dhaka%201000!5e0!3m2!1sen!2sbd!4v1694294022849!5m2!1sen!2sbd"
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </MapContainer>
              </MapWrapper>

            </Sidebar>

            {/* Main Content Column */}
            <MainContent>
              
              {/* FAQ Active List Panel */}
              <CardWithPadding>
                <FaqTitle>{t("Frequently Asked Questions")}</FaqTitle>
                <FaqList>
                  {faqsData[activeCategory].items.map((faq, idx) => (
                    <FaqItem
                      key={idx}
                      question={t(faq.question)}
                      answer={t(faq.answer)}
                      idx={idx}
                    />
                  ))}
                </FaqList>
              </CardWithPadding>

              {/* Contact Message Form Component */}
              <SupportForm />

            </MainContent>

          </GridContainer>
        </GridSection>
      </SupportContainer>

      <Footer />
    </>
  );
}
