import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Phone, Mail, Clock, Send } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formRef, formInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [infoRef, infoInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const text = `
    Nome do cliente: ${formState.name}
    Email do cliente: ${formState.email}
    Telefone do cliente: ${formState.phone}
    Mensagem do cliente: ${formState.message}
  `;
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ subject: formState.subject, text }),
      });

      const result = await res.json();
      if (result.ok) {
        setFormSubmitted(true);
      } else {
        console.warn(result.error);
        alert(result.error);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-primary-700 mb-4">
            Entre em Contato
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos à disposição para ajudar a sua empresa a alcançar seus
            objetivos de TI. Entre em contato conosco para um atendimento
            personalizado.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: -30 }}
            animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            {formSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <Send className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-montserrat font-bold text-primary-700 mb-4">
                  Mensagem Enviada!
                </h3>
                <p className="text-gray-600 mb-8 max-w-md">
                  Obrigado por entrar em contato conosco. Nossa equipe
                  responderá sua mensagem o mais breve possível.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-3 bg-primary-700 text-white rounded-full font-medium hover:bg-primary-600 transition-all duration-300"
                >
                  Enviar Nova Mensagem
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-montserrat font-semibold text-primary-700 mb-6">
                  Envie uma Mensagem
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Nome Completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Telefone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                        placeholder="(XX) X XXXX-XXXX"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Assunto
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                      >
                        <option value="">Selecione um assunto</option>
                        <option value="Suporte Técnico">Suporte Técnico</option>
                        <option value="Consultoria">Consultoria</option>
                        <option value="Infraestrutura">Infraestrutura</option>
                        <option value="Segurança">Segurança</option>
                        <option value="Outro">Outro</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                      placeholder="Como podemos ajudar?"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="disabled:bg-primary-300 w-full px-6 py-3 bg-primary-700 text-white rounded-full font-medium hover:bg-primary-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              </>
            )}
          </motion.div>

          <motion.div
            ref={infoRef}
            initial={{ opacity: 0, x: 30 }}
            animate={infoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-primary-700 to-primary-800 rounded-2xl shadow-xl p-8 text-white mb-8">
              <h3 className="text-2xl font-montserrat font-semibold mb-6">
                Informações de Contato
              </h3>
              <ul className="space-y-6">
                {/* <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-medium mb-1">
                      Endereço
                    </h4>
                    <p className="text-white/90">Av. Principal, 1234, Centro</p>
                    <p className="text-white/90">Feira de Santana, BA</p>
                  </div>
                </li> */}
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-medium mb-1">
                      Telefone
                    </h4>
                    <a
                      href="tel:+557598309-4954"
                      className="text-white/90 hover:text-white transition-colors"
                    >
                      (75) 9 8309-4954
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-medium mb-1">Email</h4>
                    <a
                      href="mailto:contato@misaelinformatica.com.br"
                      className="text-white/90 hover:text-white transition-colors"
                    >
                      contato@misaelinformatica.com.br
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-medium mb-1">
                      Horário de Atendimento
                    </h4>
                    <p className="text-white/90">
                      Segunda a Sexta: 08:00 - 18:00
                    </p>
                    <p className="text-white/90">Sábado: 08:00 - 12:00</p>
                  </div>
                </li>
              </ul>

              <div className="mt-10">
                <h4 className="font-montserrat font-medium mb-4">Siga-nos</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/misael.informatica"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                    aria-label="Instagram"
                  >
                    <svg
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* <div className="h-96 rounded-2xl overflow-hidden shadow-xl">
              <iframe
                title="Mapa da localização"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62363.11980826105!2d-38.99661217832036!3d-12.267563199999991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7143db6a7e24a49%3A0x3d6cd813cb35096f!2sFeira%20de%20Santana%2C%20BA!5e0!3m2!1spt-BR!2sbr!4v1651260143276!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
