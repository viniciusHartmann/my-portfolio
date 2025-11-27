"use client";
import { useState } from "react";
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { CareerSection } from "../components/CareerSection";
import { ContactSection } from "../components/ContactSection";

export default function Home() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`min-h-screen ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <HeroSection isDark={isDark} />
      <AboutSection isDark={isDark} />
      <CareerSection isDark={isDark} />
      <ContactSection isDark={isDark} />
    </div>
  );
}
