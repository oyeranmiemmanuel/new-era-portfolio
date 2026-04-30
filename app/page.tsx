"use client"

import useScrollReveal from "./hooks/useScrollReveal";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";

export default function Home() {
  useScrollReveal();
  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />

      <div className="pt-24">
        <div className="reveal"> 
        <HeroSection />
        </div>
      <div className="reveal">
        <ServicesSection />
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