"use client";

import React from "react";
import { Cell, Pie, PieChart } from "recharts";

interface HalfPieChartProps {
  percentage: number; // percentage
  title: string;
  color?: string; // pie color
}

const getColorByPercentage = (percentage: number): string => {
  if (percentage >= 80) return "#0956AF"; // blue
  if (percentage >= 60) return "#28A264"; // green
  if (percentage >= 40) return "#F8B324"; // yellow
  return "#EF233C"; // red
};

const HalfPieChart: React.FC<HalfPieChartProps> = ({
  percentage,
  title,
  color,
}) => {
  const automaticColor = getColorByPercentage(percentage);
  const finalColor = color || automaticColor;

  const data = [{ value: percentage }, { value: 100 - percentage }];

  return (
    <div className="flex flex-col items-center">
      <PieChart width={200} height={100}>
        <Pie
          data={data}
          cx={100}
          cy={100}
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={80}
          paddingAngle={0}
          dataKey="value"
        >
          <Cell fill={finalColor} />
          <Cell fill="#DEE2E6" />
        </Pie>
      </PieChart>
      <div className="-mt-8 text-center">
        <div className="text-3xl font-extrabold">{percentage}%</div>
        <div className="mt-1 max-w-[150px] text-[13px]">{title}</div>
      </div>
    </div>
  );
};

export default HalfPieChart;
