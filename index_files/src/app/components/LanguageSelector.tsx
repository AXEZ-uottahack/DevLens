import {Box, Text} from "@chakra-ui/react"
import {
    MenuContent,
    MenuItem,
    MenuRoot,
    MenuTrigger,
} from "@/components/ui/menu"

import { LANGUAGE_VERSIONS } from "../constants/pro-languages"

interface LanguageSelectorProps {
    language: string;
    onSelect: (language: string) => void;
}

const LanguageSelector = ({language,onSelect}: LanguageSelectorProps) => {

    const languages = Object.entries(LANGUAGE_VERSIONS);

    return (
        <Box>
            <Text mb={2} fontSize='lg' ></Text>
            <MenuRoot>
            <MenuTrigger>
                <Text cursor="pointer" px={2} py={1} border="1px solid" borderColor="gray.300" borderRadius="md">
                    {language || "Choose a language"}
                </Text>
            </MenuTrigger>

                <MenuContent>
                {languages.map(([language, version]) => (
                        <MenuItem key={language} value="..." onClick={() => onSelect(language)}>{language}
                        &nbsp;
                        <Text as="span" color="gray.500" fontSize="sm">
                            {version}
                        </Text>
                        </MenuItem>
                    ))}
                    
                </MenuContent>
            </MenuRoot>
        </Box>
    )
}

export default LanguageSelector