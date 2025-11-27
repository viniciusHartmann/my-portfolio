import { useState } from "react";
import { Briefcase, Calendar, X } from "lucide-react";
import { TechnologiesCarousel } from "./TechnologiesCarousel";

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
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-12 sm:mb-16 px-2">
          Minha <span className="text-[#34a1eb]">Carreira</span>
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div
            className={`absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 w-0.5 h-full ${
              isDark ? "bg-gray-800" : "bg-gray-300"
            }`}
          ></div>

          {/* Events */}
          <div className="space-y-12">
            {careerEvents.map((event, index) => (
              <div
                key={index}
                className={`relative flex flex-col sm:flex-row ${
                  index % 2 === 0 ? "sm:flex-row-reverse" : ""
                } items-center`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 w-4 h-4 bg-[#34a1eb] rounded-full border-4 border-black z-10"></div>

                {/* Content */}
                <div
                  className={`w-full sm:w-5/12 ml-8 sm:ml-0 ${
                    index % 2 === 0 ? "sm:text-right sm:pr-12" : "sm:pl-12"
                  }`}
                >
                  <button
                    onClick={() => setSelectedEvent(event)}
                    className={`w-full p-6 rounded-xl transition-all duration-300 hover:scale-105 text-left ${
                      index % 2 === 0 ? "sm:text-right" : ""
                    } ${
                      isDark
                        ? "bg-gray-900 border border-gray-800 hover:border-[#34a1eb]"
                        : "bg-white border border-gray-200 hover:border-[#34a1eb]"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2 justify-start sm:justify-start">
                      {index % 2 !== 0 && <Calendar className="w-4 h-4 text-[#34a1eb]" />}
                      <span className="text-sm text-[#34a1eb]">{event.year}</span>
                      {index % 2 === 0 && <Calendar className="w-4 h-4 text-[#34a1eb] sm:order-first" />}
                    </div>
                    <h3 className="text-xl mb-1">{event.title}</h3>
                    <div className="flex items-center gap-2 mb-3 justify-start sm:justify-start">
                      {index % 2 !== 0 && <Briefcase className="w-4 h-4 text-gray-400" />}
                      <p
                        className={`text-sm ${
                          isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {event.company}
                      </p>
                      {index % 2 === 0 && <Briefcase className="w-4 h-4 text-gray-400 sm:order-first" />}
                    </div>
                    <p
                      className={`${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {event.description}
                    </p>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Carousel */}
        <div className="mt-20">
          <TechnologiesCarousel isDark={isDark} />
        </div>
      </div>

      {/* Modal */}
      {selectedEvent && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className={`max-w-2xl w-full rounded-2xl p-8 ${
              isDark ? "bg-gray-900" : "bg-white"
            } max-h-[90vh] overflow-y-auto`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-5 h-5 text-[#34a1eb]" />
                  <span className="text-sm text-[#34a1eb]">{selectedEvent.year}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl mb-2">{selectedEvent.title}</h3>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-gray-400" />
                  <p
                    className={`text-lg ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {selectedEvent.company}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedEvent(null)}
                className={`p-2 rounded-lg transition-colors ${
                  isDark
                    ? "hover:bg-gray-800"
                    : "hover:bg-gray-100"
                }`}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <p
              className={`mb-6 text-lg ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {selectedEvent.description}
            </p>

            <div className="mb-6">
              <h4 className="text-xl mb-4">Principais Atividades:</h4>
              <ul className="space-y-2">
                {selectedEvent.details.map((detail, index) => (
                  <li
                    key={index}
                    className={`flex items-start gap-3 ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    <span className="text-[#34a1eb] mt-1">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl mb-4">Tecnologias Utilizadas:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedEvent.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 rounded-lg ${
                      isDark
                        ? "bg-gray-800 text-gray-300"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}