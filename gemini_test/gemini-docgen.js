import { generate_documentation } from './gemini-fast.js';

// Example parameters
const func = "Documentation"; // or "UML"
const p_lang = "Python"; // Example language
const code = "print('hello world!')"; // Example code

// Execute the run function with parameters
generate_documentation(func, p_lang, code);
