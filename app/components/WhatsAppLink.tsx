import Image from "next/image";

export default function WhatsAppLink() {
  return (
    <div className="fixed bottom-10 right-10">
      <div
        role="button"
        aria-label="Abrir WhatsApp"
        className="transition-transform duration-300 hover:scale-110 hover:drop-shadow-lg cursor-pointer"
      >
        <div className="w-14 h-14 bg-green-600 rounded-full flex justify-center items-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(72,187,120,0.7)]">
          <a
            href="https://wa.me/5575983094954"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fale conosco no WhatsApp"
          >
            <Image
              src="/whatsapp.svg"
              alt="WhatsApp"
              width={30}
              height={30}
              className="w-7 h-7 transition-colors duration-300"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
