# Purpose
Create a parser-grammer for FoxDot to be used by evomusic: Genetic Algorithm interface for FoxDot.

The parser is not exhaustive but functions well for use-cases

## How to edit grammer.peg

1. First run ```npm install``` in the directory to install dependencies.
2. Use canopy.js to edit grammer.peg 
3. Compile using ```canopy grammer.peg``` 
4. The grammar is stored in grammar.js. Use this file as a module in your JS project to parse your grammar
5. Code in app.js helps you test FoxDot syntax and the parsed result