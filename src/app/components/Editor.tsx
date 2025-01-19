"use client";
import React, { useState, useRef } from "react";
import { Editor } from "@monaco-editor/react";
import { Box } from "@chakra-ui/react";
import LanguageSelector from "./LanguageSelector";

interface EditorProps {
  language: string
}

const CodeEditor: React.FC<EditorProps> = ({language} : EditorProps) => {
  const editorRef = useRef(null);
  const [value, setValue] = useState<string | undefined>("");

  const onMount = (editor: any) => {
    editorRef.current = editor;
    editor.focus();
  };


  return (
    <div className="flex flex-col">
      <Editor
        height="100vh" // Editor height
        width="50vw"
        language={language} // Default language
        defaultValue="// Start typing your code here..."
        options={{
          minimap: { enabled: false }, // Disable minimap here
        }}
        theme="vs-dark" // Editor theme ('vs-dark', 'light', etc.)
        onMount={onMount}
        value={value}
        onChange={(value) => {
          setValue(value);
        }}
      />
    </div>
  );
};

export default CodeEditor;
