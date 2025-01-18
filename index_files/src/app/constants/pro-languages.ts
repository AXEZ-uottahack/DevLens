import { createListCollection } from "@chakra-ui/react"

export const LANGUAGE_VERSIONS = {
    Javascript: "18.15.0",
    Typescript: "5.0.3",
    Python: "3.10.0",
    Java: "15.0.2",
    Csharp: "6.12.0",
    Php: "8.2.3",
}

export const language_keys = createListCollection({
    items: [
      { label: "Javascript", value: "18.15.0" },
      { label: "Typescript", value: "5.0.3" },
      { label: "Python", value: "3.10.0" },
      { label: "Java", value: "15.0.2" },
      { label: "Csharp", value: "6.12.0" },
      { label: "Php", value: "8.2.3" },
    ],
  })