"use client";

import { Button, Typography } from "antd";
import { TypewriterEffect } from "./TypewriterEffect";

const { Title, Paragraph, Text } = Typography;

interface HeroSectionProps {
  isDark: boolean;
}

export function HeroSection({ isDark }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className={`min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 ${
        isDark ? "bg-black" : "bg-white"
      }`}
    >
      <div className="container mx-auto text-center max-w-4xl">
        {/* Subtítulo */}
        <div className="mb-4">
          <Text
            className={`text-sm sm:text-base ${
            isDark ? "label-dark" : "label-light"
          }`}  
          >
            Olá, eu sou
          </Text>
        </div>

        {/* Título principal */}
        <Title
          level={1}
          className="!text-3xl sm:!text-4xl md:!text-5xl lg:!text-6xl xl:!text-7xl !mb-6 px-2 !text-inherit"
        >
          <TypewriterEffect text="Vinícius Hartmann" isDark={isDark} />
        </Title>

        {/* Subtítulo azul */}
        <Title
          level={3}
          className="!text-lg sm:!text-xl md:!text-2xl lg:!text-3xl !text-[#34a1eb] !mb-6 sm:!mb-8 px-2"
        >
          Desenvolvedor Full Stack
        </Title>

        {/* Parágrafo */}
        <Paragraph
          className={`paragraph max-w-2xl mx-auto text-sm sm:text-base md:text-lg mb-8 sm:mb-12 leading-relaxed px-4 ${
            isDark ? "label-dark" : "label-light"
          }`}
        >
          Especializado em criar soluções inovadoras e experiências digitais
          excepcionais
        </Paragraph>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
          <Button
            type="primary"
            size="large"
            className="w-full sm:w-auto !px-8 sm:!px-10 !py-3 sm:!py-4 !bg-[#34a1eb] hover:!bg-[#2a8acc]"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Entre em Contato
          </Button>

          <Button
            size="large"
            className={`w-full sm:w-auto !px-8 sm:!px-10 !py-3 sm:!py-4 !border-gray-700 hover:!border-[#34a1eb] !text-gray-700`}
            onClick={() =>
              document.getElementById("career")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Ver Carreira
          </Button>
        </div>
      </div>
    </section>
  );
}
