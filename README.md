# DevLens

## Description
DevLens is a tool which allows users to generate diagrams and documentation from source code on the fly.  

It is a recurring story in the software development field to struggle when joining a new project or using a library because of the lack of documentation. 
Some tools exist for generating documentation from source code, but most CASE tools for diagramming project architectures and designs focus on going from models to code.  

## How it works
DevLens uses Gemini to infer details about the project based on the source code.  

It can be used to generate initial documentation, but it's strongest use case is in maintaining documentation for parts of the software that are rapidly evolving, where human efforts are likely to be unable to keep up with changes.

## Goals
DevLens is currently under development.  

### Long-Term Goals
- Create extensions for popular IDEs like VSCode and Eclipse so that DevLens can be seamlessly integrated with developers' workflows.
- Generate diagrams for all 7 standard UML diagrams.
- Compare project files with requirements to analyse how well features are tied to requirements 

### Short-Term (Current) Project Goals
- Integrate with version control so only changes are analyzed for updates to the documentation and diagrams
- Add multi-file edit options in the online tool
- Review quality of generated content and refine prompts

## Getting Started
Want to see it in action? Try our web application proof of concept for the tool.
