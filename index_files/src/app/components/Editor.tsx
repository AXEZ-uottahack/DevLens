"use client"
import React, { useState, useRef} from 'react';
import { Editor } from '@monaco-editor/react';
import { Box } from '@chakra-ui/react';
import LanguageSelector from './LanguageSelector';

const CodeEditor: React.FC = () => {
    const editorRef = useRef(0)
    const [value, setValue] = useState<string | undefined>('')
    const [language, setLanguage] = useState('')

    const onMount = (editor: any) => {
        editorRef.current = editor;
        editor.focus();
    }

    const onSelect = (language: any) => {
        setLanguage(language);
    };

  return (
    <Box>
        <LanguageSelector language={language} onSelect={onSelect}/>
    <Editor
      height="90vh" // Editor height
      defaultLanguage="python" // Default language
      defaultValue="// Start typing your code here..."
      theme="vs-dark" // Editor theme ('vs-dark', 'light', etc.)
      onMount={onMount}
      value={value}
      onChange={(value) => {
        setValue(value)
      }}    
    />
    </Box>
  );
};

export default CodeEditor;