import { TypewriterEffect } from "./TypewriterEffect";

export function HeroSection() {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center px-6" style={{ backgroundColor: "var(--background)" }}>
      <div className="container mx-auto text-center">
        <h1 className="mb-6" style={{ fontSize: "4rem", fontWeight: "700", color: "var(--foreground)" }}>
          <TypewriterEffect text="Vinícius Hartmann" speed={100} />
        </h1>
        <p className="mb-8" style={{ fontSize: "1.5rem", color: "var(--muted-foreground)" }}>
          Desenvolvedor Full Stack
        </p>
        <div className="inline-block px-6 py-3 rounded-full" style={{ backgroundColor: "var(--primary)", color: "white" }}>
          Disponível para projetos
        </div>
      </div>
    </section>
  );
}