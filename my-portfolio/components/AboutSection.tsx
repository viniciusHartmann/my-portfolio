"use client";

import { Image as AntImage, Typography, Card, Row, Col } from "antd";
import { Code2, Gamepad2, Music, Plane } from "lucide-react";

const { Title, Paragraph } = Typography;

interface AboutSectionProps {
  isDark: boolean;
}

export function AboutSection({ isDark }: AboutSectionProps) {
  const hobbies = [
    {
      icon: Code2,
      title: "Programação",
      description: "Apaixonado por criar soluções inovadoras",
    },
    {
      icon: Gamepad2,
      title: "Games",
      description: "Entusiasta de jogos e tecnologia",
    },
    {
      icon: Music,
      title: "Música",
      description: "Apreciador de diversos estilos musicais",
    },
    {
      icon: Plane,
      title: "Viagens",
      description: "Explorando novos lugares e culturas",
    },
  ];

  return (
    <section
      id="about"
      className={`py-20 sm:py-32 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black" : "bg-white"
        }`}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Título principal */}
        <Title
          level={2}
          className="text-center !text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl mb-12 sm:mb-16 px-2"
        >
          <span className="text-[#34a1eb]">Sobre Mim</span>
        </Title>

        <Row gutter={[32, 32]} align="middle" className="mb-12 sm:mb-16">
          {/* Foto */}
          <Col xs={24} md={12} className="flex justify-center">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-[#34a1eb] to-transparent opacity-20 rounded-2xl" />

              <AntImage
                src="/images/viniciusHartmann.jpg"
                alt="Vinícius Bernardo Hartmann"
                preview={false}
                className="rounded-2xl !w-full !h-full object-cover border-2 border-[#34a1eb]"
              />
            </div>
          </Col>

          {/* Texto */}
          <Col xs={24} md={12}>
            <Title level={3} className="!text-xl sm:!text-2xl md:!text-3xl mb-4 sm:mb-6">
              <span className="text-[#34a1eb]">Desenvolvedor Full Stack</span>
            </Title>

            <Paragraph
              className={`mb-3 sm:mb-4 text-sm sm:text-base md:text-lg leading-relaxed`}
              style={{ color: isDark ? "#9ca3af" : "#4b5563" }}
            >
              Com mais de 10 anos de experiência em desenvolvimento de software,
              sou especializado em criar soluções robustas e escaláveis usando
              tecnologias modernas.
            </Paragraph>

            <Paragraph
              className={`mb-3 sm:mb-4 text-sm sm:text-base md:text-lg leading-relaxed `}
              style={{ color: isDark ? "#9ca3af" : "#4b5563" }}
            >
              Tenho expertise em desenvolvimento web e desktop, trabalhando com
              frameworks como React, TypeScript, Delphi e muito mais.
            </Paragraph>

            <Paragraph
              className={`text-sm sm:text-base md:text-lg leading-relaxed `}
              style={{ color: isDark ? "#9ca3af" : "#4b5563" }}
            >
              Sempre buscando aprender novas tecnologias e compartilhar
              conhecimento com a comunidade.
            </Paragraph>
          </Col>
        </Row>

        {/* Hobbies */}
        <Title
          level={3}
          className="text-center !text-xl sm:!text-2xl md:!text-3xl mb-8 sm:mb-10 px-2"
        >
          Meus <span className="text-[#34a1eb]">Hobbies</span>
        </Title>

        <Row gutter={[24, 24]}>
          {hobbies.map((hobby, index) => (
            <Col key={index} xs={24} sm={12} lg={6}>
              <Card
                hoverable
                className={`p-4 rounded-xl transition-all duration-300 ${isDark
                    ? "bg-gray-900 border-gray-800 hover:!border-[#34a1eb]"
                    : "bg-gray-50 border-gray-200 hover:!border-[#34a1eb]"
                  }`}
              >
                <div className="mb-4">
                  <hobby.icon className="w-10 h-10 text-[#34a1eb]" />
                </div>

                <Title level={4} className="!text-lg mb-2">
                  {hobby.title}
                </Title>

                <Paragraph
                  className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                >
                  {hobby.description}
                </Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
