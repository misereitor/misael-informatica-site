import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle, Users, Clock, Award } from "lucide-react";

const stats = [
  { label: "Clientes Satisfeitos", value: "200+", icon: Users },
  { label: "Anos de Experiência", value: "10+", icon: Clock },
  { label: "Projetos Completados", value: "500+", icon: CheckCircle },
  { label: "Certificações", value: "15+", icon: Award },
];

export default function About() {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="sobre" className="py-20">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              ref={titleRef}
              initial={{ opacity: 0, x: -30 }}
              animate={
                titleInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
              }
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-primary-700 mb-6">
                Quem Somos
              </h2>
            </motion.div>

            <motion.div
              ref={contentRef}
              initial={{ opacity: 0, x: -30 }}
              animate={
                contentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
              }
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-gray-600 mb-6">
                A Mísael Informática é uma empresa especializada em soluções de
                tecnologia, oferecendo serviços de suporte técnico, manutenção,
                redes e consultoria de TI para empresas de todos os portes.
              </p>
              <p className="text-gray-600 mb-6">
                Nossa missão é garantir a segurança e o bom funcionamento dos
                seus equipamentos, proporcionando tranquilidade e eficiência
                para o seu negócio.
              </p>
              <p className="text-gray-600 mb-8">
                Com uma equipe altamente qualificada e comprometida, estamos
                preparados para enfrentar os desafios tecnológicos da sua
                empresa, oferecendo soluções personalizadas e de alta qualidade.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#contato"
                  className="px-6 py-3 bg-primary-700 text-white rounded-full font-medium hover:bg-primary-600 transition-all duration-300 transform hover:scale-105"
                >
                  Entre em Contato
                </a>
                <a
                  href="#portfólio"
                  className="px-6 py-3 bg-white text-primary-700 border border-primary-700 rounded-full font-medium hover:bg-primary-50 transition-all duration-300 transform hover:scale-105"
                >
                  Ver Portfólio
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, x: 30 }}
            animate={statsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                    className="flex flex-col items-center text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100"
                  >
                    <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-primary-700" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-primary-700 mb-2">
                      {stat.value}
                    </h3>
                    <p className="text-gray-600">{stat.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
