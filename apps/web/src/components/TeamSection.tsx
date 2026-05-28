"use client";

import React from "react";
import { motion } from "framer-motion";
import { useAnimationVariants } from "@/hooks/useAnimationVariants";
import { useLanguage } from "@/hooks/useLanguage";
import { teamData } from "@/lib/data";
import {
  SectionContainer,
  InnerContainer,
  HeaderRow,
  TitleCol,
  SectionTitle,
  SectionDesc,
  LineSeparator,
  EstablishedTag,
  TeamGrid,
  TeamCard,
  ImageWrapper,
  TeamImage,
  CardInfo,
  CuratorName,
  CuratorRole
} from "./TeamSection.styles";

export default function TeamSection() {
  const { containerVariants, itemVariants } = useAnimationVariants();
  const { currentLanguage } = useLanguage();
  const isEn = currentLanguage === "en";

  return (
    <SectionContainer>
      <InnerContainer>
        {/* Header */}
        <HeaderRow>
          <TitleCol>
            <SectionTitle>
              {isEn ? "The Curators" : "কিউরেটরগণ"}
            </SectionTitle>
            <SectionDesc>
              {isEn
                ? "Architects of immersive Bangladesh travel experiences, each deeply rooted in the land."
                : "বাংলাদেশের নিমজ্জিত ভ্রমণ অভিজ্ঞতার স্থপতি, প্রত্যেকে এই ভূমির সাথে গভীরভাবে সংযুক্ত।"}
            </SectionDesc>
          </TitleCol>
          <LineSeparator />
          <EstablishedTag>
            {isEn ? "Est. 2021, Dhaka" : "প্রতিষ্ঠা ২০২১, ঢাকা"}
          </EstablishedTag>
        </HeaderRow>

        {/* Portrait Cards */}
        <TeamGrid
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {teamData.map((member) => (
            <TeamCard key={member.id} variants={itemVariants}>
              {/* Portrait */}
              <ImageWrapper>
                <TeamImage
                  alt={isEn ? member.name : member.nameBn}
                  src={member.imgUrl}
                />
              </ImageWrapper>
              {/* Info */}
              <CardInfo>
                <CuratorName>
                  {isEn ? member.name : member.nameBn}
                </CuratorName>
                <CuratorRole>
                  {isEn ? member.role : member.roleBn}
                </CuratorRole>
              </CardInfo>
            </TeamCard>
          ))}
        </TeamGrid>
      </InnerContainer>
    </SectionContainer>
  );
}
