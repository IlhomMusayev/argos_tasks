import React from "react";

import SectionTitle from "./section-title";

export default function PsychologySection() {
  return (
    <section className="bg-gray-50 py-8 text-gray-900 dark:bg-zinc-800 dark:text-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          <SectionTitle>Психологик диагностика</SectionTitle>

          {/* Section content */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <p className="leading-relaxed text-gray-900 dark:text-gray-300">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s,when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </p>
            <p className="leading-relaxed text-gray-900 dark:text-gray-300">
              a type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
