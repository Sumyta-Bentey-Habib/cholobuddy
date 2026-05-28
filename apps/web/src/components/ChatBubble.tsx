"use client";

import React from "react";
import { useChat } from "@/hooks/useChat";
import {
  ChatWrapper,
  WindowContainer,
  WindowHeader,
  StatusRow,
  StatusIndicator,
  StatusLabel,
  CloseHeaderBtn,
  MessagesBox,
  MessageRow,
  Bubble,
  MessageTime,
  TypingIndicator,
  TypingDot,
  InputForm,
  ChatInput,
  SendButton,
  ToggleButton
} from "./ChatBubble.styles";

export default function ChatBubble() {
  const {
    isOpen,
    toggleOpen,
    messages,
    inputVal,
    setInputVal,
    isTyping,
    handleSend,
    messagesEndRef,
  } = useChat();

  return (
    <ChatWrapper>
      {/* Chat Window */}
      <WindowContainer $open={isOpen}>
        {/* Header */}
        <WindowHeader>
          <StatusRow>
            <StatusIndicator />
            <StatusLabel>CONCIERGE SUPPORT</StatusLabel>
          </StatusRow>
          <CloseHeaderBtn
            className="material-symbols-outlined"
            onClick={toggleOpen}
          >
            close
          </CloseHeaderBtn>
        </WindowHeader>

        {/* Messages */}
        <MessagesBox className="custom-scrollbar">
          {messages.map((msg) => (
            <MessageRow key={msg.id} $isUser={msg.sender === "user"}>
              <Bubble $isUser={msg.sender === "user"}>
                <p>{msg.text}</p>
              </Bubble>
              <MessageTime>{msg.timestamp}</MessageTime>
            </MessageRow>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <TypingIndicator>
              <TypingDot $delay={0} />
              <TypingDot $delay={150} />
              <TypingDot $delay={300} />
            </TypingIndicator>
          )}

          <div ref={messagesEndRef} />
        </MessagesBox>

        {/* Input */}
        <InputForm onSubmit={handleSend}>
          <ChatInput
            placeholder="Type a message..."
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
          <SendButton type="submit">
            <span className="material-symbols-outlined">send</span>
          </SendButton>
        </InputForm>
      </WindowContainer>

      {/* Toggle Button */}
      <ToggleButton onClick={toggleOpen} aria-label="Chat support">
        <span className="material-symbols-outlined">
          {isOpen ? "close" : "chat"}
        </span>
      </ToggleButton>
    </ChatWrapper>
  );
}
