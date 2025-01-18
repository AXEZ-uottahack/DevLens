"use client";
<<<<<<< HEAD

=======
>>>>>>> 594e0dc162b92e2eac036921cd0d2410176b54be
import React, { useState, useRef } from "react";
import { Editor } from "@monaco-editor/react";
import { Box } from "@chakra-ui/react";
import LanguageSelector from "./LanguageSelector";

const CodeEditor: React.FC = () => {
  const editorRef = useRef(0);
  const [value, setValue] = useState<string | undefined>("");
  const [language, setLanguage] = useState<string>("Select a Language");

  const onMount = (editor: any) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language: string) => {
    setLanguage(language);
  };

  return (
<<<<<<< HEAD
    <Box className="flex flex-col w-6/12">
      <div id="editor-nav" className="flex flex-row flex-row-reverse ">
        <>{console.log(language)}</>
=======
    <Box className="flex flex-col">
      <div id="editor-nav" className="self-end">
>>>>>>> 594e0dc162b92e2eac036921cd0d2410176b54be
        <LanguageSelector language={language} onSelect={onSelect} />
      </div>
      <Editor
        height="90vh" // Editor height
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
    </Box>
  );
};

export default CodeEditor;
