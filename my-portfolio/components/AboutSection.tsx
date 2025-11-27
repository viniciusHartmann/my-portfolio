import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Code2, Gamepad2, Music, Plane } from "lucide-react";

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
      className={`py-20 sm:py-32 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black" : "bg-white"}`}
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-12 sm:mb-16 px-2">
          Sobre <span className="text-[#34a1eb]">Mim</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
          {/* Photo */}
          <div className="flex justify-center order-1 md:order-none">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-[#34a1eb] to-transparent opacity-20 rounded-2xl"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                alt="Vinícius Hartmann"
                className="w-full h-full object-cover rounded-2xl border-2 border-[#34a1eb]"
              />
            </div>
          </div>

          {/* Text */}
          <div className="order-2 md:order-none">
            <h3 className="text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6">
              Desenvolvedor <span className="text-[#34a1eb]">Full Stack</span>
            </h3>
            <p
              className={`mb-3 sm:mb-4 text-sm sm:text-base md:text-lg leading-relaxed ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Com mais de 10 anos de experiência em desenvolvimento de software,
              sou especializado em criar soluções robustas e escaláveis usando
              tecnologias modernas.
            </p>
            <p
              className={`mb-3 sm:mb-4 text-sm sm:text-base md:text-lg leading-relaxed ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Tenho expertise em desenvolvimento web e desktop, trabalhando com
              frameworks como React, TypeScript, Delphi e muito mais.
            </p>
            <p
              className={`text-sm sm:text-base md:text-lg leading-relaxed ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Sempre buscando aprender novas tecnologias e compartilhar
              conhecimento com a comunidade.
            </p>
          </div>
        </div>

        {/* Hobbies */}
        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl text-center mb-8 sm:mb-10 px-2">
            Meus <span className="text-[#34a1eb]">Hobbies</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {hobbies.map((hobby, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                  isDark
                    ? "bg-gray-900 border border-gray-800 hover:border-[#34a1eb]"
                    : "bg-gray-50 border border-gray-200 hover:border-[#34a1eb]"
                }`}
              >
                <div className="mb-4">
                  <hobby.icon className="w-10 h-10 text-[#34a1eb]" />
                </div>
                <h4 className="text-lg mb-2">{hobby.title}</h4>
                <p
                  className={`text-sm ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {hobby.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}