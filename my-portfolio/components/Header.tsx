"use client";

import { SunOutlined, MoonOutlined } from "@ant-design/icons";
import { Button } from "antd";

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export function Header({ isDark, toggleTheme }: HeaderProps) {
  const navItems = [
    { id: "hero", label: "Início" },
    { id: "about", label: "Sobre" },
    { id: "career", label: "Carreira" },
    { id: "contact", label: "Contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        backdrop-blur-md border-b 
        ${isDark ? "bg-black/80 border-gray-800" : "bg-white/80 border-gray-200"}
      `}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-xl font-semibold">
            VH<span className="text-[#34a1eb]">.</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex w-full justify-center">
            <nav className="flex gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className="hover:text-[#34a1eb] transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Theme + Mobile Button */}
          <div className="flex justify-end">
            <Button
              shape="circle"
              onClick={toggleTheme}
              icon={isDark ? <SunOutlined /> : <MoonOutlined />}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
