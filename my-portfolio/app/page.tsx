'use client'
import { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { CareerSection } from "../components/CareerSection";
import { ContactSection } from "../components/ContactSection";

export default function Home() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--background)" }}>
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <HeroSection />
      <AboutSection />
      <CareerSection />
      <ContactSection />
    </div>
  );
}
