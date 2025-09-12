// Select and store the element with id btn, used to calculate bmi.
const btnEl = document.getElementById("btn");
// select and store the element with id bmi-result, where the result will be displayed
const bmiInputEl = document.getElementById("bmi-result");
// select and store the element with id weight-condition, extra information after bmi calculation is displayed here
const weightConditionEl = document.getElementById("weight-condition");

// initialize a function to calculate the bmi and update UI
function calculateBMI() {
    // select and store user input height value and convert it to meters.
  const heightValue = document.getElementById("height").value / 100;
  // select and store user input weight value
  const weightValue = document.getElementById("weight").value;

  // Calculate the BMI using the formula: weight (kg) / (height (m) * height (m))
  // heightValue * heightValue: Squares the height (in meters).
  const bmiValue = weightValue / (heightValue * heightValue);

  // Update the <input id="bmi-result"> element with the calculated BMI.
  bmiInputEl.value = bmiValue;

  // conditions check to categorize the BMI value.
  if (bmiValue < 18.5) {
    weightConditionEl.innerText = "You are Under weight!";
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    weightConditionEl.innerText = "You are of Normal weight!";
  } else if (bmiValue >= 25 && bmiValue <= 29.9) {
    weightConditionEl.innerText = "You are Overweight!";
  } else if (bmiValue >= 30) {
    weightConditionEl.innerText = "You are Obese!";
  }
}

// Attach a click event listener to the button (btnEl), so clicking it triggers the calculateBMI function.
btnEl.addEventListener("click", calculateBMI);
