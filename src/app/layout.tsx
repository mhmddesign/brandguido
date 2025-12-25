import type { Metadata } from "next";
import "./globals.css";
import GrainOverlay from "@/components/ui/GrainOverlay";
import { LightboxProvider } from "@/components/ui/Lightbox";

export const metadata: Metadata = {
  title: "Vitalora | Vitality is a Ritual",
  description: "High-end luxury wellness brand dedicated to bridging the gap between scientific precision and organic ritual.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-accent-purple selection:text-cream md:cursor-none">
        <LightboxProvider>
          <GrainOverlay />
          <main>{children}</main>
        </LightboxProvider>
      </body>
    </html>
  );
}
