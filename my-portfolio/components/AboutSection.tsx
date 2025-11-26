import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutSection() {
  return (
    <section id="sobre" className="min-h-screen flex items-center justify-center px-6 py-20" style={{ backgroundColor: "var(--background)" }}>
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-16 text-center" style={{ fontSize: "3rem", fontWeight: "700", color: "var(--foreground)" }}>
          Sobre Mim
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "1/1" }}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1554765345-6ad6a5417cde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMG1hbnxlbnwxfHx8fDE3NjQwMjE1MDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Vinícius Hartmann"
                className="w-full h-full object-cover"
              />
              <div 
                className="absolute inset-0 border-4 rounded-2xl"
                style={{ borderColor: "var(--primary)" }}
              />
            </div>
          </div>
          
          <div>
            <h3 className="mb-6" style={{ fontSize: "1.875rem", fontWeight: "600", color: "var(--foreground)" }}>
              Olá! Prazer em te conhecer.
            </h3>
            <p className="mb-4 leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
              Sou Vinícius Hartmann, desenvolvedor apaixonado por criar soluções digitais 
              inovadoras e elegantes. Com anos de experiência em desenvolvimento web, 
              trabalho para transformar ideias em realidade através de código limpo e 
              design intuitivo.
            </p>
            <p className="mb-6 leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
              Quando não estou programando, gosto de explorar novas tecnologias, praticar 
              fotografia, tocar violão e passar tempo ao ar livre. Acredito que um equilíbrio 
              saudável entre trabalho e hobbies é essencial para manter a criatividade fluindo.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full" style={{ backgroundColor: "var(--muted)", color: "var(--foreground)" }}>
                React
              </span>
              <span className="px-4 py-2 rounded-full" style={{ backgroundColor: "var(--muted)", color: "var(--foreground)" }}>
                TypeScript
              </span>
              <span className="px-4 py-2 rounded-full" style={{ backgroundColor: "var(--muted)", color: "var(--foreground)" }}>
                Node.js
              </span>
              <span className="px-4 py-2 rounded-full" style={{ backgroundColor: "var(--muted)", color: "var(--foreground)" }}>
                Design
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}