import { ImageWithFallback } from "./figma/ImageWithFallback";

const technologies = [
  {
    name: "React",
    image:
      "https://images.unsplash.com/photo-1758582268064-1ad3b2699ce5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFjdCUyMGphdmFzY3JpcHQlMjBsb2dvfGVufDF8fHx8MTc2NDAzMjc1N3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "TypeScript",
    image:
      "https://images.unsplash.com/photo-1672308627194-9a2c28daa17a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0eXBlc2NyaXB0JTIwcHJvZ3JhbW1pbmd8ZW58MXx8fHwxNzY0MDMyNzU4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Node.js",
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub2RlanMlMjBiYWNrZW5kfGVufDF8fHx8MTc2NDAzMjc1OHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Delphi",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/delphi/delphi-original.svg",
  },
  {
    name: "Cloud",
    image:
      "https://images.unsplash.com/photo-1529126894674-8dd7cb884766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMGF3c3xlbnwxfHx8fDE3NjQwMzI3NTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Delphi",
    image:
      "https://images.unsplash.com/photo-1635775017492-1eb935a082a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGUlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NDAzMjc1N3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function TechnologiesCarousel() {
  return (
    <div className="mt-20">
      <h3
        className="mb-8 text-center"
        style={{
          fontSize: "2rem",
          fontWeight: "600",
          color: "var(--foreground)",
        }}
      >
        Tecnologias
      </h3>

      <div className="relative overflow-hidden py-8">
        {/* Gradient overlays */}
        <div
          className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, var(--muted), transparent)",
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, var(--muted), transparent)",
          }}
        />

        {/* Scrolling container */}
        <div className="flex gap-8 animate-scroll">
          {[
            ...technologies,
            ...technologies,
            ...technologies,
          ].map((tech, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-48 h-32 rounded-xl overflow-hidden relative group"
              style={{ backgroundColor: "var(--card)" }}
            >
              <ImageWithFallback
                src={tech.image}
                alt={tech.name}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 group-hover:bg-black/30 transition-colors">
                <span
                  className="text-white"
                  style={{ fontWeight: "600" }}
                >
                  {tech.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}