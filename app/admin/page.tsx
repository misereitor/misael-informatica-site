"use client";
import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";

type MetricPoint = {
  date: string;
  count: number;
};

type AdminMetrics = {
  visitByDay: MetricPoint[];
  clickByDay: MetricPoint[];
  clickByLink: Record<string, number>;
  totalVisits: number;
  totalClicks: number;
};

export default function AdminPage() {
  const [metrics, setMetrics] = useState<AdminMetrics | null>(null);

  useEffect(() => {
    fetch("/api/admin/metrics")
      .then((res) => res.json())
      .then(setMetrics);
  }, []);

  if (!metrics) return <div className="p-8">Carregando...</div>;

  return (
    <div className="p-8 space-y-12">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">
            Visitas (últimos 30 dias)
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={metrics.visitByDay}>
              <XAxis dataKey="date" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="count"
                stroke="#6366f1"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">
            Cliques (últimos 30 dias)
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={metrics.clickByDay}>
              <XAxis dataKey="date" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="count"
                stroke="#f59e0b"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Cliques por Link</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={Object.entries(metrics.clickByLink).map(([link, count]) => ({
              link,
              count,
            }))}
          >
            <XAxis dataKey="link" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="count" fill="#10b981" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
