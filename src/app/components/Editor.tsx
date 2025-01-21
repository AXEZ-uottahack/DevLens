"use client";
import React, { useState, useRef } from "react";
import { Editor} from "@monaco-editor/react";
import { useTheme } from "../context/ThemeContext";
import * as monaco from "monaco-editor";

interface EditorProps {
  language: string;
  onType: (value: string | undefined) => void;
}

const CodeEditor: React.FC<EditorProps> = ({
  language,
  onType,
}: EditorProps) => {
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const [value, setValue] = useState<string | undefined>(`class DiagramBox {

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
  const { theme } = useTheme();

  const onMount = (editor: monaco.editor.IStandaloneCodeEditor) => {
    editorRef.current = editor;
    editor.focus();
  };

  return (
    <div className={"flex flex-col "}>
      <Editor
        className={
          "pt-5 ml-5 shadow-lg " + (theme === "dark" ? "shadow-slate-800" : "")
        }
        height="83vh" // Editor height
        width="50vw"
        language={language} // Default language
        options={{
          minimap: { enabled: false }, // Disable minimap here
        }}
        theme={theme === "dark" ? "vs-dark" : "light"} // Editor theme ('vs-dark', 'light', etc.)
        onMount={onMount}
        value={value}
        onChange={(newvalue) => {
          setValue(newvalue);
          onType(newvalue);
        }}
      />
    </div>
  );
};

export default CodeEditor;
