import React from "react";
import Logo from "./Logo";
import LanguageSelector from "./LanguageSelector";
import { ColorModeButton, useColorMode } from "@/components/ui/color-mode";
import { Button } from "@/components/ui/button";
import { useTheme } from "../context/ThemeContext";
import { LuMoon, LuSun } from "react-icons/lu";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import { IconButton, Text } from "@chakra-ui/react";
import SvgIcon from "@mui/icons-material/Bedtime";

import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { modes } from "../page";

interface NavbarProps {
  language: string; // The current programming language
  onSelect: (language: string) => void; // Callback to update the selected language
  currentMode: modes;
  setCurrentMode: (mode: modes) => void;
  onAnalyzeClick: () => void; // callback for analyze button
}

const Navbar: React.FC<NavbarProps> = ({
  language,
  onSelect,
  currentMode,
  setCurrentMode,
  onAnalyzeClick,
}) => {
  const { theme, toggleTheme } = useTheme();
  const textColor = theme === "dark" ? "white" : "black";
  const borderColor = theme === "dark" ? "gray.600" : "gray.300";
  return (
    <div className="grid grid-cols-2 items-center gap-x-5 p-2">
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
        <div className="flex items-center gap-3">
          <Text color={textColor} fontSize="lg">
            Mode:{" "}
          </Text>
          <MenuRoot>
            <MenuTrigger>
              <Text
                cursor="pointer"
                px={2}
                py={1}
                border="1px solid"
                borderColor={borderColor}
                fontSize="md"
                color={textColor}
                className={
                  theme === "dark"
                    ? "border-white hover:bg-white hover:text-black"
                    : "border-black hover:bg-black hover:text-white"
                }
              >
                {currentMode}
              </Text>
            </MenuTrigger>
            <MenuContent>
              {Object.values(modes).map((mode) => {
                return (
                  <MenuItem
                    key={mode}
                    value={"..."}
                    onClick={() => {
                      setCurrentMode(mode);
                    }}
                    style={{
                      padding: "8px 16px",
                      cursor: "pointer",
                      backgroundColor: "transparent", // Default
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "#f0f0f0")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "transparent")
                    }
                  >
                    {mode}
                  </MenuItem>
                );
              })}
            </MenuContent>
          </MenuRoot>
        </div>
        <div className="flex flex-row gap-2 justify-self-end">
          <button
            className={`border px-6 py-2 rounded-md transition-all ${
              theme === "dark"
                ? "border-white text-white hover:bg-white hover:text-black"
                : "border-black text-black hover:bg-black hover:text-white"
            }`}
            onClick={onAnalyzeClick}
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
