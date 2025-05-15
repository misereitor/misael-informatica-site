import React from "react";
import Logo from "./LogoWhite";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-gray-300 mb-6">
              Soluções completas em informática, garantindo a segurança e o bom
              funcionamento dos seus equipamentos.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/misael.informatica"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
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

          <div>
            <h4 className="text-lg font-montserrat font-semibold mb-6">
              Serviços
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Suporte Técnico
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Manutenção
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Redes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Servidores
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Segurança
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Cloud Computing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-montserrat font-semibold mb-6">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#início"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#serviços"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#portfólio"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Portfólio
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-montserrat font-semibold mb-6">
              Contato
            </h4>
            <ul className="space-y-3">
              {/* <li className="flex items-start">
                <span className="mr-3 text-gray-400">📍</span>
                <span className="text-gray-300">
                  Av. Principal, 1234, Centro
                  <br />
                  Feira de Santana, BA
                </span>
              </li> */}
              <li className="flex items-center">
                <span className="mr-3 text-gray-400">📱</span>
                <a
                  href="tel:+557598309-4954"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  (75) 9 8309-4954
                </a>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-gray-400">📧</span>
                <a
                  href="mailto:contato@misaelinformatica.com.br"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  contato@misaelinformatica.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400">
            © {currentYear} Mísael Informática. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
