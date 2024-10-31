"use client";

import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Sector } from "recharts";

interface PieChartProps {
  percentage: number;
  title: string;
  color?: string;
}

const getColorByPercentage = (percentage: number): string => {
  if (percentage >= 90) return "#0956AF"; // blue
  if (percentage >= 70) return "#28A264"; // green
  if (percentage >= 50) return "#F8B324"; // yellow
  return "#EF233C"; // red
};

const PieChartComponent: React.FC<PieChartProps> = ({
  percentage,
  title,
  color,
}) => {
  const automaticColor = getColorByPercentage(percentage);
  const finalColor = color || automaticColor;

  const data = [{ value: percentage }, { value: 100 - percentage }];

  return (
    <div className="grid grid-cols-6 items-center gap-10">
      <div className="relative col-span-2">
        <ResponsiveContainer width={120} height={120}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={35}
              outerRadius={45}
              fill="#8884d8"
              paddingAngle={0}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
            >
              <Cell fill={finalColor} />
              <Cell fill="#E9ECEF" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <h2 className="absolute left-9 top-1/2 -translate-y-1/2 text-center text-xl font-extrabold">
          {percentage}%
        </h2>
      </div>
      <div className="col-span-4">
        <div className="text-xl font-bold">{title}</div>
      </div>
    </div>
  );
};

export default PieChartComponent;
