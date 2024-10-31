"use client";

import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

// Bell curve ma'lumotlarini generatsiya qilish uchun funksiya
const generateBellCurveData = () => {
  const data: any = [];
  const mean = 0;
  const stdDev = 1;

  for (let x = -4; x <= 4; x += 0.2) {
    const y =
      (1 / (stdDev * Math.sqrt(2 * Math.PI))) *
      Math.exp(-(Math.pow(x - mean, 2) / (2 * Math.pow(stdDev, 2))));
    data.push({ x, y });
  }

  return data;
};

const data = generateBellCurveData();

// Segmentlarga bo'lish
const leftData = data.filter((point) => point.x < -1);
const middleData = data.filter((point) => point.x >= -1 && point.x <= 1);
const rightData = data.filter((point) => point.x > 1);

export default function ClientBellCurve() {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <LineChart margin={{ top: 20, right: 30, left: -10, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" type="number" domain={[-4, 4]} tickCount={9} />
          <YAxis />

          {/* Ko'k reference chizig'i */}
          <ReferenceLine
            x={2}
            stroke="#2563eb"
            strokeDasharray="3 3"
            label={{
              position: "top",
              value: "▼",
              fill: "#2563eb",
              fontSize: 20,
            }}
          />

          {/* Qizil segment */}
          <Line
            data={leftData}
            type="monotone"
            dataKey="y"
            stroke="#ef4444"
            strokeWidth={3}
            dot={false}
          />

          {/* Sariq segment */}
          <Line
            data={middleData}
            type="monotone"
            dataKey="y"
            stroke="#f59e0b"
            strokeWidth={3}
            dot={false}
          />

          {/* Yashil segment */}
          <Line
            data={rightData}
            type="monotone"
            dataKey="y"
            stroke="#22c55e"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
