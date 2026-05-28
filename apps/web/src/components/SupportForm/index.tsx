"use client";

import React from "react";
import { useSupportForm } from "@/hooks/useSupportForm";
import { useLanguage } from "@/hooks/useLanguage";
import {
  FormContainer,
  FormTitle,
  FormDesc,
  FormGrid,
  InputGroup,
  InputLabel,
  TextInput,
  SelectBox,
  MessageBox,
  SubmitButton
} from "./styles";

export default function SupportForm() {
  const { t } = useLanguage();
  const {
    formState,
    name,
    setName,
    email,
    setEmail,
    subject,
    setSubject,
    message,
    setMessage,
    handleSubmit,
  } = useSupportForm();

  return (
    <FormContainer>
      <FormTitle>
        {t("support.send_msg_title")}
      </FormTitle>
      <FormDesc>
        {t("support.send_msg_desc")}
      </FormDesc>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        
        {/* Name and Email side-by-side */}
        <FormGrid>
          <InputGroup>
            <InputLabel>{t("support.form.name_label")}</InputLabel>
            <TextInput
              required
              placeholder={t("support.form.name_placeholder")}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </InputGroup>

          <InputGroup>
            <InputLabel>{t("support.form.email_label")}</InputLabel>
            <TextInput
              required
              placeholder={t("support.form.email_placeholder")}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>
        </FormGrid>

        {/* Subject Dropdown */}
        <InputGroup>
          <InputLabel>{t("support.form.subject_label")}</InputLabel>
          <SelectBox
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          >
            <option value="general">{t("support.form.subjects.general")}</option>
            <option value="booking">{t("support.form.subjects.booking")}</option>
            <option value="partnership">{t("support.form.subjects.partnership")}</option>
            <option value="technical">{t("support.form.subjects.technical")}</option>
          </SelectBox>
        </InputGroup>

        {/* Message Field */}
        <InputGroup>
          <InputLabel>{t("support.form.message_label")}</InputLabel>
          <MessageBox
            required
            rows={5}
            placeholder={t("support.form.message_placeholder")}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </InputGroup>

        {/* Submit Button */}
        <SubmitButton
          type="submit"
          disabled={formState === "submitting"}
          $status={formState}
        >
          {formState === "idle" && t("support.form.submit_idle")}
          {formState === "submitting" && t("support.form.submit_sending")}
          {formState === "success" && t("support.form.submit_sent")}
        </SubmitButton>

      </form>
    </FormContainer>
  );
}
