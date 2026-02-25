# Count Value Appearances in an Array

## What it does
Enter a list of values and a search term.
It counts how many times the search term appears in the list.
Case insensitive — Apple and apple count as the same.

## What I learned
- Manual counting loop with a comparison
- Case insensitive comparison with toLowerCase()
- Handling zero results differently from found results
- Two input fields working together

## How to run
Open index.html in your browser.

**Test it with these values:**
- `apple, banana, apple, orange, apple` search `apple` → appears 3 times
- `apple, banana, apple` search `Apple` → appears 2 times (case insensitive)
- `1, 2, 3, 2, 2` search `2` → appears 3 times
- `apple, banana` search `grape` → not found
- empty fields → Please fill in both fields