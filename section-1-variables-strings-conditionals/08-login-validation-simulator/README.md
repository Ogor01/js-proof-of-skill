# Login Validation Simulator

## What it does
Simulates a login form with username and password validation.
Checks for empty fields, minimum length and correct credentials.
Valid credentials: username = admin, password = password123

## What I learned
- Validating multiple inputs in sequence
- Storing credentials as constants
- Why you trim username but not password
- Guard clauses for layered validation

## How to run
Open index.html in your browser.
Use username: admin and password: password123 to login successfully.


**Test it with these values:**
- Empty fields → Please fill in all fields
- Username `ab` → Username must be at least 3 characters
- Password `123` → Password must be at least 6 characters
- Wrong credentials → Invalid username or password
- `admin` / `password123` → Login Successful!

