import { generate_documentation } from './gemini-fast.js';

// Example parameters
const func = "Documentation"; // or "UML"
const p_lang = "Java"; // Example language
// const code = "print('hello world!')"; // Example code



const javaCode = `public class Main {
    public static void main(String[] args) {
      int result = sum(5, 10);
      System.out.println(result);
    }
    public static int sum(int start, int end) {
      if (end > start) {
        return end + sum(start, end - 1);
      } else {
        return end;
      }
    }
  }`;
  

// Execute the run function with parameters
generate_documentation(func, p_lang, javaCode);
