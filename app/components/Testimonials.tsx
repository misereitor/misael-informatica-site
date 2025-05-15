import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Carlos Oliveira",
    role: "Diretor de Tecnologia",
    company: "Empresa de Logística",
    content:
      "A equipe da Mísael Informática foi excepcional na migração de nossa infraestrutura para a nuvem. Profissionais capacitados e atenciosos que entenderam nossas necessidades e entregaram um projeto impecável.",
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: 2,
    name: "Amanda Santos",
    role: "Gerente Administrativa",
    company: "Clínica Médica",
    content:
      "Desde que contratamos a Mísael Informática para cuidar de nossa rede e servidores, não tivemos mais problemas com quedas de sistema ou perda de dados. Um trabalho de excelência que nos trouxe tranquilidade.",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: 3,
    name: "Rafael Mendes",
    role: "Proprietário",
    company: "Escritório de Advocacia",
    content:
      "O suporte técnico é ágil e eficiente. Resolvem qualquer problema em tempo recorde e sempre com muita cordialidade. Recomendo a todos que buscam uma empresa séria e competente na área de TI.",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="py-20">
      <div className="container mx-auto px-6 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-primary-700 mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A satisfação dos nossos clientes é o nosso maior orgulho e motivação
            para continuarmos oferecendo serviços de excelência.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 relative">
                    <Quote className="absolute top-6 left-6 w-10 h-10 text-primary-100" />

                    <div className="flex flex-col md:flex-row items-center gap-6">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={testimonial.image}
                          width={20}
                          height={20}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1 text-center md:text-left">
                        <p className="text-gray-600 italic mb-6 relative z-10">
                          {testimonial.content}
                        </p>

                        <div>
                          <h4 className="text-lg font-montserrat font-semibold text-primary-700">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-500">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-primary-700 w-8" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary-700 hover:bg-primary-50 transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary-700 hover:bg-primary-50 transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
