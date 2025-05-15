// app/api/admin/metrics/route.ts
import { PrismaClient } from "@prisma/client";
import { subDays } from "date-fns";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  const last30Days = subDays(new Date(), 30);

  const visits = await prisma.homeVisit.findMany({
    where: { createdAt: { gte: last30Days } },
  });

  const clicks = await prisma.linkClick.findMany({
    where: { createdAt: { gte: last30Days } },
  });

  type WithCreatedAt = { createdAt: Date };
  // Agrupar por data
  const formatByDay = (items: WithCreatedAt[]) => {
    const grouped: Record<string, number> = {};
    items.forEach(({ createdAt }) => {
      const date = createdAt.toISOString().split("T")[0];
      grouped[date] = (grouped[date] || 0) + 1;
    });
    return Object.entries(grouped).map(([date, count]) => ({ date, count }));
  };

  const clickByLink = clicks.reduce((acc, click) => {
    acc[click.linkName] = (acc[click.linkName] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return NextResponse.json({
    visitByDay: formatByDay(visits),
    clickByDay: formatByDay(clicks),
    clickByLink,
    totalVisits: visits.length,
    totalClicks: clicks.length,
  });
}
