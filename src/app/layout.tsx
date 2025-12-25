import type { Metadata } from "next";
import "./globals.css";
import { LightboxProvider } from "@/components/ui/Lightbox";
import FloatingDesigner from "@/components/FloatingDesigner";
import Loader from "@/components/ui/Loader";
import BackgroundMark from "@/components/ui/BackgroundMark";

export const metadata: Metadata = {
  title: "Vitalora | Vitality is a Ritual",
  description: "A luxury wellness brand identity crafted by MHMD.DESIGN",
  icons: {
    icon: "/images/logo-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Loader />
        <BackgroundMark />
        <LightboxProvider>
          {children}
        </LightboxProvider>
        <FloatingDesigner />
      </body>
    </html>
  );
}
