Below is the detailed explanation of the dice-rolling JavaScript code 

# Dice Roller Web Application

This is a simple JavaScript-based dice-rolling web application that simulates rolling a six-sided die, displays the result as a Unicode dice face, and maintains a history of all rolls. The application includes a button to trigger rolls, a visual dice display with animation, and a list of previous rolls.

## Overview

The application consists of a single JavaScript file that interacts with an HTML page and CSS for styling. When the user clicks the "Roll Dice" button, the dice animates, a random number (1–6) is generated, the corresponding dice face (e.g., ⚅) is displayed, and the roll is added to a history list.

## Code Explanation

Below is a detailed breakdown of the JavaScript code, explaining each component and its functionality.

### 1. Variable Declarations and Setup

const buttonEl = document.getElementById("roll-button");
const diceEl = document.getElementById("dice");
const rollHistoryEl = document.getElementById("roll-history");
let historyList = [];
```

- `buttonEl`: References the HTML button with `id="roll-button"`, used to trigger dice rolls.
- `diceEl`: References the HTML element with `id="dice"`, which displays the Unicode dice face (e.g., ⚄).
- `rollHistoryEl`: References the HTML element with `id="roll-history"`, typically a `<ul>`, to show the roll history.
- `historyList`: An array to store the numerical results (1–6) of each roll.

Purpose: These variables connect the JavaScript to the HTML DOM and store roll history.

2. The `rollDice` Function

function rollDice() {
  const rollResult = Math.floor(Math.random() * 6) + 1;
  const diceFace = getDiceFace(rollResult);
  diceEl.innerHTML = diceFace;
  historyList.push(rollResult);
  updateRollHistory();
}

- `rollResult`: Generates a random number from 1 to 6 using `Math.random()` and `Math.floor()`.
- `diceFace`: Calls `getDiceFace` to convert the numerical result into a Unicode dice face.
- `diceEl.innerHTML`: Updates the dice element to display the dice face.
- `historyList.push`: Adds the roll result to the `historyList` array.
- `updateRollHistory`: Calls the function to refresh the roll history display.

Purpose: Handles the logic of rolling the dice, updating the display, and storing the result.

3. The `updateRollHistory` Function

function updateRollHistory() {
  rollHistoryEl.innerHTML = "";
  for (let i = 0; i < historyList.length; i++) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(historyList[i])}</span>`;
    rollHistoryEl.appendChild(listItem);
  }
}

- `rollHistoryEl.innerHTML = ""`: Clears the current history to avoid duplicates.
- Loop: Iterates through `historyList` to create a new `<li>` for each roll.
- `listItem.innerHTML`: Sets the content of each list item to show the roll number (e.g., "Roll 1") and the dice face.
- `rollHistoryEl.appendChild`: Appends each `<li>` to the history element.

Purpose: Rebuilds the roll history list, displaying each roll with its number and dice face.

4. The `getDiceFace` Function

function getDiceFace(rollResult) {
  switch (rollResult) {
    case 1:
      return "&#9856;"; // ⚀
    case 2:
      return "&#9857;"; // ⚁
    case 3:
      return "&#9858;"; // ⚂
    case 4:
      return "&#9859;"; // ⚃
    case 5:
      return "&#9860;"; // ⚄
    case 6:
      return "&#9861;"; // ⚅
    default:
      return "";
  }
}

- Uses a `switch` statement to map a numerical roll (1–6) to its Unicode dice face (⚀ to ⚅).
- Returns an empty string for invalid inputs (though not expected in this context).

Purpose: Converts numerical roll results into visual Unicode dice faces.

5. Event Listener for the Roll Button

buttonEl.addEventListener("click", () => {
  diceEl.classList.add("roll-animation");
  setTimeout(() => {
    diceEl.classList.remove("roll-animation");
    rollDice();
  }, 1000);
});

- Attaches a `click` event listener to the "roll" button.
- Adds the `roll-animation` CSS class to the dice element to trigger an animation.
- After a 1-second delay (via `setTimeout`), removes the animation class and calls `rollDice`.

Purpose: Creates a smooth user experience with a 1-second animation before displaying the roll result.

How It Works

1. HTML Setup: The code assumes an HTML file with:
   - A `<button id="roll-button">` for triggering rolls.
   - A `<div id="dice">` for displaying the dice face.
   - A `<ul id="roll-history">` for showing the roll history.
   - A CSS file with a `roll-animation` class for the animation effect.

2. User Interaction:
   - Clicking the "Roll Dice" button triggers the animation.
   - After 1 second, a random roll is generated, the dice face is displayed, and the history is updated.

3. Example Flow:
   - User clicks the button.
   - Dice animates (e.g., shakes) for 1 second.
   - A random roll (e.g., 5) is generated, displaying ⚄.
   - The roll is added to `historyList`, and the history shows, e.g., `<li>Roll 1: <span>⚄</span></li>`.