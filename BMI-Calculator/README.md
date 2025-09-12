BMI Calculator

This is a JavaScript-based web application that calculates a user's Body Mass Index (BMI) based on their height and weight inputs. The application includes input fields for height (in centimeters) and weight (in kilograms), a button to trigger the calculation, and displays the BMI result along with a weight condition (e.g., Underweight, Normal, Overweight, or Obese).

Overview

The application consists of a single JavaScript file that interacts with an HTML page and a CSS for styling. When the user enters their height and weight and clicks a button, the app calculates the BMI, displays the numerical result, and indicates the corresponding weight condition based on standard BMI categories.

Code Explanation

Below is a breakdown of the JavaScript code, explaining each component and its functionality.

1. Variable Declarations and Setup

- `btnEl`: References the HTML button with `id="btn"`, used to trigger the BMI calculation.
- `bmiInputEl`: References the HTML input element with `id="bmi-result"`, used to display the calculated BMI value.
- `weightConditionEl`: References the HTML element with `id="weight-condition"`, used to display the weight condition (e.g., "You are Normal weight!").

Purpose: These variables connect the JavaScript to the HTML DOM elements for user interaction and result display.

2. The `calculateBMI` Function

- Input Retrieval:
  - `heightValue`: Retrieves the height from the input element with `id="height"`, converts it from centimeters to meters by dividing by 100 (e.g., 170 cm → 1.7 m).
  - `weightValue`: Retrieves the weight from the input element with `id="weight"` (in kilograms).
- BMI Calculation:
  - Calculates BMI using the formula: `weight (kg) / (height (m) * height (m))`.
  - Stores the result in `bmiValue`.
- Display BMI:
  - Sets `bmiInputEl.value` to `bmiValue`, displaying the calculated BMI in the result input field.
- Weight Condition:
  - Uses conditional statements to determine the weight condition based on standard BMI categories:
    - Underweight: BMI < 18.5
    - Normal weight: 18.5 ≤ BMI ≤ 24.9
    - Overweight: 25 ≤ BMI ≤ 29.9
    - Obese: BMI ≥ 30
  - Updates `weightConditionEl.innerText` with the appropriate message (e.g., "You are Normal weight!").

Purpose: Calculates the BMI, displays the result, and categorizes the user’s weight condition based on the BMI value.

3. Button Event Listener

- Attaches a `click` event listener to the button (`btnEl`), triggering the `calculateBMI` function when clicked.

Purpose: Enables users to initiate the BMI calculation by clicking the button.

How It Works

1. HTML Setup: The code assumes an HTML file with:
   - Input elements with `id="height"` and `id="weight"` for entering height (cm) and weight (kg).
   - A button with `id="btn"` to trigger the calculation.
   - An input element with `id="bmi-result"` to display the BMI.
   - An element with `id="weight-condition"` to display the weight condition.
   - Optional CSS for styling.

2. User Interaction:
   - User enters their height (in cm) and weight (in kg) in the input fields.
   - Clicking the button calculates the BMI and updates the UI with the result and weight condition.
   - The BMI is shown in the `bmi-result` input, and the condition (e.g., "You are Normal weight!") is displayed.

3. Example Flow:
   - User enters height "170" (cm) and weight "70" (kg), then clicks the button.
   - BMI is calculated: `70 / (1.7 * 1.7) ≈ 24.22`.
   - The `bmi-result` input shows `24.22`.
   - The `weight-condition` element displays "You are of Normal weight!".
