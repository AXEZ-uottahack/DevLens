import React from "react";
import Logo from "./Logo";
import LanguageSelector from "./LanguageSelector";
import { ColorModeButton, useColorMode } from "@/components/ui/color-mode";
<<<<<<< HEAD
import { Button } from "@/components/ui/button";
=======
import { Switch } from "@/components/ui/switch";
import { Box, Text } from "@chakra-ui/react";
>>>>>>> 8987107f2884bdd2db68af52fc9f0e2b1f697922

interface NavbarProps {
  language: string; // The current programming language
  onSelect: (language: string) => void; // Callback to update the selected language
}

const Navbar: React.FC<NavbarProps> = ({ language, onSelect }) => {
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
<<<<<<< HEAD
        <Button>Analyze </Button>
        <ColorModeButton/>
        
=======
        <Text className="pt-1">{isDark ? "Dark Mode" : "Light Mode"}</Text>
        <ColorModeButton />
>>>>>>> 8987107f2884bdd2db68af52fc9f0e2b1f697922
      </div>
    </div>
  );
};

export default Navbar;
