"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBubble from "@/components/ChatBubble";
import StatsSection from "@/components/StatsSection";
import TeamSection from "@/components/TeamSection";
import { useLanguage } from "@/hooks/useLanguage";
import { useAnimationVariants } from "@/hooks/useAnimationVariants";
import {
  AboutContainer,
  HeroBanner,
  HeroBannerBg,
  FadeToWhite,
  HeroBannerContent,
  CategoryTag,
  BannerTitle,
  StorySection,
  StoryTitle,
  StoryBody,
  MotifSeparator,
  TrustSection,
  TrustGrid,
  TrustCard,
  TrustCardTitle,
  TrustCardBody,
  AlponaDivider,
  AlponaCenterMotif,
  PhilosophySection,
  PhilosophyGrid,
  PhilosophyLeftPanel,
  PhilosophyTitle,
  PhilosophyDesc,
  DotIndicatorsRow,
  DotIndicator,
  PhilosophyRightPanel,
  PhilosophyItem,
  PhilosophyNum,
  PhilosophyItemTitle,
  PhilosophyItemDesc,
  BeginJourneySection,
  BeginJourneyCard,
  BeginJourneyTitle,
  BeginJourneyForm,
  BeginJourneyInput,
  BeginJourneyBtn
} from "./about.styles";

const PHILOSOPHY_PRINCIPLES = [
  {
    num: "01",
    title: "Slow Travel",
    titleBn: "ধীর ভ্রমণ",
    desc: "We design itineraries that allow you to breathe — long mornings in Sylhet tea estates, unhurried river drifts through the Sundarbans, and golden evenings on Cox's Bazar sands.",
    descBn:
      "আমরা ইটিনারারি ডিজাইন করি যা আপনাকে ভ্রমণ উপভোগ করতে সময় দেয় — সিলেটের চা-বাগানে দীর্ঘ সকাল, সুন্দরবনের নদীতে শান্ত ভ্রমণ।",
  },
  {
    num: "02",
    title: "Local Depth",
    titleBn: "স্থানীয় গভীরতা",
    desc: "Our expert local guides — born in the delta, the hills, and the coast — translate Bangladesh's living culture into unforgettable narrative for you.",
    descBn:
      "আমাদের বিশেষজ্ঞ স্থানীয় গাইডরা — বদ্বীপ, পাহাড় এবং উপকূলে জন্মানো — বাংলাদেশের জীবন্ত সংস্কৃতিকে আপনার জন্য অবিস্মরণীয় আখ্যানে রূপান্তর করেন।",
  },
];

const TRUST_CARDS = [
  {
    title: "Corporate Status",
    titleBn: "কর্পোরেট স্ট্যাটাস",
    body: "CholoBuddy is registered under the Registrar of Joint Stock Companies and Firms (RJSC) of Bangladesh. Trade License No. TRAD/DSCC/012495/2023, ensuring complete financial safety for every traveler.",
    bodyBn:
      "চলোবাডি বাংলাদেশের যৌথ মূলধনী কোম্পানি ও ফার্মসমূহের নিবন্ধক-এর অধীনে নিবন্ধিত। ট্রেড লাইসেন্স নং TRAD/DSCC/012495/2023।",
  },
  {
    title: "Eco-Tourism Fund",
    titleBn: "ইকো-ট্যুরিজম তহবিল",
    body: "2% of all booking revenues are allocated directly to local eco-conservation projects in Sundarbans and Sajek Valley, preserving Bangladesh's natural heritage.",
    bodyBn:
      "সকল বুকিং রাজস্বের ২% সুন্দরবন ও সাজেক ভ্যালিতে স্থানীয় পরিবেশ-সংরক্ষণ প্রকল্পে সরাসরি বরাদ্দ।",
  },
  {
    title: "Verified Operators",
    titleBn: "যাচাইকৃত অপারেটর",
    body: "Every hotel partner and tour organizer undergoes strict physical audits and license validation before receiving the CholoBuddy Verification Seal.",
    bodyBn:
      "প্রতিটি হোটেল অংশীদার এবং ট্যুর সংগঠক কঠোর শারীরিক অডিট এবং লাইসেন্স যাচাইয়ের পরে চলোবাডি সিল পায়।",
  },
];

export default function AboutPage() {
  const { currentLanguage } = useLanguage();
  const { containerVariants, itemVariants, slideInLeftVariants } = useAnimationVariants();
  const isEn = currentLanguage === "en";

  return (
    <>
      <Navbar />

      <AboutContainer>
        {/* Hero Banner (Misty Dawn Hills) */}
        <HeroBanner>
          <HeroBannerBg />
          <FadeToWhite />
          <HeroBannerContent>
            <CategoryTag>
              {isEn ? "Editorial" : "সম্পাদকীয়"}
            </CategoryTag>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ display: "inline-block", width: "100%" }}
            >
              <BannerTitle>
                {isEn ? (
                  <>
                    Curating the<br />Untamed.
                  </>
                ) : (
                  <>
                    বন্যতার<br />কিউরেশন।
                  </>
                )}
              </BannerTitle>
            </motion.h1>
          </HeroBannerContent>
        </HeroBanner>

        {/* The Story */}
        <StorySection>
          <StoryTitle>
            {isEn ? "The CholoBuddy Story" : "চলোবাডির গল্প"}
          </StoryTitle>
          <StoryBody>
            <p>
              {isEn
                ? "Born from a desire to strip away the noise of modern tourism, CholoBuddy exists at the intersection of ethereal minimalism and profound discovery. We believe that luxury is not merely an accumulation of amenities, but the presence of space, silence, and curated intention."
                : "আধুনিক পর্যটনের কোলাহল সরিয়ে ফেলার ইচ্ছা থেকে জন্ম নেওয়া, চলোবাডি অলীক মিনিমালিজম এবং গভীর আবিষ্কারের সংযোগস্থলে অবস্থান করে। আমরা বিশ্বাস করি যে বিলাসিতা কেবল সুযোগ-সুবিধার সমাহার নয়, বরং স্থান, নীরবতা এবং কিউরেটেড অভিপ্রায়ের উপস্থিতি।"}
            </p>
            <p>
              {isEn
                ? "Our journey began in the misty highlands of Sylhet, where the landscape demanded a different kind of observation — one that is slow, reverent, and deeply personal. Today, we craft editorial-grade travel experiences that serve as living galleries of Bangladesh's most breathtaking, quiet corners."
                : "আমাদের যাত্রা শুরু হয়েছিল সিলেটের কুয়াশাচ্ছন্ন উচ্চভূমিতে, যেখানে প্রকৃতি একটি ভিন্ন ধরনের পর্যবেক্ষণের দাবি রাখে — ধীর, শ্রদ্ধাশীল এবং গভীরভাবে ব্যক্তিগত। আজ, আমরা সম্পাদকীয়-মানের ভ্রমণ অভিজ্ঞতা তৈরি করি যা বাংলাদেশের সবচেয়ে শ্বাসরুদ্ধকর এবং শান্ত কোণগুলোর সচিত্র গ্যালারি হিসেবে কাজ করে।"}
            </p>
          </StoryBody>
        </StorySection>

        {/* Blueprint Ruler */}
        <MotifSeparator />

        {/* Stats */}
        <StatsSection />

        {/* Trust Compliance Cards */}
        <TrustSection>
          <TrustGrid>
            {TRUST_CARDS.map((card) => (
              <TrustCard key={card.title}>
                <TrustCardTitle>
                  {isEn ? card.title : card.titleBn}
                </TrustCardTitle>
                <TrustCardBody>
                  {isEn ? card.body : card.bodyBn}
                </TrustCardBody>
              </TrustCard>
            ))}
          </TrustGrid>
        </TrustSection>

        {/* Team */}
        <TeamSection />

        {/* Alpona Divider */}
        <AlponaDivider>
          <AlponaCenterMotif />
        </AlponaDivider>

        {/* Philosophy (Dark Panel) */}
        <PhilosophySection>
          <PhilosophyGrid>
            <PhilosophyLeftPanel
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={slideInLeftVariants}
            >
              <PhilosophyTitle>
                {isEn ? "Our Philosophy" : "আমাদের দর্শন"}
              </PhilosophyTitle>
              <PhilosophyDesc>
                {isEn
                  ? "We believe Bangladesh deserves to be experienced at the pace of a river — unhurried, wide, and full of quiet wonder. Our curation philosophy centres on depth over breadth."
                  : "আমরা বিশ্বাস করি বাংলাদেশ একটি নদীর গতিতে অনুভব করার যোগ্য — তাড়াহীন, বিস্তৃত এবং শান্ত বিস্ময়ে পূর্ণ। আমাদের কিউরেশন দর্শনে পরিধির চেয়ে গভীরতাই গুরুত্ব পায়।"}
              </PhilosophyDesc>
              <DotIndicatorsRow>
                <DotIndicator $variant="filled" />
                <DotIndicator $variant="shaded" />
                <DotIndicator $variant="outline" />
              </DotIndicatorsRow>
            </PhilosophyLeftPanel>

            <PhilosophyRightPanel
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              {PHILOSOPHY_PRINCIPLES.map((p) => (
                <PhilosophyItem key={p.num} variants={itemVariants}>
                  <PhilosophyNum>{p.num}</PhilosophyNum>
                  <div>
                    <PhilosophyItemTitle>
                      {isEn ? p.title : p.titleBn}
                    </PhilosophyItemTitle>
                    <PhilosophyItemDesc>
                      {isEn ? p.desc : p.descBn}
                    </PhilosophyItemDesc>
                  </div>
                </PhilosophyItem>
              ))}
            </PhilosophyRightPanel>
          </PhilosophyGrid>
        </PhilosophySection>

        {/* Contact CTA */}
        <BeginJourneySection>
          <BeginJourneyCard
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <BeginJourneyTitle>
              {isEn
                ? "Begin Your Bangladesh Journey"
                : "আপনার বাংলাদেশ যাত্রা শুরু করুন"}
            </BeginJourneyTitle>
            <BeginJourneyForm>
              <BeginJourneyInput
                placeholder="YOUR@EMAIL.COM"
                type="email"
              />
              <BeginJourneyBtn>
                {isEn ? "Get in Touch" : "যোগাযোগ করুন"}
              </BeginJourneyBtn>
            </BeginJourneyForm>
          </BeginJourneyCard>
        </BeginJourneySection>
      </AboutContainer>

      <Footer />
      <ChatBubble />
    </>
  );
}
