"use client";

import { generate_documentation } from "../../backend/gemini-fast";
import React, { useState } from "react";
import { Box, Center } from "@chakra-ui/react";
import { useTheme } from "../context/ThemeContext";
import { modes } from "../constants/const";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("../components/Editor"), { ssr: false });
const DiagramBox = dynamic(() => import("../components/DiagramBox"), {
  ssr: false,
});
const DocumentDisplay = dynamic(() => import("../components/DocumentDisplay"), {
  ssr: false,
});
const Navbar = dynamic(() => import("../components/Navbar"), { ssr: false });
interface Class {
  name: string;
  attributes: {
    type: string;
    modifier: string;
    name: string;
  }[];
}

interface Association {
  start: string;
  end: string;
  start_m: string;
  end_m: string;
  bidir: boolean;
}

interface DiagramData {
  classes: Class[];
  associations: Association[];
}

type DocumentOrDiagramType = {
  requestType: string;
  doc: string;
  data: DiagramData;
};

type OptionalLoadingType = {
  loading: boolean;
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

const OptionalLoading = ({ loading }: OptionalLoadingType) => {
  console.log(loading);
  if (loading) {
    return (
      <Box pos="absolute" inset="0" bg="bg/80">
        <Center h="full">
          <span className="loading loading-dots loading-lg"></span>
        </Center>
      </Box>
    );
  } else {
    return <></>;
  }
};

export default function Page() {
  const { theme } = useTheme();
  // State to manage the selected programming language
  const [language, setLanguage] = useState<string>("java");
  const [code, setCode] = useState<string | undefined>(`class DiagramBox {

    private DiagramData data;

    public DiagramBox(DiagramData data) {
        this.data = data;
        drawDiagram(data);
    }

    public void drawDiagram(data) {}
    public void clearContents() {}

    public boolean onUpdate(data) {
        drawDiagram(data);
    }
}

class DiagramData {
    private List<ClassData> classes;
    private List<AssociationData> associations;
}

class ClassData {
    private String name;
    private List<AttributeData> attrs;
}

class AssociationData {
    private String start;
    private String end;
    private int startMult;
    private int endMult;
    private bool bidir;
}
`);
  const [data, setData] = useState<DiagramData>({
    classes: [],
    associations: [],
  });
  const [currentMode, setCurrentMode] = useState(modes.DOC);
  const [doc, setDoc] = useState<string>("");

  const [loading, setLoading] = useState(false);

  return (
    <>
      <Box
        bg={theme === "dark" ? "black" : "white"}
        className="flex flex-col h-full w-full bg-black overscroll-none"
      >
        <Navbar
          language={language}
          onSelect={setLanguage}
          currentMode={currentMode}
          setCurrentMode={setCurrentMode}
          onAnalyzeClick={() => {
            setLoading(true);
            processAnalyze(currentMode, code, language).then((result) => {
              setLoading(false);
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
            <OptionalLoading loading={loading} />
            <MarkdownOrDiagram
              requestType={currentMode}
              doc={doc}
              data={data}
            />
          </div>
        </div>
        <footer
          className={
            "self-center " + (theme === "dark" ? "text-white" : "text-black")
          }
        >
          ©copyright 2025 all rights reserved
        </footer>
      </Box>
    </>
  );
}
