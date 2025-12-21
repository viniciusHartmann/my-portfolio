'use client";'
import { Mail, Linkedin, Github } from "lucide-react";
import { Table } from "antd";
import { Card } from "./ui/card-custom";

interface ContactSectionProps {
  isDark: boolean;
}

export function ContactSection({ isDark }: ContactSectionProps) {
  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "vinicius.hartmann31@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=vinicius.hartmann31@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/viniciushartmann",
      href: "https://www.linkedin.com/in/vinicius-hartmann-211571237",
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
      className={`!py-20 sm:py-32 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black" : "bg-white"}`}
    >
      <div className="container !mx-auto max-w-4xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl !text-center !mb-4 sm:mb-6 px-2">
          Entre em <span className="text-[#34a1eb]">Contato</span>
        </h2>

        <p
          className={`!text-center text-base sm:text-lg !mb-8 sm:mb-12 px-4 ${isDark ? "text-gray-400" : "text-gray-600"
            }`}
        >
          Estou sempre aberto a novos projetos e oportunidades
        </p>

        {/* Informações de Contato */}
        <div>
          <Card
            title={
              <span className={isDark ? "text-gray-100" : "text-gray-900"}>
                Informações de Contato
              </span>
            }
            className={`${isDark ? "label-dark" : "label-light"}`}
          >
            <div className="flex justify-center">
              <Table
                className={isDark ? "ant-table-dark" : ""}
                columns={[
                  {
                    key: "icon",
                    width: 50,
                    render: (_, record: typeof socialLinks[0]) => (
                      <record.icon className="w-6 h-6 text-[#34a1eb]" />
                    ),
                  },
                  {
                    title: "Contato",
                    key: "contact",
                    render: (_, record: typeof socialLinks[0]) => (
                      <div className="min-w-0">
                        <p className="font-medium mb-1">{record.label}</p>
                        <a
                          href={record.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-sm break-all hover:underline ${isDark ? "label-dark" : "label-light"}}`}
                        >
                          {record.value}
                        </a>
                      </div>
                    ),
                  },
                ]}
                dataSource={socialLinks.map((link, idx) => ({ ...link, key: idx }))}
                pagination={false}
                bordered={false}
                showHeader={false}
                style={{ width: "100%" }}
              />
            </div>
          </Card>

          <Card
            className={`text-center ${isDark
              ? "bg-gradient-to-br from-[#34a1eb]/20 to-transparent border-[#34a1eb]/30"
              : "bg-gradient-to-br from-[#34a1eb]/10 to-transparent border-[#34a1eb]/20"
              }`}
          >
            <p className={`${isDark ? "label-dark" : "label-light"}`}>
              Transformando ideias em realidade através do código
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
