import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const services = ["Suporte", "Manutenção", "Redes", "Consultoria de TI"];
  const [randomStyles, setRandomStyles] = useState<
    { style: React.CSSProperties }[]
  >([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [services.length]);

  useEffect(() => {
    const styles = Array.from({ length: 10 }).map(() => ({
      style: {
        width: `${Math.random() * 300 + 50}px`,
        height: `${Math.random() * 300 + 50}px`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        opacity: Math.random() * 0.5,
      },
    }));
    setRandomStyles(styles);
  }, []);

  return (
    <section
      id="início"
      className="min-h-screen pt-28 pb-16 md:pt-40 md:pb-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-50/50 to-white/90"></div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          {randomStyles.map((item, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-primary-500"
              style={item.style}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-primary-700 leading-tight mb-6">
              Soluções inteligentes para seus desafios de <br />
              <span className="relative inline-block">
                <motion.span
                  key={currentServiceIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-secondary-500 inline-block"
                >
                  {services[currentServiceIndex]}
                </motion.span>
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
          >
            Soluções completas em informática, garantindo a segurança e o bom
            funcionamento dos seus equipamentos e sistemas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <a
              href="#contato"
              className="px-8 py-3 bg-primary-700 text-white rounded-full font-medium hover:bg-primary-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Fale Conosco
            </a>
            <a
              href="#serviços"
              className="px-8 py-3 bg-white text-primary-700 border border-primary-700 rounded-full font-medium hover:bg-primary-50 transition-all duration-300 transform hover:scale-105"
            >
              Nossos Serviços
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating Tech Elements */}
      <div className="hidden md:block">
        {[1, 2, 3, 4].map((item) => (
          <motion.div
            key={item}
            className="absolute hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{
              duration: 2,
              delay: item * 0.3,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 1,
            }}
            style={{
              top: `${20 + item * 15}%`,
              left: `${(item % 2 === 0 ? 85 : 10) + item * 2}%`,
            }}
          >
            <div
              className={`w-16 h-16 md:w-24 md:h-24 rounded-full bg-gradient-to-br ${
                item % 2 === 0
                  ? "from-primary-600/20 to-primary-700/30"
                  : "from-secondary-400/20 to-secondary-500/30"
              } flex items-center justify-center animate-float`}
              style={{ animationDelay: `${item * 0.5}s` }}
            >
              <div className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-white/30"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
