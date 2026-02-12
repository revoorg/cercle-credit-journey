"use client";

import Image from "next/image";
import { BotAvatar } from "@/components/chat/bot-avatar";

interface ChatHeaderProps {
  compact?: boolean;
}

export function ChatHeader({ compact = false }: ChatHeaderProps) {
  if (compact) {
    return (
      <header className="sticky top-0 z-50 relative flex shrink-0 items-center justify-between px-4 pb-4 pt-[max(24px,env(safe-area-inset-top))]">
        {/* Curved gradient background */}
        <div
          className="absolute inset-x-0 top-0 bottom-0"
          style={{
            background: "linear-gradient(180deg, #F3F8FD 0%, #EDF3F8 100%)",
          }}
        >
          {/* White overlay creating concave (∩) bottom curve */}
          <div
            className="absolute inset-x-0 bottom-0"
            style={{
              height: 12,
              background: "white",
              borderRadius: "50% 50% 0 0 / 12px 12px 0 0",
            }}
          />
        </div>
        <div className="relative w-10" />
        <div className="relative">
          <BotAvatar size={48} />
        </div>
        {/* User avatar with lock badge */}
        <div className="relative">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-[#D9D9D9]">
            <Image
              src="/images/avatars/user-avatar.png"
              alt="Utilisateur"
              fill
              className="object-cover scale-[1.35]"
            />
          </div>
          <span className="absolute -bottom-3 -left-2 flex h-6 w-6 items-center justify-center rounded-full border border-[#D9D9D9] bg-[#00466B]">
            <svg width="10" height="12" viewBox="0 0 9.308 12" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.943 5.294H1.153L1.157 3.336C1.201 2.413 1.601 1.585 2.22 0.986L2.225 0.981C2.857 0.373 3.715 0 4.654 0C5.595 0 6.455 0.375 7.088 0.986C7.719 1.596 8.123 2.445 8.154 3.389L8.155 5.294H8.366C8.626 5.294 8.863 5.4 9.032 5.57L9.077 5.621C9.221 5.787 9.308 6.002 9.308 6.236V11.058C9.308 11.318 9.202 11.555 9.032 11.724C8.862 11.894 8.625 12 8.366 12H0.942C0.682 12 0.445 11.894 0.276 11.724C0.106 11.554 0 11.317 0 11.058V6.236C0 5.979 0.106 5.743 0.276 5.572C0.446 5.4 0.683 5.294 0.943 5.294ZM4.655 7.005C5.003 7.005 5.285 7.287 5.285 7.636C5.285 7.911 5.109 8.145 4.863 8.231L4.97 8.722L5.285 10.168H4.024L4.339 8.722L4.446 8.231C4.2 8.145 4.024 7.911 4.024 7.636C4.024 7.287 4.306 7.005 4.655 7.005ZM2.284 5.294H7.025V3.407C7.002 2.774 6.729 2.208 6.306 1.799C5.879 1.384 5.296 1.131 4.655 1.131C4.013 1.131 3.432 1.384 3.006 1.796C2.586 2.203 2.314 2.761 2.284 3.384L2.284 5.294Z"
                fill="white"
              />
            </svg>
          </span>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 relative flex shrink-0 flex-col items-center px-4 pt-[max(24px,env(safe-area-inset-top))]">
      {/* Curved gradient background */}
      <div
        className="absolute inset-x-0 top-0 bottom-0"
        style={{
          background: "linear-gradient(180deg, #F3F8FD 0%, #EDF3F8 100%)",
        }}
      >
        {/* White overlay creating concave (∩) bottom curve */}
        <div
          className="absolute inset-x-0 bottom-0"
          style={{
            height: 20,
            background: "white",
            borderRadius: "50% 50% 0 0 / 20px 20px 0 0",
          }}
        />
      </div>

      {/* User avatar in top-right */}
      <div className="absolute right-4 top-[max(24px,env(safe-area-inset-top))] z-10">
        <div className="relative">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-[#D9D9D9]">
            <Image
              src="/images/avatars/user-avatar.png"
              alt="Utilisateur"
              fill
              className="object-cover scale-[1.35]"
            />
          </div>
          <span className="absolute -bottom-3 -left-2 flex h-6 w-6 items-center justify-center rounded-full border border-[#D9D9D9] bg-[#00466B]">
            <svg width="10" height="12" viewBox="0 0 9.308 12" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.943 5.294H1.153L1.157 3.336C1.201 2.413 1.601 1.585 2.22 0.986L2.225 0.981C2.857 0.373 3.715 0 4.654 0C5.595 0 6.455 0.375 7.088 0.986C7.719 1.596 8.123 2.445 8.154 3.389L8.155 5.294H8.366C8.626 5.294 8.863 5.4 9.032 5.57L9.077 5.621C9.221 5.787 9.308 6.002 9.308 6.236V11.058C9.308 11.318 9.202 11.555 9.032 11.724C8.862 11.894 8.625 12 8.366 12H0.942C0.682 12 0.445 11.894 0.276 11.724C0.106 11.554 0 11.317 0 11.058V6.236C0 5.979 0.106 5.743 0.276 5.572C0.446 5.4 0.683 5.294 0.943 5.294ZM4.655 7.005C5.003 7.005 5.285 7.287 5.285 7.636C5.285 7.911 5.109 8.145 4.863 8.231L4.97 8.722L5.285 10.168H4.024L4.339 8.722L4.446 8.231C4.2 8.145 4.024 7.911 4.024 7.636C4.024 7.287 4.306 7.005 4.655 7.005ZM2.284 5.294H7.025V3.407C7.002 2.774 6.729 2.208 6.306 1.799C5.879 1.384 5.296 1.131 4.655 1.131C4.013 1.131 3.432 1.384 3.006 1.796C2.586 2.203 2.314 2.761 2.284 3.384L2.284 5.294Z"
                fill="white"
              />
            </svg>
          </span>
        </div>
      </div>

      {/* Centered bot avatar */}
      <div className="relative z-10 mt-8">
        <BotAvatar size={72} />
      </div>
    </header>
  );
}
