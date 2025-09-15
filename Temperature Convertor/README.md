Temperature Converter Web Application.

This is a JavaScript-based web application that converts temperatures between Celsius, Fahrenheit, and Kelvin in real-time. Users enter a temperature value in one unit, and the application instantly updates the equivalent values in the other two units. The provided code snippet is part of an event handler that performs the conversions based on which input field (Celsius, Fahrenheit, or Kelvin) the user is editing.

Overview

The application likely consists of a single JavaScript file that interacts with an HTML page containing three input fields for Celsius, Fahrenheit, and Kelvin, identified by their `name` attributes. When a user types a value in one field, the JavaScript code converts it to the other two units and updates their respective input fields. The provided `switch` statement handles the conversion logic based on the input field’s `name`.

Code Explanation

The provided code is a `switch` statement within an assumed event handler function, likely triggered by an `input` or `change` event on temperature input fields. Below is the explanation of the code, assuming it’s part of a function like this:


1. Assumed Setup

- DOM Elements:
  - `celsiusEl`: References an input element with `id="celsius"` and `name="celsius"` for Celsius input.
  - `fahrenheitEl`: References an input element with `id="fahrenheit"` and `name="fahrenheit"` for Fahrenheit input.
  - `kelvinEl`: References an input element with `id="kelvin"` and `name="kelvin"` for Kelvin input.
- Event Handling:
  - The `switch` statement is part of an event handler function (`convertTemperature`) triggered by an `input` or `change` event on one of the input fields.
  - `event.target.name` identifies which field (Celsius, Fahrenheit, or Kelvin) triggered the event.
  - `currentValue` is the parsed numeric value from the input field (`parseFloat(event.target.value)`).

Purpose: These elements and the event handler connect the JavaScript to the HTML inputs and process user input for conversions.

2. The `switch` Statement

- Purpose: Converts the input temperature (`currentValue`) from one unit to the other two based on the input field’s `name` attribute.
- Cases:
  - `case "celsius"`:
    - Converts Celsius to Kelvin: `K = C + 273.32`.
    - Converts Celsius to Fahrenheit: `F = C * 1.8 + 32`.
    - Updates `kelvinEl.value` and `fahrenheitEl.value` with results rounded to 2 decimal places using `.toFixed(2)`.
  - `case "fahrenheit"`:
    - Converts Fahrenheit to Celsius: `C = (F - 32) / 1.8`.
    - Converts Fahrenheit to Kelvin: `K = (F - 32) / 1.8 + 273.32`.
    - Updates `celsiusEl.value` and `kelvinEl.value` with results rounded to 2 decimal places.
  - `case "kelvin"`:
    - Converts Kelvin to Celsius: `C = K - 273.32`.
    - Converts Kelvin to Fahrenheit: `F = (K - 273.32) * 1.8 + 32`.
    - Updates `celsiusEl.value` and `fahrenheitEl.value` with results rounded to 2 decimal places.
  - `default`: Does nothing if the input field’s `name` doesn’t match (unlikely given controlled inputs).
- Rounding: `.toFixed(2)` ensures outputs are displayed with two decimal places for readability (e.g., `23.45`).

Purpose: Performs real-time temperature conversions and updates the corresponding input fields based on the user’s input.


How It Works

1. HTML Setup: The code assumes an HTML file with:
   - Three `<input>` elements with `id="celsius"`, `id="fahrenheit"`, and `id="kelvin"`, each with corresponding `name` attributes (`celsius`, `fahrenheit`, `kelvin`).
   - Optional CSS for styling the inputs.

2. User Interaction:
   - User types a temperature in one input field (e.g., 25 in the Celsius field).
   - The `input` event triggers `convertTemperature`, which uses the `switch` statement to identify the field and convert the value.
   - The other two fields are updated with the converted values (e.g., 25°C → 77°F, 298.15K).

3. Example Flow:
   - User types "25" in the Celsius input.
   - The `switch` case for `"celsius"` runs:
     - Kelvin: `25 + 273.32 = 298.32` → `kelvinEl.value = "298.32"`.
     - Fahrenheit: `25 * 1.8 + 32 = 77` → `fahrenheitEl.value = "77.00"`.
   - User types "98.6" in the Fahrenheit input:
     - Celsius: `(98.6 - 32) / 1.8 ≈ 37` → `celsiusEl.value = "37.00"`.
     - Kelvin: `(98.6 - 32) / 1.8 + 273.32 ≈ 310.15` → `kelvinEl.value = "310.15"`.
   - User types "300" in the Kelvin input:
     - Celsius: `300 - 273.32 = 26.68` → `celsiusEl.value = "26.68"`.
     - Fahrenheit: `(300 - 273.32) * 1.8 + 32 ≈ 80` → `fahrenheitEl.value = "80.00"`.