"use client";

import RadarChartSimple from "../charts/simple-radar";
import SectionTitle from "./section-title";

const characteristicsOne = [
  { name: "Мақсадга интилувчанлик", value: 90 },
  { name: "Эмоционал интеллект", value: 95 },
  { name: "Креативлик", value: 75 },
  { name: "Ходимларга йўналганлик", value: 86 },
];
const characteristicsTwo = [
  { name: "Топширикларга йўналганлик", value: 95 },
  { name: "Фаол иктимоий муносабатлар", value: 75 },
  { name: "Ўз устида ишлаш", value: 86 },
  { name: "Муаммоли вазиятга йўналганлик", value: 86 },
];

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

export default function PersonalFeatures() {
  return (
    <div className="bg-white py-6 dark:bg-zinc-900 sm:py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle>Шахсий ва касбий хусусиятлар</SectionTitle>

        <div className="grid grid-cols-1 items-start gap-6 py-6 sm:grid-cols-2 sm:gap-8 sm:py-8 md:grid-cols-3">
          <div className="space-y-3 sm:space-y-4">
            {characteristicsOne.map((char) => (
              <div key={char.name}>
                <div className="flex justify-between text-xs dark:text-gray-300 sm:text-sm">
                  <span>{char.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                    <div
                      className="h-2 rounded-full bg-[#0956AF] dark:bg-blue-500"
                      style={{ width: `${char.value}%` }}
                    />
                  </div>
                  <span className="text-sm font-bold dark:text-gray-300">
                    {char.value}%
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="order-first col-span-1 w-full sm:order-none sm:col-span-2 md:col-span-1">
            <RadarChartSimple />
          </div>

          <div className="space-y-3 sm:space-y-4">
            {characteristicsTwo.map((char) => (
              <div key={char.name}>
                <div className="flex justify-between text-xs dark:text-gray-300 sm:text-sm">
                  <span>{char.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                    <div
                      className="h-2 rounded-full bg-[#0956AF] dark:bg-blue-500"
                      style={{ width: `${char.value}%` }}
                    />
                  </div>
                  <span className="text-sm font-bold dark:text-gray-300">
                    {char.value}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
