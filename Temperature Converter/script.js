// These three variables store references to the DOM elements, allowing the script to read or update
// their values.


// Select a DOM element; the input field with id="celcius" for Celsius values.
const celsiusEl = document.getElementById("celsius");
// Select a DOM element; the input field with id="fahrenheit" for Fahrenheit values.
const fahrenheitEl = document.getElementById("fahrenheit");
// Select a DOM element; the input field with id="kelvin" for Kelvin values.
const kelvinEl = document.getElementById("kelvin");

// Define a function that handles temperature conversions when a user types in one of the input fields.
function computeTemp(event) {

  // event.target: Refers to the input element that changed (e.g., the Celsius input).
  // event.target.value: Gets the user-entered value (a string).
  // +event.target.value: Converts the string to a number using the unary plus operator (+).
  // For example, "25" becomes 25.
    const currentValue = +event.target.value;

    // Handle conversions when the Celsius input changes.
      switch (event.target.name) { // Check the name attribute of the changed input (here, "celsius").
    case "celsius":
      kelvinEl.value = (currentValue + 273.32).toFixed(2); // .toFixed(2): Rounds the result to two decimal places and returns a string.
      fahrenheitEl.value = (currentValue * 1.8 + 32).toFixed(2);
      break;
    case "fahrenheit":
      celsiusEl.value = ((currentValue - 32) / 1.8).toFixed(2);
      kelvinEl.value = ((currentValue - 32) / 1.8 + 273.32).toFixed(2);
      break;
    case "kelvin":
      celsiusEl.value = (currentValue - 273.32).toFixed(2);
      fahrenheitEl.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2);
      break;
    default:
      break;
  }
}
