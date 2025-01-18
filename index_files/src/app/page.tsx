"use client";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Editor from "./components/Editor";
import { Box } from "@chakra-ui/react";

export default function Home() {
  // State to manage the selected programming language
  const [language, setLanguage] = useState<string>("javascript");

  return (
    <Box
      bg={{ base: "white", _dark: "black" }}
      className="flex flex-col w-full bg-black"
    >
      <Navbar language={language} onSelect={setLanguage} />

      <div className="w-1/2">
        <Editor language={language} />
      </div>
      <div className="w-1/2"></div>
    </Box>
  );
}
