"use client";


function CalendarIcon() {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Calendar body */}
      <rect
        x="8"
        y="16"
        width="64"
        height="56"
        rx="8"
        stroke="#DFF1FF"
        strokeWidth="3"
        fill="none"
      />
      {/* Top bar */}
      <rect x="8" y="16" width="64" height="16" rx="8" fill="#DFF1FF" />
      {/* Hangers */}
      <line x1="28" y1="8" x2="28" y2="22" stroke="#DFF1FF" strokeWidth="3" strokeLinecap="round" />
      <line x1="52" y1="8" x2="52" y2="22" stroke="#DFF1FF" strokeWidth="3" strokeLinecap="round" />
      {/* Grid dots */}
      <circle cx="24" cy="44" r="3" fill="#DFF1FF" />
      <circle cx="40" cy="44" r="3" fill="#DFF1FF" />
      <circle cx="56" cy="44" r="3" fill="#DFF1FF" />
      <circle cx="24" cy="58" r="3" fill="#DFF1FF" />
      <circle cx="40" cy="58" r="3" fill="#DFF1FF" />
      <circle cx="56" cy="58" r="3" fill="#DFF1FF" />
    </svg>
  );
}

function CalendarColumn() {
  // Generate enough icons to fill ~2x screen height (each icon ~80px + 24px gap = 104px)
  // 16 icons ≈ 1664px which covers most screens
  const icons = Array.from({ length: 16 }, (_, i) => (
    <CalendarIcon key={i} />
  ));

  return (
    <div className="animate-calendar-scroll flex flex-col items-center gap-6">
      {/* First set */}
      {icons}
      {/* Duplicate set for seamless loop */}
      {icons.map((_, i) => (
        <CalendarIcon key={`dup-${i}`} />
      ))}
    </div>
  );
}

export function FlashbackTitle() {
  return (
    <div className="relative flex h-dvh items-center justify-center overflow-hidden bg-white">
      {/* Centered scrolling calendar column */}
      <div className="pointer-events-none absolute inset-0 flex items-start justify-center opacity-35">
        <CalendarColumn />
      </div>

      {/* Title text on top */}
      <h1 className="animate-flashback-title-in relative z-10 text-center text-4xl font-bold text-[#00466B]">
        Quelques jours
        <br />
        plus tôt...
      </h1>
    </div>
  );
}
