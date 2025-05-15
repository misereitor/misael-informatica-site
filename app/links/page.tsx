"use client";

import { useEffect, useState } from "react";

type LinkItem = {
  name: string;
  url: string;
  color: string;
};

const LINKS: LinkItem[] = [
  {
    name: "Whatsapp",
    url: "https://wa.me/5575983094954",
    color: "bg-green-500",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/misael.informatica",
    color: "bg-pink-500",
  },
  {
    name: "Site",
    url: "https://misaelinformatica.com.br",
    color: "bg-blue-500",
  },
];

export default function LinksPage() {
  const [visits, setVisits] = useState<number | null>(null);
  const [clicks, setClicks] = useState<Record<string, number>>({});

  useEffect(() => {
    fetch("/api/visits", { method: "POST" })
      .then((res) => res.json())
      .then((data) => setVisits(data.total));
  }, []);

  const handleClick = async (linkName: string) => {
    const res = await fetch("/api/click", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ linkName }),
    });
    const data = await res.json();

    setClicks((prev) => ({ ...prev, [linkName]: data.clicks }));
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 to-white flex flex-col items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-primary-700">
          🌐 Meus Links
        </h1>

        <div className="flex flex-col space-y-4">
          {LINKS.map(({ name, url, color }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleClick(name)}
              className={`${color} text-white py-3 rounded-lg text-center font-semibold hover:brightness-110 transition`}
            >
              {name} {clicks[name] !== undefined && `(${clicks[name]})`}
            </a>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">
          {visits !== null
            ? `👁️ Visitantes últimos 24h: ${visits}`
            : "Carregando visitas..."}
        </p>
      </div>
    </main>
  );
}
