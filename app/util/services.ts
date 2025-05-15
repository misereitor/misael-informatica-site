import {
  Cpu,
  Network,
  Headphones,
  CloudCog,
  Wrench,
  Building2,
} from "lucide-react";

export const services = [
  {
    title: "Manutenção de Computadores",
    description:
      "Formatação, remoção de vírus, upgrades, backups e limpeza preventiva para desktops e notebooks.",
    icon: Cpu,
    color: "from-green-500/20 to-green-600/30",
  },
  {
    title: "Montagem de PCs e Gamer",
    description:
      "Montagem personalizada de computadores para uso geral ou alto desempenho, com testes e otimização.",
    icon: Wrench,
    color: "from-orange-500/20 to-orange-600/30",
  },
  {
    title: "Redes e Internet",
    description:
      "Projetos de redes Wi-Fi e cabeadas, expansão de sinal, configuração de roteadores e segurança.",
    icon: Network,
    color: "from-blue-500/20 to-blue-600/30",
  },
  {
    title: "Serviços Corporativos",
    description:
      "Gestão de TI para empresas: servidores, suporte técnico, infraestrutura, backup e sistemas ERP/CRM.",
    icon: Building2,
    color: "from-purple-500/20 to-purple-600/30",
  },
  {
    title: "Cloud e Presença Digital",
    description:
      "Hospedagem, e-mails corporativos, backup na nuvem e manutenção de sites institucionais.",
    icon: CloudCog,
    color: "from-cyan-500/20 to-cyan-600/30",
  },
  {
    title: "Atendimento e Suporte Técnico",
    description:
      "Atendimento remoto ou presencial com foco em agilidade, confiança e personalização.",
    icon: Headphones,
    color: "from-red-500/20 to-red-600/30",
  },
];
