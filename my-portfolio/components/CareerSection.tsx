import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Briefcase } from "lucide-react";
import { TechnologiesCarousel } from "./TechnologiesCarousel";

interface CareerEvent {
  year: string;
  title: string;
  company: string;
  description: string;
  details: string;
}

const careerData: CareerEvent[] = [
  {
    year: "2024",
    title: "Desenvolvedor Full Stack Sênior",
    company: "Tech Solutions Inc.",
    description: "Liderando projetos de larga escala",
    details: "Atuando como desenvolvedor full stack sênior, sou responsável por arquitetar e implementar soluções escaláveis para clientes empresariais. Lidero uma equipe de 5 desenvolvedores e trabalho diretamente com stakeholders para garantir a entrega de produtos de alta qualidade. Principais tecnologias: React, Node.js, PostgreSQL, AWS."
  },
  {
    year: "2022",
    title: "Desenvolvedor Full Stack",
    company: "Digital Innovations",
    description: "Desenvolvimento de aplicações web modernas",
    details: "Desenvolvi múltiplas aplicações web responsivas e performáticas, colaborando com designers e product managers. Implementei features críticas que aumentaram o engajamento dos usuários em 40%. Trabalhei com metodologias ágeis e contribuí para a melhoria contínua dos processos de desenvolvimento."
  },
  {
    year: "2020",
    title: "Desenvolvedor Frontend",
    company: "Creative Agency",
    description: "Especialização em interfaces de usuário",
    details: "Comecei minha jornada profissional focando em desenvolvimento frontend, criando interfaces elegantes e acessíveis. Aprendi a importância de UX/UI e desenvolvi habilidades em React, TypeScript e CSS. Participei de mais de 15 projetos bem-sucedidos para diversos clientes."
  },
  {
    year: "2019",
    title: "Estágio em Desenvolvimento",
    company: "StartupXYZ",
    description: "Primeiros passos na carreira tech",
    details: "Meu primeiro contato profissional com desenvolvimento de software. Aprendi fundamentos de programação, trabalho em equipe e boas práticas de desenvolvimento. Contribuí para pequenas features e correções de bugs, sempre buscando aprender com desenvolvedores mais experientes."
  }
];

export function CareerSection() {
  const [selectedEvent, setSelectedEvent] = useState<CareerEvent | null>(null);

  return (
    <section id="carreira" className="min-h-screen flex items-center justify-center px-6 py-20" style={{ backgroundColor: "var(--muted)" }}>
      <div className="container mx-auto max-w-4xl">
        <h2 className="mb-16 text-center" style={{ fontSize: "3rem", fontWeight: "700", color: "var(--foreground)" }}>
          Minha Carreira
        </h2>
        
        <div className="relative">
          {/* Linha vertical */}
          <div 
            className="absolute left-8 top-0 bottom-0 w-0.5"
            style={{ backgroundColor: "var(--primary)" }}
          />
          
          <div className="space-y-12">
            {careerData.map((event, index) => (
              <div key={index} className="relative pl-20">
                {/* Ponto na linha do tempo */}
                <button
                  onClick={() => setSelectedEvent(event)}
                  className="absolute left-0 w-16 h-16 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                  style={{ backgroundColor: "var(--primary)" }}
                >
                  <Briefcase className="w-8 h-8 text-white" />
                </button>
                
                {/* Card do evento */}
                <button
                  onClick={() => setSelectedEvent(event)}
                  className="w-full text-left p-6 rounded-xl transition-all hover:scale-105"
                  style={{ backgroundColor: "var(--card)" }}
                >
                  <div className="mb-2" style={{ color: "var(--primary)", fontWeight: "600" }}>
                    {event.year}
                  </div>
                  <h3 className="mb-1" style={{ fontSize: "1.5rem", fontWeight: "600", color: "var(--card-foreground)" }}>
                    {event.title}
                  </h3>
                  <p className="mb-2" style={{ color: "var(--primary)" }}>
                    {event.company}
                  </p>
                  <p style={{ color: "var(--muted-foreground)" }}>
                    {event.description}
                  </p>
                </button>
              </div>
            ))}
          </div>
        </div>
        
        {/* Seção de Tecnologias */}
        <TechnologiesCarousel />
        
        {/* Dialog para detalhes */}
        <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                <div className="mb-2" style={{ color: "var(--primary)" }}>
                  {selectedEvent?.year}
                </div>
                {selectedEvent?.title}
              </DialogTitle>
              <DialogDescription>
                <span style={{ color: "var(--primary)", fontWeight: "600" }}>
                  {selectedEvent?.company}
                </span>
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4" style={{ color: "var(--foreground)" }}>
              {selectedEvent?.details}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}