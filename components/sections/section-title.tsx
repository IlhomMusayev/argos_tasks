import React from "react";

interface SectionTitleProps {
  children: React.ReactNode;
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <div className="flex items-center gap-1 sm:gap-5">
      <div className="h-8 w-1.5 bg-[#0956AF] dark:bg-blue-400 sm:h-10 sm:w-2" />
      <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 sm:text-2xl">
        {children}
      </h2>
      <div className="h-0.5 flex-1 bg-gray-200 dark:bg-gray-500 sm:h-1" />
    </div>
  );
}
