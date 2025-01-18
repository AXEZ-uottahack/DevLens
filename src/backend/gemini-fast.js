import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

let p_lang; // Example value for the language variable

const UML_Prompt = (p_lang, code) => {return `Analyze the following ${p_lang} code:
${code}
Generate a JSON representation of the UML class diagram:
Use the following structure:
JSON
{ "classes": [ { "name": "<name>", "attributes": [{ "type": "<type>", "modifier": "<modifier>", "name": "<attribute name>" }] }, ... ], "associations": [ { "start": "<class name>", "end": "<class name>", "start_m": "<multiplicity at start>", "end_m": "<multiplicity at end>", "bidir": <boolean (true if bidirectional, false otherwise)> }, ... ] }
Include class names, attributes (with types and modifiers), and associations with multiplicities.
If an association is bidirectional, represent it only once in the "associations" array.
Ensure the JSON representation is accurate and adheres to the specified structure.`;}

const DOC_Prompt = (p_lang, code) => {return `Analyze the following ${p_lang} code:
${code}
Generate comprehensive documentation:
Describe the purpose of the class and its methods.
Explain the functionality of each method.
Identify any potential issues or areas for improvement.
Mention any design patterns used.
Ensure the analysis and documentation are accurate, comprehensive, and well-structured.`;}

async function generate_documentation(func, p_lang, code) {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    let prompt; // Declare prompt outside the blocks

    if (func == "Documentation") {
        prompt = DOC_Prompt(p_lang, code);
    } else if (func == "UML") {
        console.log("UML");
        prompt = UML_Prompt(p_lang, code);
    }

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
}

// Export the run function for external access
export { generate_documentation };

// Run the function if this script is executed directly
if (import.meta.url === new URL(import.meta.url).href) {
    generate_documentation("Documentation", "Python", "print('hello world!')"); // Example call
}
