import {Box, Text} from "@chakra-ui/react"
import { TiArrowSortedDown } from "react-icons/ti";
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
        <div className="flex gap-1 " >
            <Text mb={2} fontSize='lg'>Language: </Text>
            <MenuRoot >
            <MenuTrigger px={4} py={1}>
                <Text className="flex mb-2"cursor="pointer" paddingBottom="5" px={4} py={1} border="1px solid" borderColor="gray.300" borderRadius="md" fontSize='md'>
                    {language}
                    
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
        </div>
    )
}

export default LanguageSelector