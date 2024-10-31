"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only render theme switcher after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="w-full bg-white dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 sm:py-6 lg:py-10">
          <div className="flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-between">
            {/* Logo container */}
            <div className="flex-shrink-0">
              <Image
                src="/_static/logo.svg"
                alt="Logo"
                width={214}
                height={157}
                className="h-20 w-auto dark:brightness-0 dark:invert dark:filter sm:h-24 lg:h-28"
                priority
              />
            </div>

            <h2 className="max-w-2xl text-center text-lg font-bold text-gray-900 dark:text-white sm:text-xl lg:text-3xl">
              Республика Ассессмент маркази онлайн платформаси
            </h2>

            <div className="flex items-center gap-4">
              <div className="relative">
                <h4 className="text-3xl font-bold text-blue-800 dark:text-blue-400 sm:text-4xl lg:text-5xl">
                  78
                </h4>
                <div className="absolute -right-8 -top-2 flex items-center gap-1 text-[#28A264] dark:text-emerald-400">
                  <svg
                    width="16"
                    height="9"
                    viewBox="0 0 16 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.52983 0.46995C8.3892 0.3295 8.19858 0.25061 7.99983 0.25061C7.80108 0.25061 7.61045 0.3295 7.46983 0.46995L0.469829 7.46995C0.365072 7.57484 0.293748 7.70842 0.264864 7.85381C0.235979 7.99921 0.250831 8.14991 0.307542 8.28687C0.364253 8.42384 0.460281 8.54092 0.583497 8.62334C0.706712 8.70576 0.851589 8.74982 0.999829 8.74995H14.9998C15.1481 8.74982 15.2929 8.70576 15.4162 8.62334C15.5394 8.54092 15.6354 8.42384 15.6921 8.28687C15.7488 8.14991 15.7637 7.99921 15.7348 7.85381C15.7059 7.70842 15.6346 7.57484 15.5298 7.46995L8.52983 0.46995Z"
                      fill="#28A264"
                    />
                  </svg>
                  <span className="text-lg font-bold">2</span>
                </div>
              </div>

              {/* Theme toggle button */}
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="ml-10 w-10 rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  {theme === "dark" ? (
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
                    </svg>
                  ) : (
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
