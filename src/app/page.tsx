"use client";

import Editor from "./components/Editor";
import DiagramBox from "./components/DiagramBox";
import { generate_documentation } from "../backend/gemini-fast";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Box } from "@chakra-ui/react";
import { useTheme } from "./context/ThemeContext";

const TEST_DATA = {
  classes: [
    {
      name: "A",
      attributes: [
        { type: "int", modifier: "-", name: "x" },
        { type: "int", modifier: "-", name: "y" },
        { type: "B[]", modifier: "-", name: "ptr" },
      ],
    },
    {
      name: "B",
      attributes: [{ type: "A", modifier: "-", name: "A" }],
    },
  ],
  associations: [
    {
      start: "A",
      end: "B",
      start_m: "1",
      end_m: "0..*",
      bidir: true,
    },
  ],
};

export enum modes {
  DOC = "Documentation",
  GRAPH = "Graph",
}

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  // State to manage the selected programming language
  const [language, setLanguage] = useState<string>("javascript");
  const [currentMode, setCurrentMode] = useState(modes.DOC);

  return (
    <Box
      bg={theme === "dark" ? "black" : "white"}
      className="flex flex-col w-full bg-black overscroll-none"
    >
      <Navbar
        language={language}
        onSelect={setLanguage}
        currentMode={currentMode}
        setCurrentMode={setCurrentMode}
      />
      <div className="flex flex-row">
        <div className="w-1/2">
          <Editor language={language} />
        </div>
        <DiagramBox
          classes={TEST_DATA.classes}
          associations={TEST_DATA.associations}
        />
        <div className="w-1/2"></div>
      </div>
    </Box>
  );
}
