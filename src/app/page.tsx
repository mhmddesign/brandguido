import Hero from "@/components/Hero";
import NarrativeBlock from "@/components/NarrativeBlock";
import MoodGrid from "@/components/MoodGrid";
import MissionVision from "@/components/MissionVision";
import LogoDeepDive from "@/components/LogoDeepDive";
import LogoSuite from "@/components/LogoSuite";
import ProcessStudio from "@/components/ProcessStudio";
import ColorPalette from "@/components/ColorPalette";
import TypographyShowcase from "@/components/TypographyShowcase";
import MockupGallery from "@/components/MockupGallery";
import StationerySection from "@/components/StationerySection";
import SocialTemplates from "@/components/SocialTemplates";
import DesignerFooter from "@/components/DesignerFooter";
import SmoothScroll from "@/components/ui/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <Hero />
        
        {/* Brand Guidelines Narrative */}
        <NarrativeBlock />
        
        {/* Visual Mood Board */}
        <MoodGrid />
        
        {/* Mission & Vision - Sticky Scroll */}
        <MissionVision />
        
        {/* Logo Deep Dive - Scrollytelling */}
        <LogoDeepDive />
        
        {/* Logo Variations */}
        <LogoSuite />
        
        {/* Process & Sketches */}
        <ProcessStudio />
        
        {/* Color System with Accessibility */}
        <ColorPalette />
        
        {/* Typography */}
        <TypographyShowcase />
        
        {/* Mockups & Applications */}
        <MockupGallery />
        
        {/* Stationery */}
        <StationerySection />
        
        {/* Social Templates */}
        <SocialTemplates />
        
        {/* Designer Footer */}
        <DesignerFooter />
      </div>
    </SmoothScroll>
  );
}
