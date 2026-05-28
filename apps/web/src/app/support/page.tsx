"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBubble from "@/components/ChatBubble";
import SupportForm from "@/components/SupportForm";
import FaqItem from "@/components/FaqItem";
import { faqsData } from "@/lib/data";
import { useLanguage } from "@/hooks/useLanguage";
import * as S from "./support.styles";

type FaqCategory = "cancellations" | "refunds" | "payments";

export default function SupportPage() {
  const { t, i18n } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<FaqCategory>("cancellations");

  return (
    <>
      <Navbar />

      <S.SupportContainer>
        {/* Support Header */}
        <S.SupportHeader>
          <S.SupportTitle
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t("support.title")}
          </S.SupportTitle>
        </S.SupportHeader>

        {/* Blueprint Ruler Divider */}
        <S.AlponaBorderTop />

        {/* Help-Center Layout Grid */}
        <S.GridSection>
          <S.GridContainer>
            
            {/* Left Sidebar: FAQ Categories & Hotlines */}
            <S.Sidebar>
              
              {/* FAQ Categories Selection */}
              <S.Card>
                <S.SidebarTitle>FAQ Categories</S.SidebarTitle>
                <S.CategoryNav>
                  <S.CategoryBtn
                    onClick={() => setActiveCategory("cancellations")}
                    $active={activeCategory === "cancellations"}
                  >
                    <span className="material-symbols-outlined">cancel</span>
                    <span>Cancellations</span>
                  </S.CategoryBtn>
                  <S.CategoryBtn
                    onClick={() => setActiveCategory("refunds")}
                    $active={activeCategory === "refunds"}
                  >
                    <span className="material-symbols-outlined">assignment_return</span>
                    <span>Refunds</span>
                  </S.CategoryBtn>
                  <S.CategoryBtn
                    onClick={() => setActiveCategory("payments")}
                    $active={activeCategory === "payments"}
                  >
                    <span className="material-symbols-outlined">payments</span>
                    <span>Payments & Billing</span>
                  </S.CategoryBtn>
                </S.CategoryNav>
              </S.Card>

              {/* Direct Hotlines & Office Addresses */}
              <S.Card>
                <S.InfoItem>
                  <S.InfoLabel>{t("support.address_label")}</S.InfoLabel>
                  <S.InfoValue>{t("support.address_val")}</S.InfoValue>
                </S.InfoItem>

                <S.Separator />

                <S.InfoItem>
                  <S.InfoLabel>{t("support.phone_label")}</S.InfoLabel>
                  <S.InfoValue>{t("support.phone_val")}</S.InfoValue>
                </S.InfoItem>
                <S.InfoItem>
                  <S.InfoLabel>{t("support.email_label")}</S.InfoLabel>
                  <S.InfoValue>hello@cholobuddy.com</S.InfoValue>
                </S.InfoItem>
              </S.Card>

              {/* Grayscale Map Snippet */}
              <S.MapWrapper>
                <S.MapBadge>{t("support.map_badge")}</S.MapBadge>
                <S.MapContainer>
                  <iframe
                    title="CholoBuddy HQ location map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.285816999742!2d90.41724031536254!3d23.737198994532296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85c3b123457%3A0x6b2e3e548dbcd81f!2sMotijheel%2C%20Dhaka%201000!5e0!3m2!1sen!2sbd!4v1694294022849!5m2!1sen!2sbd"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </S.MapContainer>
              </S.MapWrapper>

            </S.Sidebar>

            {/* Main Content Column */}
            <S.MainContent>
              
              {/* FAQ Active List Panel */}
              <S.Card style={{ padding: "32px" }}>
                <S.FaqTitle>Frequently Asked Questions</S.FaqTitle>
                <S.FaqList>
                  {faqsData[activeCategory].items.map((faq, idx) => (
                    <FaqItem
                      key={idx}
                      question={
                        i18n.language === "en"
                          ? faq.question
                          : activeCategory === "cancellations" && idx === 0
                          ? "আমি কি সুন্দরবন বা সাজেক ট্যুর বাতিল করতে পারি?"
                          : activeCategory === "cancellations" && idx === 1
                          ? "হোটেল বুকিং কীভাবে বাতিল করব?"
                          : activeCategory === "refunds" && idx === 0
                          ? "রিফান্ড প্রসেস হতে কত দিন সময় লাগে?"
                          : activeCategory === "refunds" && idx === 1
                          ? "কোনো বাতিলকরণ ফি আছে কি?"
                          : activeCategory === "payments" && idx === 0
                          ? "কোন কোন পেমেন্ট মেথড গ্রহণ করা হয়?"
                          : "কিস্তি (ইএমআই) সুবিধা আছে কি?"
                      }
                      answer={
                        i18n.language === "en"
                          ? faq.answer
                          : activeCategory === "cancellations" && idx === 0
                          ? "যাত্রার ৭ দিন আগে পর্যন্ত ট্যুর বাতিল করলে সম্পূর্ণ রিফান্ড পাওয়া যাবে। ৭ দিনের মধ্যে বাতিল করলে পলিসি প্রযোজ্য হবে।"
                          : activeCategory === "cancellations" && idx === 1
                          ? "আপনার ট্রাভেলার ড্যাশবোর্ডে যান, 'মাই বুকিংস' থেকে নির্দিষ্ট বুকিংটি সিলেক্ট করুন এবং 'ক্যান্সেল বুকিং' এ ক্লিক করুন।"
                          : activeCategory === "refunds" && idx === 0
                          ? "রিফান্ড আপনার আদি পেমেন্ট মেথডে (বিকাশ/নগদ/কার্ড) ৩ থেকে ৫ কার্যদিবসের মধ্যে প্রসেস করা হবে।"
                          : activeCategory === "refunds" && idx === 1
                          ? "যাত্রার ৭ দিনের মধ্যে বাতিল করলে ৫০% ফি প্রযোজ্য হবে। ৪৮ ঘণ্টার মধ্যে বাতিল করলে কোনো রিফান্ড পাওয়া যাবে না।"
                          : activeCategory === "payments" && idx === 0
                          ? "আমরা বিকাশ, নগদ, ভিসা, মাস্টারকার্ড এবং আমেরিকান এক্সপ্রেস গ্রহণ করি।"
                          : "৳২০,০০০-এর বেশি ট্যুরের জন্য নির্বাচিত ব্যাংকের সাথে ৬ মাস পর্যন্ত সুদমুক্ত ইএমআই সুবিধা পাওয়া যাবে।"
                      }
                      idx={idx}
                    />
                  ))}
                </S.FaqList>
              </S.Card>

              {/* Contact Message Form Component */}
              <SupportForm />

            </S.MainContent>

          </S.GridContainer>
        </S.GridSection>
      </S.SupportContainer>

      <Footer />
      <ChatBubble />
    </>
  );
}
