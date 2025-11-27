import { TypewriterEffect } from "./TypewriterEffect";

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
        <div className="mb-4">
          <span
            className={`text-sm sm:text-base ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Olá, eu sou
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 px-2">
          <TypewriterEffect text="Vinícius Hartmann" isDark={isDark} />
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#34a1eb] mb-6 sm:mb-8 px-2">
          Desenvolvedor Full Stack
        </p>
        <p
          className={`max-w-2xl mx-auto text-sm sm:text-base md:text-lg mb-8 sm:mb-12 leading-relaxed px-4 ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Especializado em criar soluções inovadoras e experiências digitais
          excepcionais
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg bg-[#34a1eb] text-white rounded-lg hover:bg-[#2a8acc] transition-colors"
          >
            Entre em Contato
          </button>
          <button
            onClick={() =>
              document.getElementById("career")?.scrollIntoView({ behavior: "smooth" })
            }
            className={`w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg rounded-lg transition-colors ${
              isDark
                ? "border border-gray-700 hover:border-[#34a1eb]"
                : "border border-gray-300 hover:border-[#34a1eb]"
            }`}
          >
            Ver Carreira
          </button>
        </div>
      </div>
    </section>
  );
}