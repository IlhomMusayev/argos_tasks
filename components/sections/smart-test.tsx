import React from "react";

import BellCurve from "../charts/bell-curve";
import HalfPieChart from "../charts/half-pie-chart";
import { LineChartMultiple } from "../charts/line-chart-multiple";
import LineSynchronizedChart from "../charts/line-synchronized-chart";
import Percentage from "../charts/percentage";
import { RadarChartSimple } from "../charts/radar-chart-simple";
import { BrainAnalysis } from "./brain-analysis";
import SectionTitle from "./section-title";

export default function SmartTest() {
  return (
    <div className="bg-gray-50 py-8 dark:bg-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle>Билим тести</SectionTitle>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5">
            <div className="col-span-1">
              <HalfPieChart
                percentage={33}
                title="Конституциявий-хукукий саводхонлик"
              />
            </div>
            <div className="col-span-1">
              <HalfPieChart
                percentage={79}
                title="Ахборот-коммуникация технологиялари"
              />
            </div>
            <div className="col-span-1">
              <HalfPieChart
                percentage={78}
                title="Турли сохадаги ислохотлардан хабардорлик "
              />
            </div>
            <div className="col-span-1">
              <HalfPieChart percentage={48} title="Узбек тили ва адабиёти " />
            </div>
            <div className="col-span-1">
              <HalfPieChart
                percentage={100}
                title="Узбекистон тарихи ва маданияти "
              />
            </div>
            <div className="col-span-1">
              <HalfPieChart
                percentage={55}
                title="Аклий салохияти ва мантикий фикрлаш "
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-5">
            <div className="col-span-1 sm:col-span-3">
              <LineSynchronizedChart
                data={[
                  {
                    date: "12.06",
                    value: 15,
                  },
                  {
                    date: "18.06",
                    value: 32,
                  },
                  {
                    date: "03.07",
                    value: 52,
                  },
                  {
                    date: "13.07",
                    value: 72,
                  },
                  {
                    date: "14.07",
                    value: 25,
                  },
                  {
                    date: "20.07",
                    value: 45,
                  },
                  {
                    date: "24.07",
                    value: 65,
                  },
                ]}
              />
              <Percentage percentage={78} title="Умумий натижа" />
            </div>
            <div className="col-span-1 sm:col-span-2">
              <BrainAnalysis title="Таҳлил натижалари" percentage={90} />
              <BellCurve />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
