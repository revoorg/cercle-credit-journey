"use client";

import { ChatBubble } from "@/components/chat/chat-bubble";

export function TypingIndicator() {
  return (
    <ChatBubble variant="bot" className="flex items-center gap-1.5 py-4 px-5">
      <span className="typing-dot h-2 w-2 rounded-full bg-cercle-grey-text/50" />
      <span className="typing-dot h-2 w-2 rounded-full bg-cercle-grey-text/50 [animation-delay:0.15s]" />
      <span className="typing-dot h-2 w-2 rounded-full bg-cercle-grey-text/50 [animation-delay:0.3s]" />
      <style>{`
        .typing-dot {
          animation: typing-bounce 1.2s ease-in-out infinite;
        }
        @keyframes typing-bounce {
          0%, 60%, 100% {
            transform: translateY(0);
            opacity: 0.4;
          }
          30% {
            transform: translateY(-6px);
            opacity: 1;
          }
        }
      `}</style>
    </ChatBubble>
  );
}
