import React from "react";
import Logo from "./Logo";
import LanguageSelector from "./LanguageSelector";
import { ColorModeButton, useColorMode } from "@/components/ui/color-mode";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  language: string; // The current programming language
  onSelect: (language: string) => void; // Callback to update the selected language
  onAnalyzeClick: () => void;  // callback for analyze button
}

const Navbar: React.FC<NavbarProps> = ({ language, onSelect, onAnalyzeClick}) => {
  const { colorMode, toggleColorMode } = useColorMode(); // Hook for light/dark mode
  const isDark = colorMode === "dark";
  return (
    <div className="flex flex-row items-center justify-between p-3 text-white w-full">
      <Logo size="text-2xl" theme="Dark" />
      <div
        id="editor-nav"
        className="absolute right-1/2  flex content-center text-center"
      >
        <LanguageSelector language={language} onSelect={onSelect} />
      </div>
      <div className="flex flex-row gap-2">
        <Button className="pb-1" onClick={onAnalyzeClick}>Analyze </Button>
        <ColorModeButton />
      </div>
    </div>
  );
};

export default Navbar;
