import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const categories = [
  "Todos",
  "Redes",
  "Infraestrutura",
  "Segurança",
  "Cloud",
  "Montagem",
  "Manutenção",
  "Corporativo",
];

const projects = [
  {
    id: 1,
    title: "Migração para Cloud",
    category: "Cloud",
    image: "/migracao_cloud.webp",
    height: 800,
    width: 534,
    description:
      "Migração completa de infraestrutura para AWS Cloud, reduzindo custos em 40%.",
  },
  {
    id: 2,
    title: "Rede Corporativa",
    category: "Redes",
    image: "/rede_corporativa.jpg",
    height: 800,
    width: 500,
    description:
      "Implementação de rede corporativa com alta disponibilidade para 150 usuários.",
  },
  {
    id: 3,
    title: "Segurança de Dados",
    category: "Segurança",
    image: "/seguranca_dados.webp",
    height: 800,
    width: 534,
    description:
      "Solução de segurança de dados com criptografia e backup para empresa de saúde.",
  },
  {
    id: 4,
    title: "Virtualização de Servidores",
    category: "Infraestrutura",
    image: "/virtualizacao.webp",
    height: 800,
    width: 534,
    description:
      "Virtualização de servidores para otimização de recursos e redução de custos.",
  },
  {
    id: 5,
    title: "VPN Corporativa",
    category: "Segurança",
    image: "/vpn_corporativa.jpeg",
    height: 800,
    width: 533,
    description: "Implementação de VPN para acesso seguro de equipes remotas.",
  },
  {
    id: 6,
    title: "Modernização de Datacenter",
    category: "Infraestrutura",
    image: "/datacenter.webp",
    height: 800,
    width: 280,
    description:
      "Atualização completa de datacenter com novas tecnologias e redundância.",
  },
  {
    id: 7,
    title: "Montagem de PC Gamer",
    category: "Montagem",
    image: "/pcgamer.png",
    height: 1200,
    width: 747,
    description:
      "Montagem de PC gamer com alto desempenho para design gráfico e jogos.",
  },
  {
    id: 8,
    title: "Formatação e Upgrade",
    category: "Manutenção",
    image: "/formatacao.jpg",
    height: 800,
    width: 533,
    description:
      "Formatação com backup e upgrade para SSD em computador corporativo.",
  },
  {
    id: 9,
    title: "Atendimento Técnico Corporativo",
    category: "Corporativo",
    image: "/supoerte_corporativo.jpg",
    height: 853,
    width: 480,
    description:
      "Suporte técnico presencial e remoto para escritório com 20 estações.",
  },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects =
    selectedCategory === "Todos"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="portfólio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-primary-700 mb-4">
            Nosso Portfólio
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos nossos principais projetos e como ajudamos nossos
            clientes a alcançar seus objetivos de TI.
          </p>
        </motion.div>

        <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-sm md:text-base transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary-700 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={project.width}
                  height={project.height}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <span className="inline-block px-3 py-1 bg-primary-500 text-white text-xs rounded-full mb-2">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-montserrat font-semibold text-primary-700 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
