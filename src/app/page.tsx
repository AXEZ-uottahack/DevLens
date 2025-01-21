"use client";

import React, { useState } from "react";
import { Box, IconButton } from "@chakra-ui/react";
import { useTheme } from "./context/ThemeContext";
import Logo from "./components/Logo";
import { LuMoon, LuSun } from "react-icons/lu";
import Link from "next/link";


export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Box
      bg={theme === "dark" ? "black" : "white"}
      className="flex flex-col h-full w-full bg-black overscroll-none max-w-full"
    >
      <div className="w-full mx-auto px-4 font-sans text-gray-800">
        {/* Header */}
        <header className="flex justify-between items-center py-6">
          <Logo size="text-xl" theme={theme} />
          <nav className="space-x-10">
            <Link href="/"
              className={
                "cursor-pointer text-lg " +
                (theme === "dark" ? "text-white" : "text-black")
              }
            >
              HOME
            </Link>
            <Link
              href="/editor"
              className={
                "cursor-pointer text-lg " +
                (theme === "dark" ? "text-white" : "text-black")
              }
            >
              EDITOR
            </Link>
            <IconButton
              onClick={toggleTheme}
              variant="ghost"
              aria-label="Toggle color mode"
              size="sm"
              css={{
                _icon: {
                  width: "5",
                  height: "5",
                  color: `${theme === "dark" ? "white" : "black"}`,
                },
              }}
            >
              {theme === "dark" ? <LuMoon /> : <LuSun />}
            </IconButton>
          </nav>
        </header>

        {/* Main Content */}
        <main className="h-dvh text-center mt-20 flex">
          <div className="w-1/2"></div>
          <div className="mb-8">
            <p
              className={
                "text-md uppercase text-left " +
                (theme === "dark" ? "text-slate-300" : "text-gray-500")
              }
            >
              Source code right to
            </p>
            <h1
              className={
                "text-6xl md:text-5xl font-bold leading-tight text-left " +
                (theme === "dark" ? "text-white" : "text-gray-800")
              }
            >
              DOCUMENTATIONS
              <br />
              DIAGRAMS FOR
              <br />
              DEVELOPERS
            </h1>
            <div className="flex flex-row justify-start space-x-4 mt-10">
              <Link
                href="/editor"
                className={
                  "px-6 py-2 rounded transition " +
                  (theme === "dark"
                    ? "bg-white text-black hover:bg-slate-500 hover:text-white"
                    : "bg-black text-white hover:bg-slate-500 hover:text-black")
                }
              >
                TRY IT OUT
              </Link>
              <a
                className={
                  "px-6 py-2 border-2 rounded transition " +
                  (theme === "dark"
                    ? "text-indigo-400 border-indigo-200 hover:bg-indigo-100"
                    : "text-indigo-700 border-indigo-700 hover:bg-indigo-200")
                }
                href="https://github.com/AXEZ-uottahack/DevLens"
                target="_blank"
              >
                GITHUB
              </a>
            </div>
          </div>
        </main>
      </div>
    </Box>
  );
}
