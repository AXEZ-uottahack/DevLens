import React from "react";
import Logo from "./Logo";
import LanguageSelector from "./LanguageSelector";
import { ColorModeButton, useColorMode } from "@/components/ui/color-mode";
import { Button } from "@/components/ui/button";
import { useTheme } from "../context/ThemeContext";
import { LuMoon, LuSun } from "react-icons/lu";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import { IconButton } from "@chakra-ui/react";
import SvgIcon from "@mui/icons-material/Bedtime";

interface NavbarProps {
  language: string; // The current programming language
  onSelect: (language: string) => void; // Callback to update the selected language
}

const Navbar: React.FC<NavbarProps> = ({ language, onSelect }) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="grid grid-cols-2 items-center gap-x-5">
      <div className="grid grid-cols-2 items-center">
        <Logo size="text-2xl" theme={theme} />
        <div
          id="editor-nav"
          className="flex justify-end content-center text-center"
        >
          <LanguageSelector language={language} onSelect={onSelect} />
        </div>
      </div>

      <div className="grid grid-cols-2 items-center">
        <div>
          <button
            className={`border px-6 py-2 rounded-md transition-all ${
              theme === "dark"
                ? "border-white text-white hover:bg-white hover:text-black"
                : "border-black text-black hover:bg-black hover:text-white"
            }`}
          >
            Documentation
          </button>
        </div>
        <div className="flex flex-row gap-2 justify-self-end">
          <button
            className={`border px-6 py-2 rounded-md transition-all ${
              theme === "dark"
                ? "border-white text-white hover:bg-white hover:text-black"
                : "border-black text-black hover:bg-black hover:text-white"
            }`}
          >
            Analyze
          </button>
          <IconButton
            onClick={toggleTheme}
            variant="ghost"
            aria-label="Toggle color mode"
            size="sm"
            css={{
              _icon: {
                width: "5",
                height: "5",
                color: `${theme === "dark" ? "white" : "black"}`,
              },
            }}
          >
            {theme === "dark" ? <LuMoon /> : <LuSun />}
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
