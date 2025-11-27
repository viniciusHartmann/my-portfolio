import { MenuOutlined, CloseOutlined, SunOutlined, MoonOutlined } from "@ant-design/icons";
import { Button, Drawer, Menu } from "antd";
import { useState } from "react";

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export function Header({ isDark, toggleTheme }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

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
          <div className="hidden md:flex">
            <Menu
              mode="horizontal"
              theme={isDark ? "dark" : "light"}
              selectable={false}
              items={navItems.map((item) => ({
                key: item.id,
                label: (
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="hover:text-[#34a1eb] transition-colors"
                  >
                    {item.label}
                  </button>
                ),
              }))}
              className="bg-transparent border-none"
            />
          </div>

          {/* Theme + Mobile Button */}
          <div className="flex items-center gap-3">
            <Button
              shape="circle"
              onClick={toggleTheme}
              icon={isDark ? <SunOutlined /> : <MoonOutlined />}
            />

            <Button
              shape="circle"
              className="md:hidden"
              onClick={() => setIsMenuOpen(true)}
              icon={<MenuOutlined />}
            />
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        open={isMenuOpen}
        closeIcon={<CloseOutlined />}
        onClose={() => setIsMenuOpen(false)}
      >
        <Menu
          mode="inline"
          selectable={false}
          items={navItems.map((item) => ({
            key: item.id,
            label: (
              <button
                onClick={() => scrollToSection(item.id)}
                className="w-full text-left py-2"
              >
                {item.label}
              </button>
            ),
          }))}
        />
      </Drawer>
    </header>
  );
}
