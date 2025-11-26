import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import { Button } from "./ui/button";

export function ContactSection() {
  return (
    <section id="contato" className="min-h-screen flex items-center justify-center px-6 py-20" style={{ backgroundColor: "var(--background)" }}>
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="mb-8" style={{ fontSize: "3rem", fontWeight: "700", color: "var(--foreground)" }}>
          Vamos Conversar?
        </h2>
        <p className="mb-12" style={{ fontSize: "1.25rem", color: "var(--muted-foreground)" }}>
          Estou sempre aberto a novos projetos e oportunidades. Entre em contato!
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <a 
            href="mailto:vinicius@example.com"
            className="p-6 rounded-xl transition-all hover:scale-105"
            style={{ backgroundColor: "var(--card)" }}
          >
            <Mail className="w-8 h-8 mx-auto mb-4" style={{ color: "var(--primary)" }} />
            <h3 className="mb-2" style={{ fontWeight: "600", color: "var(--foreground)" }}>
              Email
            </h3>
            <p style={{ color: "var(--muted-foreground)" }}>
              vinicius@example.com
            </p>
          </a>
          
          <div 
            className="p-6 rounded-xl"
            style={{ backgroundColor: "var(--card)" }}
          >
            <MapPin className="w-8 h-8 mx-auto mb-4" style={{ color: "var(--primary)" }} />
            <h3 className="mb-2" style={{ fontWeight: "600", color: "var(--foreground)" }}>
              Localização
            </h3>
            <p style={{ color: "var(--muted-foreground)" }}>
              Joinville - SC, Brasil
            </p>
          </div>
        </div>
        
        <div className="flex items-center justify-center gap-4">
          <Button
            variant="outline"
            size="icon"
            className="w-12 h-12"
            asChild
          >
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="w-12 h-12"
            asChild
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
            </a>
          </Button>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border">
          <p style={{ color: "var(--muted-foreground)" }}>
            © 2024 Vinícius Hartmann. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </section>
  );
}