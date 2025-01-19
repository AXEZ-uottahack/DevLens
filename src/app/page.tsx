"use client";

import React, { useState } from "react";
import { Box, IconButton } from "@chakra-ui/react";
import { useTheme } from "./context/ThemeContext";
import Logo from "./components/Logo";
import { LuMoon, LuSun } from "react-icons/lu";

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Box
      bg={theme === "dark" ? "black" : "white"}
      color={theme === "dark" ? "text-white" : "text-black"}
      className="flex flex-col h-full w-full bg-black overscroll-none max-w-full"
    >
      <Logo size="text-lg" theme={theme} />
      <a
        href="/editor"
        className={"p-2  " + (theme === "dark" ? "text-white" : "text-black")}
      >
        Go to editor
      </a>
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
    </Box>
  );
}
