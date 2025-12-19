'use client';
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
      year: "2020 - 2021",
      title: "Técnico em Desenvolvimento de sistemas",
      company: "SENAI",
      description: "Início da carreira profissional",
      details: [
        "Aprendizado de tecnologias",
        "Introdução ao Desenvolvimento de aplicações desktop e web",
        "Projetos",
      ],
      technologies: ["PHP", "BootStrap", "FireBird", "Git"],
    },
    {
      year: "2021 - Presente",
      title: "Full Stack Developer",
      company: "LOGAE",
      description: "Mantendo e desenvolvendo novas funcionalidades dentro do produto do E-Torre",
      details: [
        "Arquitetura e desenvolvimento de aplicações escaláveis",
        "Criação de telas e ajustes urgentes",
        "Implementação de melhores práticas de código",
        "Integração de sistemas complexos",
      ],
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "SQL Server", "Delphi", "C#"],
    }
  ];

  return (
    <section
      id="career"
      className={`!py-20 sm:py-32 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-gray-950" : "bg-gray-50"
        }`}
    >
      <div className="container !mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl !text-center !mb-4 sm:mb-6 px-2">
          Minha <span className="text-[#34a1eb]">Carreira</span>
        </h2>

        {/* ===== TIMELINE ANT DESIGN ===== */}
        <Timeline
          mode="alternate"
          items={careerEvents.map((event) => ({
            color: "#34a1eb",
            icon: (
              <div className="w-4 h-4 bg-[#34a1eb] rounded-full border-4 border-black" />
            ),
            content: (
              <Card
                hoverable
                onClick={() => setSelectedEvent(event)}
                className={`!cursor-pointer transition-all ${isDark ? "label-dark" : "label-light"}`}
              >
                <div className="!flex items-center !gap-2 !mb-2">
                  <Calendar className="w-4 h-4 text-[#34a1eb]" />
                  <span className="text-sm text-[#34a1eb]">{event.year}</span>
                </div>

                <Title level={4} className={`!mb-1 ${isDark ? "label-dark" : "label-light"}`} >
                  {event.title}
                </Title>

                <div className="flex !items-center !gap-2 !mb-3">
                  <Briefcase className="w-4 h-4 text-gray-400" />
                  <span
                    className={`text-sm ${isDark ? "label-dark" : "label-light"}`}
                  >
                    {event.company}
                  </span>
                </div>

                <Paragraph
                  className={`${isDark ? "label-dark" : "label-light"}`}
                >
                  {event.description}
                </Paragraph>
              </Card>
            ),
          }))}
        />

        {/* Tecnologias */}
        <div className="!mt-20">
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
        className={`${isDark ? "[&_.ant-modal-content]:!bg-gray-900 [&_.ant-modal-header]:!bg-gray-900" : ""
          }`}
        closeIcon={
          <X className={`w-5 h-5 ${isDark ? "text-white" : "text-black"}`} />
        }
      >
        {selectedEvent && (
          <div>
            <div className="flex !items-center !gap-2 !mb-2">
              <Calendar className="w-5 h-5 text-[#34a1eb]" />
              <span className="text-sm !text-[#34a1eb]">
                {selectedEvent.year}
              </span>
            </div>

            <Title level={3}>{selectedEvent.title}</Title>

            <div className="flex !items-center !gap-2 !mb-4">
              <Briefcase className="w-5 h-5 text-gray-400" />
              <span
                className={`text-lg ${isDark ? "text-gray-400" : "text-gray-600"
                  }`}
              >
                {selectedEvent.company}
              </span>
            </div>

            <Paragraph
              className={`!mb-6 text-lg ${isDark ? "label-dark" : "label-light"}`}
            >
              {selectedEvent.description}
            </Paragraph>

            <Title level={4} className="!mb-3">
              Principais Atividades:
            </Title>
            <ul className="space-y-1 !mb-6">
              {selectedEvent.details.map((detail, index) => (
                <li
                  key={index}
                  className={`flex !gap-3 ${isDark ? "label-dark" : "label-light"}`}
                >
                  <span className="text-[#34a1eb] mt-1">•</span> {detail}
                </li>
              ))}
            </ul>

            <Title level={4} className="!mb-3">
              Tecnologias Utilizadas:
            </Title>
            <div className="flex !flex-wrap !gap-2">
              {selectedEvent.technologies.map((tech, index) => (
                <Tag
                  key={index}
                  className={`px-3 py-1 text-base ${isDark
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
