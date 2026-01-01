import React from "react";
import Component1 from "@/components/Component1";
import { HeroSection } from "@/components/hero-odyssey";
import { Header } from "@/components/header-3";
import { Testimonial } from "@/components/design-testimonial";
import FeaturesSection from "@/components/bento-grid-01";
import { ProjectShowcase } from "@/components/project-showcase";
import { Component } from "@/components/asmr-background";
import ASMRStaticBackground from "@/components/ASMRBackground";
import { MainSection } from "@/components/lets-work-section";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/ui/footer";
import MainFooter from "@/components/MainFooter";

const page = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      {/* <Testimonial /> */}
      {/* <Component /> */}
      <ASMRStaticBackground>
        <AboutSection />
      </ASMRStaticBackground>

      <ASMRStaticBackground>
        <FeaturesSection />
      </ASMRStaticBackground>

      <ASMRStaticBackground>
        <ProjectShowcase />
      </ASMRStaticBackground>

      <ASMRStaticBackground>
        <MainSection />
      </ASMRStaticBackground>

      <MainFooter />
    </div>
  );
};

export default page;
