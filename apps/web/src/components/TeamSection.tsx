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
  const {
    t: t,
    currentLanguage
  } = useLanguage();

  return (
    <SectionContainer>
      <InnerContainer>
        {/* Header */}
        <HeaderRow>
          <TitleCol>
            <SectionTitle>
              {t("The Curators")}
            </SectionTitle>
            <SectionDesc>
              {t(
                "Architects of immersive Bangladesh travel experiences, each deeply rooted in the land."
              )}
            </SectionDesc>
          </TitleCol>
          <LineSeparator />
          <EstablishedTag>
            {t("Est. 2021, Dhaka")}
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
                  alt={t(member.name)}
                  src={member.imgUrl}
                />
              </ImageWrapper>
              {/* Info */}
              <CardInfo>
                <CuratorName>
                  {t(member.name)}
                </CuratorName>
                <CuratorRole>
                  {t(member.role)}
                </CuratorRole>
              </CardInfo>
            </TeamCard>
          ))}
        </TeamGrid>
      </InnerContainer>
    </SectionContainer>
  );
}
