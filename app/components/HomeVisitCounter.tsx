"use client";

import { useEffect, useState } from "react";

export default function HomeVisitCounter() {
  const [visits, setVisits] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/home-visit", { method: "POST" })
      .then((res) => res.json())
      .then((data) => setVisits(data.total))
      .catch(() => setVisits(null));
  }, []);

  if (visits === null) return null;

  return (
    <div className="text-center text-gray-600 text-sm mt-4">
      👁️ Visitantes únicos últimos 24h: {visits}
    </div>
  );
}
