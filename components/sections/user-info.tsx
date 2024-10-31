import React from "react";
import Image from "next/image";

interface UserInfoProps {
  name: string;
  title: string;
  birthDate: string;
  birthPlace: string;
  height: number;
  weight: number;
  bmi: number;
  currentPosition: string;
  previousPosition: string;
  imageUrl: string;
}

const UserInfo: React.FC<UserInfoProps> = ({
  name,
  title,
  birthDate,
  birthPlace,
  height,
  weight,
  bmi,
  currentPosition,
  previousPosition,
  imageUrl,
}) => {
  return (
    <div
      className="w-full rounded-lg bg-white p-4 dark:bg-zinc-900"
      style={{
        backgroundImage: `url(/_static/bg-user-info.svg)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right bottom -200px",
        backgroundSize: "300px",
      }}
    >
      <div className="relative mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:justify-between">
          <div className="flex w-full flex-col items-start gap-6 md:flex-row">
            <Image
              src={imageUrl}
              alt={name}
              width={100}
              height={100}
              className="w-[120px] rounded-lg object-cover md:w-[150px] lg:w-[180px]"
            />

            <div className="space-y-4 md:space-y-6">
              <div>
                <h1 className="text-xl font-bold text-gray-700 dark:text-white sm:text-2xl md:text-3xl lg:text-4xl">
                  {name}
                </h1>
                <h2 className="text-lg text-gray-700 dark:text-gray-300 sm:text-xl md:text-2xl lg:text-4xl">
                  {title}
                </h2>
              </div>

              <div className="space-y-2 md:space-y-4">
                <div className="">
                  <p className="flex gap-2 text-gray-600 dark:text-gray-400">
                    <span className="font-medium">Туғилган сана:</span>
                    {birthDate} йил
                  </p>
                  <p className="flex gap-2 text-gray-600 dark:text-gray-400">
                    <span className="font-medium">Туғилган жой:</span>
                    {birthPlace}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 overflow-x-auto pb-2 md:gap-6 md:overflow-visible">
                <div className="space-y-1">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Бўйи:
                  </p>
                  <p className="font-medium text-gray-700 dark:text-white">
                    {height}см
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Вазни:
                  </p>
                  <p className="font-medium text-gray-700 dark:text-white">
                    {weight}кг
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Индекс:
                  </p>
                  <p className="font-medium">
                    {bmi} -{" "}
                    <span className="text-blue-800 dark:text-blue-400">
                      Норма
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full space-y-2 border-t pt-4 lg:w-auto lg:max-w-sm lg:border-t-0 lg:pt-0">
            <div>
              <h3 className="text-lg font-medium text-gray-700 dark:text-white">
                Лавозими:
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {currentPosition}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700 dark:text-white">
                Номзод:
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {previousPosition}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
