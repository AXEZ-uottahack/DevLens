"use client";

import dynamic from "next/dynamic";

import Editor from "./components/Editor";
import Logo from "./components/Logo";
import { useState } from "react";
import { Button } from "@chakra-ui/react";

export default function Home() {
  // const [theme, setTheme] = useState("Dark");
  return (
    <div className="flex w-full bg-black">
      <div className="w-1/2">
        <header>
          <Logo size="text-2xl" theme="Dark" />
          {/* <Button size="md" variant="subtle">
            {theme === "Dark" ? "Light" : "Dark"}
          </Button> */}
          {/* Instead of state, use provider to handle dark mode - next-themes */}
        </header>
        <Editor />
      </div>
      <div className="w-1/2"></div>
    </div>
  );
}
