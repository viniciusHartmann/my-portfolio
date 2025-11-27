import { Mail, Linkedin, Github, Send } from "lucide-react";
import { Form, Input, Button, Card, List } from "antd";

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
          {/* Formulário com Ant Design */}
          <Card
            bordered={false}
            className={`${isDark ? "bg-gray-900" : "bg-white"}`}
            style={{ boxShadow: isDark ? "0 0 0 1px #1f2937" : "0 0 0 1px #e5e7eb" }}
          >
            <Form layout="vertical">
              <Form.Item label="Nome" required>
                <Input
                  placeholder="Seu nome"
                  className={`${isDark ? "!bg-gray-800 !text-white" : ""}`}
                />
              </Form.Item>

              <Form.Item label="Email" required>
                <Input
                  type="email"
                  placeholder="seu@email.com"
                  className={`${isDark ? "!bg-gray-800 !text-white" : ""}`}
                />
              </Form.Item>

              <Form.Item label="Mensagem" required>
                <Input.TextArea
                  rows={5}
                  placeholder="Sua mensagem..."
                  className={`${isDark ? "!bg-gray-800 !text-white" : ""}`}
                />
              </Form.Item>

              <Button
                type="primary"
                block
                icon={<Send className="w-5 h-5" />}
                className="!bg-[#34a1eb] hover:!bg-[#2a8acc]"
              >
                Enviar Mensagem
              </Button>
            </Form>
          </Card>

          {/* Informações de Contato */}
          <div className="flex flex-col gap-6">
            <Card
              title="Informações de Contato"
              className={`${isDark ? "bg-gray-900" : "bg-gray-50"}`}
              style={{
                borderColor: isDark ? "#1f2937" : "#e5e7eb",
                color: isDark ? "white" : "black",
              }}
            >
              <List
                itemLayout="horizontal"
                dataSource={socialLinks}
                renderItem={(link) => (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-start gap-4 p-4 rounded-lg transition-all hover:scale-105 ${
                      isDark ? "bg-gray-800" : "bg-white"
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
                )}
              />
            </Card>

            {/* Frase Inspiradora */}
            <Card
              className={`text-center ${
                isDark
                  ? "bg-gradient-to-br from-[#34a1eb]/20 to-transparent border-[#34a1eb]/30"
                  : "bg-gradient-to-br from-[#34a1eb]/10 to-transparent border-[#34a1eb]/20"
              }`}
            >
              <p className={`${isDark ? "text-gray-300" : "text-gray-700"}`}>
                "Transformando ideias em realidade através do código"
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
