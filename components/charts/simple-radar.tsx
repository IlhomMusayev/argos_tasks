"use client";

import React from "react";
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    subject: "Matematika",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Ona tili",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Ingliz tili",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Geografiya",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Fizika",
    A: 85,
    B: 90,
    fullMark: 150,
  },
];

const RadarChartSimple = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar
          name="O'quvchi A"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />

        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default RadarChartSimple;
