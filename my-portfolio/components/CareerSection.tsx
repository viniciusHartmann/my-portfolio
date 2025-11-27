import { useState } from "react";
import { Briefcase, Calendar, X } from "lucide-react";
import { Timeline, Card, Typography, Modal, Tag } from "antd";
import { TechnologiesCarousel } from "./TechnologiesCarousel";

const { Title, Paragraph } = Typography;

interface CareerSectionProps {
  isDark: boolean;
}

interface CareerEvent {
  year: string;
  title: string;
  company: string;
  description: string;
  details: string[];
  technologies: string[];
}

export function CareerSection({ isDark }: CareerSectionProps) {
  const [selectedEvent, setSelectedEvent] = useState<CareerEvent | null>(null);

  const careerEvents: CareerEvent[] = [
    {
      year: "2023 - Presente",
      title: "Senior Full Stack Developer",
      company: "Tech Company",
      description: "Liderando projetos de desenvolvimento web e desktop",
      details: [
        "Arquitetura e desenvolvimento de aplicações escaláveis",
        "Mentoria de desenvolvedores júnior",
        "Implementação de melhores práticas de código",
        "Integração de sistemas complexos",
      ],
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    },
    {
      year: "2020 - 2023",
      title: "Full Stack Developer",
      company: "Software House",
      description: "Desenvolvimento de sistemas empresariais",
      details: [
        "Desenvolvimento de aplicações desktop com Delphi",
        "Criação de APIs RESTful",
        "Implementação de interfaces modernas com React",
        "Otimização de performance de aplicações",
      ],
      technologies: ["Delphi", "React", "DevExpress", "SQL Server"],
    },
    {
      year: "2017 - 2020",
      title: "Desenvolvedor Pleno",
      company: "StartUp Tech",
      description: "Desenvolvimento de soluções inovadoras",
      details: [
        "Desenvolvimento de novos recursos",
        "Manutenção de sistemas legados",
        "Colaboração com equipes multidisciplinares",
        "Participação em code reviews",
      ],
      technologies: ["JavaScript", "PHP", "MySQL", "jQuery"],
    },
    {
      year: "2013 - 2017",
      title: "Desenvolvedor Júnior",
      company: "Software Corp",
      description: "Início da carreira profissional",
      details: [
        "Aprendizado de tecnologias enterprise",
        "Desenvolvimento de módulos específicos",
        "Suporte a sistemas em produção",
        "Documentação técnica",
      ],
      technologies: ["Delphi", "FireDAC", "Oracle", "Git"],
    },
  ];

  return (
    <section
      id="career"
      className={`py-20 sm:py-32 px-4 sm:px-6 lg:px-8 ${
        isDark ? "bg-gray-950" : "bg-gray-50"
      }`}
    >
      <div className="container mx-auto max-w-6xl">
        <Title
          level={2}
          className="text-center !text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl mb-12 sm:mb-16 px-2"
        >
          Minha <span className="text-[#34a1eb]">Carreira</span>
        </Title>

        {/* ===== TIMELINE ANT DESIGN ===== */}
        <Timeline
          mode="alternate"
          items={careerEvents.map((event) => ({
            color: "#34a1eb",
            dot: (
              <div className="w-4 h-4 bg-[#34a1eb] rounded-full border-4 border-black" />
            ),
            children: (
              <Card
                hoverable
                onClick={() => setSelectedEvent(event)}
                className={`cursor-pointer transition-all ${
                  isDark
                    ? "!bg-gray-900 !border-gray-800 hover:!border-[#34a1eb]"
                    : "!bg-white !border-gray-200 hover:!border-[#34a1eb]"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-[#34a1eb]" />
                  <span className="text-sm text-[#34a1eb]">{event.year}</span>
                </div>

                <Title level={4} className="!mb-1">
                  {event.title}
                </Title>

                <div className="flex items-center gap-2 mb-3">
                  <Briefcase className="w-4 h-4 text-gray-400" />
                  <span
                    className={`text-sm ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {event.company}
                  </span>
                </div>

                <Paragraph
                  className={`${isDark ? "text-gray-300" : "text-gray-700"}`}
                >
                  {event.description}
                </Paragraph>
              </Card>
            ),
          }))}
        />

        {/* Tecnologias */}
        <div className="mt-20">
          <TechnologiesCarousel isDark={isDark} />
        </div>
      </div>

      {/* ===== MODAL ANT DESIGN ===== */}
      <Modal
        open={!!selectedEvent}
        onCancel={() => setSelectedEvent(null)}
        footer={null}
        centered
        width={700}
        className={`${
          isDark ? "[&_.ant-modal-content]:!bg-gray-900 [&_.ant-modal-header]:!bg-gray-900" : ""
        }`}
        closeIcon={
          <X className={`w-5 h-5 ${isDark ? "text-white" : "text-black"}`} />
        }
      >
        {selectedEvent && (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-5 h-5 text-[#34a1eb]" />
              <span className="text-sm text-[#34a1eb]">
                {selectedEvent.year}
              </span>
            </div>

            <Title level={3}>{selectedEvent.title}</Title>

            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="w-5 h-5 text-gray-400" />
              <span
                className={`text-lg ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {selectedEvent.company}
              </span>
            </div>

            <Paragraph
              className={`mb-6 text-lg ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {selectedEvent.description}
            </Paragraph>

            <Title level={4} className="!mb-3">
              Principais Atividades:
            </Title>
            <ul className="space-y-1 mb-6">
              {selectedEvent.details.map((detail, index) => (
                <li
                  key={index}
                  className={`flex gap-3 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  <span className="text-[#34a1eb] mt-1">•</span> {detail}
                </li>
              ))}
            </ul>

            <Title level={4} className="!mb-3">
              Tecnologias Utilizadas:
            </Title>
            <div className="flex flex-wrap gap-2">
              {selectedEvent.technologies.map((tech, index) => (
                <Tag
                  key={index}
                  className={`px-3 py-1 text-base ${
                    isDark
                      ? "!bg-gray-800 !text-gray-300"
                      : "!bg-gray-100 !text-gray-700"
                  }`}
                >
                  {tech}
                </Tag>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
