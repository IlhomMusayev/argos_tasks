interface PercentageProps {
  percentage: number;
  title: string;
}

export default function Percentage({ percentage, title }: PercentageProps) {
  // Percentage qiymatiga qarab rang tanlash
  const getColorClass = (value: number) => {
    if (value < 30) return "bg-[#EF233C]";
    if (value < 70) return "bg-[#F8B324]";
    return "bg-[#28A264]";
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="-mb-3 ml-5 text-[48px] font-bold text-[#0956AF] dark:text-[#4B91F1]">
        {percentage}%
      </div>
      <div className="relative h-10 w-full">
        <div className="absolute h-full w-full rounded-lg bg-gray-200 dark:bg-gray-700" />
        <div
          className={`absolute h-full rounded-lg ${getColorClass(percentage)}`}
          style={{ width: `${percentage}%` }}
        >
          <span className="flex items-center justify-center whitespace-nowrap px-4 py-1 text-2xl font-bold text-white">
            {title}
          </span>
        </div>
      </div>
    </div>
  );
}
