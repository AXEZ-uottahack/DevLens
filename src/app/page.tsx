"use client";

import Editor from './components/Editor'
import DiagramBox from './components/DiagramBox';
import { generate_documentation } from '../backend/gemini-fast';
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Box } from "@chakra-ui/react";

const TEST_DATA = {
  classes: [
    {
      name: "A",
      attributes: [
        {type: "int", modifier: "-", name: "x"},
        {type: "int", modifier: "-", name: "y"},
        {type: "B[]", modifier: "-", name: "ptr"} 
      ]
    },
    {
      name: "B",
      attributes: [
        {type: "A", modifier: "-", name: "A"}
      ]
    }
  ],
  associations: [
    {
      start: "A",
      end: "B",
      start_m: "1", 
      end_m: "0..*", 
      bidir: true 
    }
  ]
}

export default function Home() {
  // State to manage the selected programming language
  const [language, setLanguage] = useState<string>("javascript");

  return (
    <Box
      bg={{ base: "white", _dark: "black" }}
      className="flex flex-col w-full bg-black"
    >
      <Navbar language={language} onSelect={setLanguage} />
      <div className='flex flex-row'>
      <div className="w-1/2">
        <Editor language={language} />
      </div>
        <DiagramBox classes={TEST_DATA.classes} associations={TEST_DATA.associations}/>
      <div className="w-1/2">
      </div>
      </div>
    </Box>
  );
}
