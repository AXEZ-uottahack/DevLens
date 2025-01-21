import {  Text } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";

import { LANGUAGE_VERSIONS } from "../constants/pro-languages";
import { useTheme } from "../context/ThemeContext";

interface LanguageSelectorProps {
  language: string;
  onSelect: (language: string) => void;
}

const LanguageSelector = ({ language, onSelect }: LanguageSelectorProps) => {
  const languages = Object.entries(LANGUAGE_VERSIONS);
  const { theme } = useTheme();

  // Define colors based on the theme
  const textColor = theme === "dark" ? "white" : "black";
  const borderColor = theme === "dark" ? "gray.600" : "gray.300";

  return (
    <div className="flex text-center gap-2">
      <Text color={textColor} fontSize="lg">
        Language:{" "}
      </Text>
      <MenuRoot>
        <MenuTrigger>
          <Text
            cursor="pointer"
            px={4}
            py={1}
            border="1px solid"
            borderColor={borderColor}
            borderRadius="md"
            fontSize="md"
            color={textColor}
            className={
              theme === "dark"
                ? "border-white hover:bg-white hover:text-black"
                : "border-black hover:bg-black hover:text-white"
            }
          >
            {language}
          </Text>
        </MenuTrigger>

        <MenuContent>
          {languages.map(([language, version]) => (
            <MenuItem
              key={language}
              value="..."
              onClick={() => onSelect(language)}
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
              {language}
              &nbsp;
              <Text as="span" color="gray.500" fontSize="sm">
                {version}
              </Text>
            </MenuItem>
          ))}
        </MenuContent>
      </MenuRoot>
    </div>
  );
};

export default LanguageSelector;
