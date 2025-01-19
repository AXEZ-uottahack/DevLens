import { GoogleGenerativeAI } from "@google/generative-ai";
import { modes } from "@/app/constants/const";

const KEY = require("./key.json");

const genAI = new GoogleGenerativeAI(KEY.API_KEY);

const UML_Prompt = (p_lang, code) => {
  return `Analyze the following ${p_lang} code:
${code}
Generate a JSON representation of the UML class diagram:
Use the following structure:
JSON
{ "classes": [ { "name": "<name>", "attributes": [{ "type": "<type>", "modifier": "<modifier>", "name": "<attribute name>" }] }, ... ], "associations": [ { "start": "<class name>", "end": "<class name>", "start_m": "<multiplicity at start>", "end_m": "<multiplicity at end>", "bidir": <boolean (true if bidirectional, false otherwise)> }, ... ] }
Include class names, attributes (with types and modifiers), and associations with multiplicities.
Use the symbols '-' for private modifier, '+' for public modifier, '#' for protected, and the empty string for default.
If an association is bidirectional, represent it only once in the "associations" array.
Ensure the JSON representation is accurate and adheres to the specified structure.`;
};

const DOC_Prompt = (p_lang, code) => {
  return `Analyze the following ${p_lang} code:
${code}
Generate comprehensive documentation:
Describe the purpose of the class and its methods.
Explain the functionality of each method.
Identify any potential issues or areas for improvement.
Mention any design patterns used.
Ensure the analysis and documentation are accurate, comprehensive, and well-structured.`;
};

async function generate_documentation(func, p_lang, code) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  let prompt; // Declare prompt outside the blocks

  if (func == modes.DOC) {
    prompt = DOC_Prompt(p_lang, code);
  } else if (func == modes.GRAPH) {
    prompt = UML_Prompt(p_lang, code);
  }

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);

  return text;
}

// Export the run function for external access
export { generate_documentation };
