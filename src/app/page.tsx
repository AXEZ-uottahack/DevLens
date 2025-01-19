"use client";

import Editor from "./components/Editor";
import DiagramBox from "./components/DiagramBox";
import { generate_documentation } from "../backend/gemini-fast";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Box } from "@chakra-ui/react";
import { useTheme } from "./context/ThemeContext";
import DocumentDisplay from "./components/DocumentDisplay";

type DocumentOrDiagramType = {
  requestType: string;
  doc: string;
  data: any;
};

const extractOnBrackets = (jsonString: string) => {
  let startIndex = 0;
  for (; startIndex < jsonString.length; startIndex++) {
    if (jsonString[startIndex] === "{") {
      break;
    }
  }

  let endIndex = jsonString.length;
  for (; endIndex >= 0; endIndex--) {
    if (jsonString[endIndex] === "}") {
      break;
    }
  }

  // after above loops, startIndex is index of first opening bracket
  // endIndex is index of last closing bracket

  return jsonString.slice(startIndex, endIndex + 1);
};

const tryProcessJSON = (jsonString: string) => {
  try {
    return JSON.parse(extractOnBrackets(jsonString));
  } catch (e) {
    console.error(e);
    return {
      // return an empty object following the expected template (clears the model)
      classes: [],
      associations: [],
    };
  }
};

const processAnalyze = async (
  requestType: modes,
  requestData: string | undefined,
  language: string
) => {
  const result = await generate_documentation(
    requestType,
    language,
    requestData
  );
  // const result = '```json{"classes": [{"name": "Hello World", "attributes": [], "associations": []}, \
  // {"name": "Hello World2", "attributes": [], "associations": []}, {"name": "Hello World2", "attributes": [], "associations": []}], \
  // "associations": [{"start": "Hello World", "end": "Hello World2", "start_m": "1", "end_m": "0..1", "bidir": true}]}```'

  if (requestType == modes.GRAPH) {
    return tryProcessJSON(result);
  } else if (requestType == modes.DOC) {
    return result;
  }

  return "";
};

export enum modes {
  DOC = "Documentation",
  GRAPH = "Graph",
}

const MarkdownOrDiagram = ({
  requestType,
  doc,
  data,
}: DocumentOrDiagramType) => {
  if (requestType == modes.DOC) {
    return <DocumentDisplay markdown={doc} />;
  } else if (requestType == modes.GRAPH) {
    return (
      <DiagramBox classes={data.classes} associations={data.associations} />
    );
  } else {
    return <></>;
  }
};

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  // State to manage the selected programming language
  const [language, setLanguage] = useState<string>("javascript");
  const [code, setCode] = useState<string | undefined>(
    "// Start typing your code here..."
  );
  const [data, setData] = useState<any>({ classes: [], associations: [] });
  const [currentMode, setCurrentMode] = useState(modes.DOC);
  const [doc, setDoc] = useState<string>("");

  return (
    <Box
      bg={theme === "dark" ? "black" : "white"}
      className="flex flex-col h-full w-full bg-black overscroll-none max-w-full"
    >
      <Navbar
        language={language}
        onSelect={setLanguage}
        currentMode={currentMode}
        setCurrentMode={setCurrentMode}
        onAnalyzeClick={() => {
          processAnalyze(currentMode, code, language).then((result) => {
            if (currentMode == modes.GRAPH) {
              setData(result);
            } else if (currentMode == modes.DOC) {
              setDoc(result);
            }
          });
        }}
      />
      <div className="flex flex-row">
        
       <div className="w-1/2">
          <Editor
            language={language}
            onType={(value: string | undefined) => {
              setCode(value);
            }}
          />
        </div>
        <div className="w-1/2 p-5">
          <MarkdownOrDiagram requestType={currentMode} doc={doc} data={data} />
        </div>
      </div>
      <footer
        className={
          "self-center p-3 " + (theme === "dark" ? "text-white" : "text-black")
        }
      >
        ©copyright 2025 all rights reserved 
      </footer>
    </Box>
  );
}
