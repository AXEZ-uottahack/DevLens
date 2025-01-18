import { Box, MenuContent, MenuItem, MenuRoot, MenuTrigger, Text } from "@chakra-ui/react"
import { LANGUAGE_VERSIONS } from "../constants/pro-languages"



const LanguageSelector = ({language,onSelect}) => {

    const languages = Object.entries(LANGUAGE_VERSIONS);

    return (
        <Box>
            <Text mb={2} fontSize='lg' ></Text>
            <MenuRoot>
                <MenuTrigger />
                <MenuContent>
                    {languages.map(([language, version]) => (
                        <MenuItem key={language} value="..." >{language}
                        &nbsp;
                        <Text as="span" color="gray.500" fontSize="sm">
                            {version}
                        </Text>
                        </MenuItem>
                    ))}
                    <MenuItem value="..." />
                </MenuContent>
            </MenuRoot>
        </Box>
    )
}

export default LanguageSelector