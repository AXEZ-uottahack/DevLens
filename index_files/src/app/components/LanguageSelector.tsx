import { Box, Text } from "@chakra-ui/react";
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select";

import { language_keys } from "../constants/pro-languages";

interface LanguageSelectorProps {
  language: string;
  onSelect: (language: string) => void;
}

const LanguageSelector = ({ language, onSelect }: LanguageSelectorProps) => {
  return (
    <Box className="flex gap-2 items-center">
      <SelectRoot collection={language_keys} width="7rem">
        <SelectTrigger>
          <SelectValueText placeholder="Language" />
        </SelectTrigger>
        <SelectContent>
          {language_keys.items.map((language) => (
            <SelectItem item={language} key={language.value}>
              {language.label}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectRoot>
    </Box>
  );
};

export default LanguageSelector;
