import { TypewriterEffect } from "./TypewriterEffect";
import "./../app/css/heroSection.css"; // Importe o novo CSS aqui

export function HeroSection() {
  return (
    <section id="inicio" className="hero-section">
      <div className="hero-container">
        <h1 className="hero-title">
          <TypewriterEffect text="Vinícius Hartmann" speed={100} />
        </h1>
        <p className="hero-subtitle">
          Desenvolvedor Full Stack
        </p>
        <div className="hero-badge">
          Disponível para projetos
        </div>
      </div>
    </section>
  );
}
