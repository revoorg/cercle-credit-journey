import type { Metadata, Viewport } from "next";
import { fontSans, fontBaloo } from "@/lib/fonts";
import { ScenarioProvider } from "@/lib/scenario-context";
import { ServiceWorkerRegister } from "@/components/service-worker-register";
import { PageTransitionOverlay } from "@/components/shared/page-transition-overlay";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cercle",
  description: "Discover the future of credit journeys",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Cercle",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#00466B",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${fontSans.variable} ${fontBaloo.variable} font-sans antialiased`}>
        <ScenarioProvider>
          {children}
          <PageTransitionOverlay />
        </ScenarioProvider>
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
