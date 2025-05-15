import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const TIME_WINDOW = 60 * 60 * 1000; // 1 hora em ms

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  if (ip === "unknown") {
    return NextResponse.json({ error: "IP não encontrado" }, { status: 400 });
  }

  const oneHourAgo = new Date(Date.now() - TIME_WINDOW);

  // Verifica se o IP já tem uma visita registrada na última hora
  const recentVisit = await prisma.visit.findFirst({
    where: {
      ip,
      createdAt: { gt: oneHourAgo },
    },
  });

  if (!recentVisit) {
    await prisma.visit.create({ data: { ip } });
  }

  // Conta total de visitas únicas (IPs únicos em último dia)
  const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
  const totalVisits = await prisma.visit.count({
    where: { createdAt: { gt: twentyFourHoursAgo } },
  });

  return NextResponse.json({ total: totalVisits });
}
