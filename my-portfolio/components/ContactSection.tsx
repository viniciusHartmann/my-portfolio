import { Mail, Linkedin, Github, Send } from "lucide-react";

interface ContactSectionProps {
  isDark: boolean;
}

export function ContactSection({ isDark }: ContactSectionProps) {
  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "vinicius@example.com",
      href: "mailto:vinicius@example.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/viniciushartmann",
      href: "https://linkedin.com/in/viniciushartmann",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/viniciushartmann",
      href: "https://github.com/viniciushartmann",
    },
  ];

  return (
    <section
      id="contact"
      className={`py-20 sm:py-32 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black" : "bg-white"}`}
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-4 sm:mb-6 px-2">
          Entre em <span className="text-[#34a1eb]">Contato</span>
        </h2>
        <p
          className={`text-center text-base sm:text-lg mb-8 sm:mb-12 px-4 ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Estou sempre aberto a novos projetos e oportunidades
        </p>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {/* Contact Form */}
          <div>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className={`block mb-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-[#34a1eb] ${
                    isDark
                      ? "bg-gray-900 border-gray-800 text-white"
                      : "bg-white border-gray-300 text-black"
                  }`}
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={`block mb-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-[#34a1eb] ${
                    isDark
                      ? "bg-gray-900 border-gray-800 text-white"
                      : "bg-white border-gray-300 text-black"
                  }`}
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`block mb-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-[#34a1eb] resize-none ${
                    isDark
                      ? "bg-gray-900 border-gray-800 text-white"
                      : "bg-white border-gray-300 text-black"
                  }`}
                  placeholder="Sua mensagem..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#34a1eb] text-white rounded-lg hover:bg-[#2a8acc] transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div
              className={`p-6 rounded-xl mb-6 ${
                isDark
                  ? "bg-gray-900 border border-gray-800"
                  : "bg-gray-50 border border-gray-200"
              }`}
            >
              <h3 className="text-2xl mb-6">Informações de Contato</h3>
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-start gap-4 p-4 rounded-lg transition-all hover:scale-105 ${
                      isDark
                        ? "bg-gray-800 hover:bg-gray-750"
                        : "bg-white hover:bg-gray-50"
                    }`}
                  >
                    <link.icon className="w-6 h-6 text-[#34a1eb] flex-shrink-0 mt-1" />
                    <div className="min-w-0 flex-1">
                      <p className="mb-1">{link.label}</p>
                      <p
                        className={`text-sm break-all ${
                          isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {link.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div
              className={`p-6 rounded-xl ${
                isDark
                  ? "bg-gradient-to-br from-[#34a1eb]/20 to-transparent border border-[#34a1eb]/30"
                  : "bg-gradient-to-br from-[#34a1eb]/10 to-transparent border border-[#34a1eb]/20"
              }`}
            >
              <p
                className={`text-center ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                "Transformando ideias em realidade através do código"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}