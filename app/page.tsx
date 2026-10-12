"use client"

import useScrollReveal from "./hooks/useScrollReveal";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import Slider from "./Slider";

export default function Home() {
  useScrollReveal();
  return (
    <main className="mt-[-25px] bg-black min-h-screen text-white">
    <Navbar />
    <div className="back-ground">
    <div className="pt-24 ">
        <div className="reveal"> 
      <Slider />
        <HeroSection />
        </div>
      <div className="reveal">
        <ServicesSection />
      </div> 
    </div>

      <div className="reveal">
        <ProjectsSection />
      </div>
      <div className="reveal">
        <PortfolioSection />
      </div>
        <div className="reveal">
        <TestimonialsSection />
        </div>
      <div className="reveal">
        <CTASection />
      </div>
      </div>

      <Footer />
      <FloatingWhatsapp />
    </main>
  );
}
