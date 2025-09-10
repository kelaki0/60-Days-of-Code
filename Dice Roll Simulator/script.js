//using the document.getElementById method retrieve the DOM element (likely a <button>), which will trigger
// the dice roll when clicked, store a reference to the HTML element with the ID 'roll-button'
const buttonEl = document.getElementById("roll-button");

// reference an HTML element with the ID 'dice', which will display the visual representation of the dice face 
const diceEl = document.getElementById("dice");

// reference an HTML element with the ID 'roll-history', which will display the history of dice rolls. 
const rollHistoryEl = document.getElementById("roll-history");

// initialize an empty array ([]) to store the results of each dice roll (numbers 1–6). 
let historyList = [];

function rollDice() {
    //generate a random number between 0 (inclusive) and 1 (exclusive). Multiply by 6 to give a number between 
    // 0 and 5.999... Math.floor() rounds down to the nearest integer (0–5). Adding 1 shifts the range to 1–6, simulating a six-sided die.
  const rollResult = Math.floor(Math.random() * 6) + 1;

  // Call the getDiceFace function (defined later) with the rollResult (1–6) to get the corresponding Unicode character for
  // the dice face. The result is stored in diceFace
  const diceFace = getDiceFace(rollResult);

  // Update the content of the dice element (referenced by diceEl) to display the Unicode dice face.
  diceEl.innerHTML = diceFace;

  // Add the numerical result (1–6) of the current roll to the historyList array for tracking past rolls.
  historyList.push(rollResult);

  //Call the updateRollHistory function to refresh the roll history display based on the updated historyList.
  updateRollHistory();
}

// This function updates the roll history displayed on the page.
function updateRollHistory() {

    // Clear the current content of the roll-history element
  rollHistoryEl.innerHTML = "";

  // Loop through the historyList array, where each element is a previous roll result (1–6).
  for (let i = 0; i < historyList.length; i++) {

    // Create a new <li> (list item) element for each roll in the history.
    const listItem = document.createElement("li");

    // Set the content of the <li> element to show the roll number (e.g., "Roll 1") and the dice face.
    // The i + 1 ensures rolls are numbered starting from 1 (not 0).
    // getDiceFace(historyList[i]) converts the numerical roll result (e.g., 5) to its Unicode dice face
    listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(
      historyList[i]
    )}</span>`;

    // Append the newly created <li> element to the roll-history element, building the list of rolls.
    rollHistoryEl.appendChild(listItem);
  }
}

// this function maps a numerical roll result (1–6) to the corresponding Unicode character for a dice face.
function getDiceFace(rollResult) {

    // Use a switch statement to check the value of rollResult.
  switch (rollResult) {
    case 1:
      return "&#9856;";
    case 2:
      return "&#9857;";
    case 3:
      return "&#9858;";
    case 4:
      return "&#9859;";
    case 5:
      return "&#9860;";
    case 6:
      return "&#9861;";
    default:
      return "";
  }
}

buttonEl.addEventListener("click", () => {
  diceEl.classList.add("roll-animation");
  setTimeout(() => {
    diceEl.classList.remove("roll-animation");
    rollDice();
  }, 1000);
});
