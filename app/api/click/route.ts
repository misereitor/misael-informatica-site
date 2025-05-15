import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  if (ip === "unknown") {
    return NextResponse.json({ error: "IP não encontrado" }, { status: 400 });
  }

  const { linkName } = await req.json();

  if (!linkName) {
    return NextResponse.json(
      { error: "Nome do link é obrigatório" },
      { status: 400 }
    );
  }

  await prisma.linkClick.create({
    data: { ip, linkName },
  });

  // Conta cliques por link (últimas 24h)
  const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
  const clicksCount = await prisma.linkClick.count({
    where: {
      linkName,
      createdAt: { gt: twentyFourHoursAgo },
    },
  });

  return NextResponse.json({ clicks: clicksCount });
}
