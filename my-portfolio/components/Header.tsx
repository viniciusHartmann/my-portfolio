import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export function Header({ isDark, toggleTheme }: HeaderProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-border" style={{ backgroundColor: "var(--background)" }}>
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="tracking-tight" style={{ color: "var(--primary)" }}>
          VH
        </div>
        
        <div className="flex items-center gap-8">
          <button 
            onClick={() => scrollToSection("inicio")}
            className="hover:opacity-70 transition-opacity"
            style={{ color: "var(--foreground)" }}
          >
            Início
          </button>
          <button 
            onClick={() => scrollToSection("sobre")}
            className="hover:opacity-70 transition-opacity"
            style={{ color: "var(--foreground)" }}
          >
            Sobre
          </button>
          <button 
            onClick={() => scrollToSection("carreira")}
            className="hover:opacity-70 transition-opacity"
            style={{ color: "var(--foreground)" }}
          >
            Carreira
          </button>
          <button 
            onClick={() => scrollToSection("contato")}
            className="hover:opacity-70 transition-opacity"
            style={{ color: "var(--foreground)" }}
          >
            Contato
          </button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="ml-2"
          >
            {isDark ? <Sun className="h-5 w-5" style={{ color: "var(--foreground)" }} /> : <Moon className="h-5 w-5" style={{ color: "var(--foreground)" }} />}
          </Button>
        </div>
      </nav>
    </header>
  );
}