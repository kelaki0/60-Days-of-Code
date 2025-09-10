# Rock, Paper, Scissors Game

This is a JavaScript-based web application that implements a classic Rock, Paper, Scissors game. The player selects one of three options (rock, paper, or scissors) by clicking a button, and the computer randomly chooses its option. The application determines the winner of each round, updates the scores, and displays the result.

## Overview

The application consists of a single JavaScript file that interacts with an HTML page and optional CSS for styling. It features buttons for the player to choose "rock," "paper," or "scissors," displays the outcome of each round, and tracks the player's and computer's scores.

## Code Explanation

Below is a detailed breakdown of the JavaScript code, explaining each component and its functionality.

1. Variable Declarations and Setup

const buttons = document.querySelectorAll("button");
const resultEl = document.getElementById("result");
const playerScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");
let playerScore = 0;
let computerScore = 0;

- `buttons`: Uses `document.querySelectorAll("button")` to select all `<button>` elements in the HTML, which represent the player's choices (rock, paper, scissors).
- `resultEl`: References the HTML element with `id="result"` to display the outcome of each round (e.g., "You win! Rock beats Scissors").
- `playerScoreEl`: References the HTML element with `id="user-score"` to display the player's current score.
- `computerScoreEl`: References the HTML element with `id="computer-score"` to display the computer's current score.
- `playerScore` and `computerScore`: Variables initialized to 0 to track the scores for the player and computer, respectively.

Purpose: These variables connect the JavaScript to the HTML DOM and manage the game state.

2. Button Event Listeners

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const result = playRound(button.id, computerPlay());
    resultEl.textContent = result;
  });
});

- `buttons.forEach`: Iterates over all button elements retrieved by `querySelectorAll`.
- `button.addEventListener("click", ...)`: Attaches a click event listener to each button. When a button is clicked, the callback function executes.
- Callback Function:
  - Calls `playRound(button.id, computerPlay())`:
    - `button.id` is the player's choice (e.g., "rock," "paper," or "scissors," assuming the buttons have these IDs).
    - `computerPlay()` generates the computer's random choice.
  - Stores the result of `playRound` in `result`.
  - Updates `resultEl.textContent` to display the round's outcome (e.g., "You win! Rock beats Scissors").

Purpose: Links each button click to a game round, triggering the game logic and updating the display.

3. The `computerPlay` Function

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

- `choices`: An array containing the possible choices: `["rock", "paper", "scissors"]`.
- `randomChoice`: Generates a random index (0, 1, or 2) using `Math.random()` (returns a number between 0 and 1) multiplied by `choices.length` (3) and rounded down with `Math.floor`.
- Returns: The randomly selected choice from the `choices` array (e.g., "rock").

Purpose: Generates a random choice for the computer to simulate its move.

4. The `playRound` Function

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    playerScoreEl.textContent = playerScore;
    return "You win! " + playerSelection + " beats " + computerSelection;
  } else {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    return "You lose! " + computerSelection + " beats " + playerSelection;
  }
}

- Parameters: Takes `playerSelection` (e.g., "rock") and `computerSelection` (e.g., "scissors") as inputs.
- Logic:
  - Tie Case: If `playerSelection` equals `computerSelection`, returns "It's a tie!".
  - Win Case: Checks if the player wins using the rules of Rock, Paper, Scissors:
    - Rock beats Scissors (`playerSelection === "rock" && computerSelection === "scissors"`)
    - Paper beats Rock
    - Scissors beats Paper
    - If any condition is true, increments `playerScore`, updates `playerScoreEl.textContent`, and returns a win message (e.g., "You win! Rock beats Scissors").
  - Lose Case: If neither a tie nor a win, the computer wins. Increments `computerScore`, updates `computerScoreEl.textContent`, and returns a loss message (e.g., "You lose! Scissors beats Paper").
- String Concatenation: Uses `+` to build the result message, combining the outcome with the selections.

Purpose: Determines the winner of a round, updates the appropriate score, and returns a descriptive result.

How It Works

1. HTML Setup: The code assumes an HTML file with:
   - Buttons with IDs `rock`, `paper`, and `scissors` (e.g., `<button id="rock">Rock</button>`).
   - Elements with IDs `result`, `user-score`, and `computer-score` to display the round outcome and scores.
   - Optional CSS for styling.

2. User Interaction:
   - Clicking a button (e.g., "Rock") triggers a round.
   - The computer randomly selects its choice (e.g., "Scissors").
   - The `playRound` function determines the winner, updates the scores, and displays the result.
   - The scores and result are updated in real-time on the page.

3. Example Flow:
   - User clicks the "Rock" button.
   - Computer randomly selects "Scissors".
   - `playRound("rock", "scissors")` determines the player wins, increments `playerScore`, and updates `playerScoreEl` to `1`.
   - `resultEl` displays "You win! Rock beats Scissors".
   - If the user clicks "Paper" and the computer selects "Scissors", the computer wins, updating `computerScore` and displaying "You lose! Scissors beats Paper".
