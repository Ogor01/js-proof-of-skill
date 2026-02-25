# Filter Even Numbers

## What it does
Enter numbers separated by commas and filter out
either the even or odd numbers using separate buttons.

## What I learned
- Using the modulo operator to check even and odd
- Building a manual filter loop before using filter()
- Handling the case where no matching numbers exist
- Passing filter type as an argument to a shared function

## How to run
Open index.html in your browser.


**Test it with these values:**
- `1, 2, 3, 4, 5, 6` even → 2, 4, 6
- `1, 2, 3, 4, 5, 6` odd → 1, 3, 5
- `2, 4, 6, 8` odd → No odd numbers found
- `-4, -3, -2, -1` even → -4, -2
- empty → Please enter some numbers