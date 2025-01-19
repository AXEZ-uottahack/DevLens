"use client";

import Editor from './components/Editor'
import DiagramBox from './components/DiagramBox';
import { generate_documentation, UML_MODE, DOC_MODE } from '../backend/gemini-fast';
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Box } from "@chakra-ui/react";

const tryProcessJSON = (jsonString: string) => {
  try {
    return JSON.parse(jsonString);
  } catch (e) {
    console.error(e)
    return {  // return an empty object following the expected template (clears the model)
      classes: [],
      associations: []
    };
  }
}

const processAnalyze = async (requestType: string, requestData: string | undefined, language: string) => {
  const result = await generate_documentation(requestType, language, requestData);

  if (requestType == UML_MODE) {
    return tryProcessJSON(result);
  } else if (requestType == DOC_MODE) {
    return result;
  }

  return '';
}

export default function Home() {
  // State to manage the selected programming language
  const [language, setLanguage] = useState<string>("javascript");
  const [code, setCode] = useState<string | undefined>("// Start typing your code here...");
  const actionType = "UML"  // PLACEHOLDER
  const [data, setData] = useState<any>({classes: [], associations: []});
  const [doc, setDoc] = useState<string>("");

  return (
    <Box
      bg={{ base: "white", _dark: "black" }}
      className="flex flex-col w-full bg-black"
    >
      <Navbar language={language} onSelect={setLanguage} onAnalyzeClick={() => {
        processAnalyze(actionType, code, language).then((result) => {
          if (actionType == UML_MODE) {
            setData(result);
          } else if (actionType == DOC_MODE) {
            setDoc(result);
          } 
        })
      }}/>

      <Navbar language={language} onSelect={setLanguage} />
      <div className='flex flex-row'>
      <div className="w-1/2">
        <Editor language={language} onType={(value: string | undefined) => {
          setCode(value);
        }}/>
      </div>
        <DiagramBox classes={data.classes} associations={data.associations}/>
      <div className="w-1/2">
      </div>
      </div>
    </Box>
  );
}
