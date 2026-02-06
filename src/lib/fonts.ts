import { DM_Sans, Baloo_2 } from "next/font/google";

// Phase 1: DM Sans as fallback
// Phase 2: Swap to Euclid Circular B via next/font/local when font files arrive
export const fontSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const fontBaloo = Baloo_2({
  subsets: ["latin"],
  variable: "--font-baloo",
  weight: ["400"],
});
