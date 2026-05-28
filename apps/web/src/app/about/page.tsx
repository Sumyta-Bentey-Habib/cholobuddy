"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
  const {
    t: t,
    currentLanguage
  } = useLanguage();
  const { containerVariants, itemVariants, slideInLeftVariants } = useAnimationVariants();

  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <>
      <Navbar />
      <AboutContainer>
        {/* Hero Banner (Misty Dawn Hills) */}
        <HeroBanner>
          <HeroBannerBg style={{ y: yBg }} />
          <FadeToWhite />
          <HeroBannerContent>
            <CategoryTag>
              {t("Editorial")}
            </CategoryTag>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ display: "inline-block", width: "100%" }}
            >
              <BannerTitle style={{ whiteSpace: "pre-line" }}>
                {t("Curating the Untamed")}
              </BannerTitle>
            </motion.h1>
          </HeroBannerContent>
        </HeroBanner>

        {/* The Story */}
        <StorySection>
          <StoryTitle>
            {t("The CholoBuddy Story")}
          </StoryTitle>
          <StoryBody>
            <p>
              {t(
                "Born from a desire to strip away the noise of modern tourism, CholoBuddy exists at the intersection of ethereal minimalism and profound discovery. We believe that luxury is not merely an accumulation of amenities, but the presence of space, silence, and curated intention."
              )}
            </p>
            <p>
              {t(
                "Our journey began in the misty highlands of Sylhet, where the landscape demanded a different kind of observation — one that is slow, reverent, and deeply personal. Today, we craft editorial-grade travel experiences that serve as living galleries of Bangladesh's most breathtaking, quiet corners."
              )}
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
                  {t(card.title)}
                </TrustCardTitle>
                <TrustCardBody>
                  {t(card.body)}
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
                {t("Our Philosophy")}
              </PhilosophyTitle>
              <PhilosophyDesc>
                {t(
                  "We believe Bangladesh deserves to be experienced at the pace of a river — unhurried, wide, and full of quiet wonder. Our curation philosophy centres on depth over breadth."
                )}
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
                      {t(p.title)}
                    </PhilosophyItemTitle>
                    <PhilosophyItemDesc>
                      {t(p.desc)}
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
              {t("Begin Your Bangladesh Journey")}
            </BeginJourneyTitle>
            <BeginJourneyForm>
              <BeginJourneyInput
                placeholder="YOUR@EMAIL.COM"
                type="email"
              />
              <BeginJourneyBtn
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t("Get in Touch")}
              </BeginJourneyBtn>
            </BeginJourneyForm>
          </BeginJourneyCard>
        </BeginJourneySection>
      </AboutContainer>
      <Footer />
    </>
  );
}
