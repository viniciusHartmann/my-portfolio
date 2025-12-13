import { useEffect, useState } from "react";

interface TechnologiesCarouselProps {
  isDark: boolean;
}

export function TechnologiesCarousel({ isDark }: TechnologiesCarouselProps) {
  const [position, setPosition] = useState(0);

  const technologies = [
    { name: "React", color: "#61DAFB" },
    { name: "TypeScript", color: "#3178C6" },
    { name: "JavaScript", color: "#F7DF1E" },
    { name: "Delphi", color: "#EE1F35" },
    { name: "DevExpress", color: "#FF7200" },
    { name: "Node.js", color: "#339933" },
    { name: "PostgreSQL", color: "#4169E1" },
    { name: "SQL Server", color: "#CC2927" },
    { name: "Git", color: "#F05032" },
    { name: "Docker", color: "#2496ED" },
    { name: "AWS", color: "#FF9900" },
    { name: "Tailwind CSS", color: "#06B6D4" },
  ];

  // Duplicate technologies for seamless loop
  const allTechnologies = [...technologies, ...technologies];

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        const newPosition = prev - 1;
        // Reset position when first set has scrolled completely
        if (Math.abs(newPosition) >= technologies.length * 180) {
          return 0;
        }
        return newPosition;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [technologies.length]);

  return (
    <div>
      <h3 className="text-xl sm:text-2xl md:text-3xl text-center !mb-8 sm:mb-10 px-2">
        Tecnologias <span className="text-[#34a1eb]">& Ferramentas</span>
      </h3>
      <div className="relative overflow-hidden">
        {/* Gradient overlays */}
        <div
          className={`absolute left-0 top-0 bottom-0 w-16 sm:w-32 z-10 pointer-events-none ${
            isDark
              ? "bg-gradient-to-r from-gray-950 to-transparent"
              : "bg-gradient-to-r from-gray-50 to-transparent"
          }`}
        ></div>
        <div
          className={`absolute right-0 top-0 bottom-0 w-16 sm:w-32 z-10 pointer-events-none ${
            isDark
              ? "bg-gradient-to-l from-gray-950 to-transparent"
              : "bg-gradient-to-l from-gray-50 to-transparent"
          }`}
        ></div>

        {/* Scrolling container */}
        <div
          className="flex gap-4 sm:gap-6 py-8"
          style={{
            transform: `translateX(${position}px)`,
            willChange: "transform",
          }}
        >
          {allTechnologies.map((tech, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 rounded-xl !flex flex-col !items-center !justify-center !gap-3 sm:!gap-4 transition-all ${
                isDark
                  ? "bg-gray-900 border border-gray-800"
                  : "bg-white border border-gray-200"
              }`}
            >
              <div
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full !flex !items-center !justify-center"
                style={{ backgroundColor: `${tech.color}20` }}
              >
                <div
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded"
                  style={{ backgroundColor: tech.color }}
                ></div>
              </div>
              <span className="text-xs sm:text-sm text-center px-2">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}