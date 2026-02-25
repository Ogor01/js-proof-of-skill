# Sort Numbers in Ascending and Descending Order

## What it does
Enter numbers separated by commas and sort them
either ascending or descending with separate buttons.

## What I learned
- How JavaScript sort() works with a comparator function
- Why sort() without a comparator gives wrong results for numbers
- The difference between (a, b) => a - b and (a, b) => b - a
- Copying an array with spread before sorting to avoid mutation

## How to run
Open index.html in your browser.


**Test it with these values:**
- `5, 2, 8, 1, 9` ascending → 1, 2, 5, 8, 9
- `5, 2, 8, 1, 9` descending → 9, 8, 5, 2, 1
- `-3, 0, 7, -1` ascending → -3, -1, 0, 7
- `10, 9, 8` descending → 10, 9, 8
- empty → Please enter some numbers