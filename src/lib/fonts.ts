import localFont from "next/font/local";
import { Baloo_2 } from "next/font/google";

export const fontSans = localFont({
  src: [
    { path: "../../public/fonts/EuclidCircularB-Light.woff2", weight: "300", style: "normal" },
    { path: "../../public/fonts/EuclidCircularB-LightItalic.woff2", weight: "300", style: "italic" },
    { path: "../../public/fonts/EuclidCircularB-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/EuclidCircularB-Italic.woff2", weight: "400", style: "italic" },
    { path: "../../public/fonts/EuclidCircularB-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/EuclidCircularB-MediumItalic.woff2", weight: "500", style: "italic" },
    { path: "../../public/fonts/EuclidCircularB-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/EuclidCircularB-SemiBoldItalic.woff2", weight: "600", style: "italic" },
    { path: "../../public/fonts/EuclidCircularB-Bold.woff2", weight: "700", style: "normal" },
    { path: "../../public/fonts/EuclidCircularB-BoldItalic.woff2", weight: "700", style: "italic" },
    { path: "../../public/fonts/EuclidCircularB-ExtraBold.woff2", weight: "800", style: "normal" },
    { path: "../../public/fonts/EuclidCircularB-ExtraBoldItalic.woff2", weight: "800", style: "italic" },
  ],
  variable: "--font-sans",
});

export const fontBaloo = Baloo_2({
  subsets: ["latin"],
  variable: "--font-baloo",
  weight: ["400"],
});
