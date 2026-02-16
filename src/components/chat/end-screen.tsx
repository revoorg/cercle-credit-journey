"use client";

import { useRef, useEffect, useState } from "react";

function AnimatedText({
  text,
  y,
  delay,
  fontSize,
}: {
  text: string;
  y: string;
  delay: number;
  fontSize: number;
}) {
  const textRef = useRef<SVGTextElement>(null);
  const [dashLength, setDashLength] = useState(0);

  useEffect(() => {
    if (textRef.current) {
      // getComputedTextLength gives advance width; multiply for stroke path coverage
      const length = textRef.current.getComputedTextLength() * 3;
      setDashLength(length);
    }
  }, []);

  const drawDuration = 2;
  const fillDelay = delay + drawDuration;

  return (
    <text
      ref={textRef}
      x="50%"
      y={y}
      textAnchor="middle"
      fontFamily="'Hourglass Of Shine', cursive"
      fontSize={fontSize}
      fill="url(#gold-gradient)"
      fillOpacity={0}
      stroke="url(#gold-gradient)"
      strokeWidth={1}
      style={
        dashLength > 0
          ? {
              strokeDasharray: dashLength,
              strokeDashoffset: dashLength,
              animation: `draw-text ${drawDuration}s ease ${delay}s forwards, fill-text 0.6s ease ${fillDelay}s forwards`,
            }
          : { opacity: 0 }
      }
    >
      {text}
    </text>
  );
}

export function EndScreen() {
  return (
    <div
      className="flex h-dvh items-center justify-center"
      style={{
        background:
          "linear-gradient(237deg, #0B7ACE 18%, #00466B 75%)",
      }}
    >
      <svg
        viewBox="0 0 390 240"
        className="w-full max-w-[390px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4A843" />
            <stop offset="50%" stopColor="#C49A38" />
            <stop offset="100%" stopColor="#B8912E" />
          </linearGradient>
        </defs>
        <AnimatedText text="Cercle" y="80" delay={0.3} fontSize={61} />
        <AnimatedText text="Algoan" y="160" delay={2.5} fontSize={61} />
      </svg>
    </div>
  );
}
