import { useState, useEffect } from "react";

interface TypewriterEffectProps {
  text: string;
  speed?: number;
  isDark: boolean;
}

export function TypewriterEffect({ text, speed = 100, isDark }: TypewriterEffectProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className={isDark ? "text-white" : "text-black"}>
      {displayedText}
      {currentIndex < text.length && (
        <span
          style={{
            color: "#34a1eb",
            animation: "blink 1s infinite",
          }}
        >
          |
        </span>
      )}
      <style>{`
        @keyframes blink {
          0%, 49% {
            opacity: 1;
          }
          50%, 100% {
            opacity: 0;
          }
        }
      `}</style>
    </span>
  );
}
