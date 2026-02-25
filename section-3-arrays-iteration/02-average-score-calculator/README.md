# Average Score Calculator

## What it does
Enter a list of scores separated by commas and it calculates
the average and assigns a letter grade to the result.

## What I learned
- Calculating average by summing and dividing by length
- Chaining validation checks for range and type
- Combining sum and grade logic into separate functions
- Reusing the grade scale pattern from Section 1

## How to run
Open index.html in your browser.


**Test it with these values:**
- `85, 90, 78, 92, 88` → Average 86.60 — B
- `95, 98, 100` → Average 97.67 — A
- `50, 55, 60` → Average 55.00 — F
- `70, 80, 90` → Average 80.00 — B
- `101, 80` → Scores must be between 0 and 100
- `85, abc` → Please enter valid numbers
- empty → Please enter some scores