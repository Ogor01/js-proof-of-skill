# Username Formatter

## What it does
Takes a full name and converts it into a clean formatted username.
Example: "Charles Timothy" becomes "@charles_timothy"

## What I learned
- String methods: trim(), toLowerCase(), replace()
- Using regex to replace spaces with underscores
- Guard clauses for empty input

## How to run
Open index.html in your browser.


**Test it by typing these inputs:**
- `Charles Timothy` → should give `@charles_timothy`
- `  John   Doe  ` → should give `@john_doe` (extra spaces removed)
- empty input → should say "Please enter a name"