import React from "react";
import Image from "next/image";
import { Brain } from "lucide-react"; // For the brain icon

import { AreaChartStacked } from "../charts/area-chart-stacked";
import { RadialTextChart } from "../charts/radial-text-chart";

interface BrainAnalysisProps {
  title: string;
  percentage: number;
}

export function BrainAnalysis({ title, percentage }: BrainAnalysisProps) {
  return (
    <div className="rounded-lg">
      <div className="mb-6 flex items-center gap-3">
        <div>
          <Image
            src="/_static/brain.png"
            alt="brain"
            className="h-16 w-16 object-contain"
            width={36}
            height={36}
          />
        </div>{" "}
        <div className="flex flex-col">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <span className="font-bold">{percentage} фоиз</span> иштирокчидан
            яхширок натижа
          </p>
        </div>
      </div>

      <div className="grid gap-6"></div>
    </div>
  );
}
