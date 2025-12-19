"use client";

import { Image as AntImage, Typography, Card, Row, Col } from "antd";
import { Code2, Gamepad2, Music, Plane, Volleyball } from "lucide-react";

const { Title, Paragraph } = Typography;

interface AboutSectionProps {
  isDark: boolean;
}

export function AboutSection({ isDark }: AboutSectionProps) {
  const hobbies = [
    {
      icon: Gamepad2,
      title: "Games",
      description: "Acompanho alguns jogos online como CS2",
    },
    {
      icon: Volleyball,
      title: "Esportes",
      description: "Gosto de praticar e conhecer uma grande quantidade de esportes",
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
      className={`!py-20 sm:py-32 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black" : "bg-white"
        }`}
    >
      <div className="container !mx-auto max-w-6xl">
        {/* Título principal */}
        <h2 className="!text-2xl sm:text-3xl md:!text-4xl lg:!text-5xl !text-center !mb-4 sm:!mb-6 px-2">
          Sobre <span className="text-[#34a1eb]">Mim</span>
        </h2>

        <Row gutter={[32, 32]} align="middle" className="!mb-16 sm:mb-24">
          {/* Foto */}
          <Col xs={24} md={12} className="flex justify-center">
            <div className="relative 
                  w-40 h-40 
                  sm:w-56 sm:h-56 
                  md:w-64 md:h-64 
                  lg:w-72 lg:h-72 
                  overflow-hidden">
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
            <Title level={3} className="!text-xl sm:!text-2xl md:!text-3xl !mb-4 sm:mb-6">
              <span className="text-[#34a1eb]">Desenvolvedor Full Stack</span>
            </Title>

            <Paragraph
              className={`mb-3 sm:mb-4 text-sm sm:text-base md:text-lg leading-relaxed ${isDark ? "label-dark" : "label-light"
                }`}

            >
              Iniciei minha jornada na programação aos 17 anos e, desde então, transformei a curiosidade 
              técnica em uma carreira sólida de 4 anos movida por paixão e constante aprendizado.
              Atualmente, faço parte do time da LOGAE, uma organização que respira tecnologia e que foi reconhecida em 2025 
              como uma das Top 10 empresas mais inovadoras do mercado. Atuar em um ambiente de elite me permite estar na 
              linha de frente do que há de novo no setor.
              Sou fascinado por desafios que tiram o conhecimento da zona de conforto. 
              Acredito na filosofia do learning by doing (aprender na prática), por isso mantenho minha mente ativa 
              através de projetos contínuos e do estudo das tendências que moldam o futuro da tecnologia. 
              Se o desafio exige uma ideia nova e uma execução inovadora, é onde eu quero estar.
            </Paragraph>

            <Paragraph
              className={`mb-3 sm:mb-4 text-sm sm:text-base md:text-lg leading-relaxed ${isDark ? "label-dark" : "label-light"
                }`}

            >
              Tenho expertise em desenvolvimento web e desktop, trabalhando com
              frameworks como React, TypeScript, Delphi e muito mais.
            </Paragraph>

            <Paragraph
              className={`text-sm sm:text-base md:text-lg leading-relaxed ${isDark ? "label-dark" : "label-light"
                } `}

            >
              Sempre buscando aprender novas tecnologias e compartilhar
              conhecimento com a comunidade.
            </Paragraph>
          </Col>
        </Row>

        {/* Hobbies */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center !mb-10 sm:mb-14 px-2">
          Meus <span className="text-[#34a1eb]">Hobbies</span>
        </h2>

        <Row gutter={[24, 24]}>
          {hobbies.map((hobby, index) => (
            <Col key={index} xs={24} sm={12} lg={6}>
              <Card
                hoverable
                className={`p-4 rounded-xl transition-all duration-300 ${isDark ? "label-dark" : "label-light"
                  }`}
              >
                <div className="mb-4">
                  <hobby.icon className="w-10 h-10 text-[#34a1eb]" />
                </div>

                <Title level={4} className="!text-lg mb-2">
                  {hobby.title}
                </Title>

                <Paragraph
                  className={`text-sm ${isDark ? "label-dark" : "label-light"}`}
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
