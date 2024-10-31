import React from "react";
import Image from "next/image";

import PieChartComponent from "../charts/pie-chart";
import SectionTitle from "./section-title";

interface CompetencyItem {
  percentage: number;
  label: string;
}

export default function Compensation() {
  const competencies: CompetencyItem[] = [
    { percentage: 85, label: "Стратегик фикрлаш" },
    { percentage: 75, label: "Натижага йуналганлик" },
    { percentage: 75, label: "Узгаришларни бошкариш" },
    { percentage: 100, label: "Лидерлик" },
    { percentage: 98, label: "Уз-узини ривожлан-тириш" },
    { percentage: 45, label: "Коммуника-тивлик" },
  ];

  return (
    <div className="bg-white py-8 text-gray-900 dark:bg-zinc-900 dark:text-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle>Компетенцияларнинг намоён булиши</SectionTitle>
        <div className="flex flex-col gap-8 py-5 lg:grid lg:grid-cols-5">
          <div className="lg:col-span-4">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {competencies.map((item, index) => (
                <PieChartComponent
                  key={index}
                  percentage={item.percentage}
                  title={item.label}
                />
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:col-span-1">
            <Image
              src="/_static/qr.png"
              alt="compensation"
              width={200}
              height={200}
              className="rounded-lg bg-white object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
