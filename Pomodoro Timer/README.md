# Timer Web Application

This is a simple JavaScript-based timer web application that implements a countdown timer, starting at 25 minutes (1500 seconds). The application includes buttons to start, stop, and reset the timer, and displays the remaining time in a `MM:SS` format. When the timer reaches zero, it alerts the user and resets to the initial duration.

## Overview

The application consists of a single JavaScript file that interacts with an HTML page and optional CSS for styling. The timer counts down from 1500 seconds (25 minutes), updates the display every second, and can be controlled using "Start," "Stop," and "Reset" buttons.

## Code Explanation

Below is a detailed breakdown of the JavaScript code, explaining each component and its functionality.

### 1. Variable Declarations and Setup

const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");

let interval;
let timeLeft = 1500;
```

- `startEl`, `stopEl`, `resetEl`: These constants reference HTML buttons with IDs `start`, `stop`, and `reset`, respectively, using `document.getElementById`. These buttons control the timer's start, stop, and reset functionality.
- `timerEl`: References the HTML element with `id="timer"`, which displays the formatted time (e.g., `25:00`).
- `interval`: A variable to store the ID of the `setInterval` timer, allowing it to be cleared when stopping or resetting. Initially undefined.
- `timeLeft`: Stores the remaining time in seconds, initialized to 1500 (25 minutes).

Purpose: These variables connect the JavaScript to the HTML DOM and manage the timer's state.

2. The `updateTimer` Function

function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  timerEl.innerHTML = formattedTime;
}

- `minutes`: Calculates the number of minutes by dividing `timeLeft` by 60 and rounding down using `Math.floor`.
- `seconds`: Calculates the remaining seconds using the modulo operator (`%`) to get the remainder after dividing by 60.
- `formattedTime`: Formats the time as `MM:SS`, where:
  - `minutes.toString().padStart(2, "0")` ensures minutes are displayed with two digits (e.g., `05` instead of `5`).
  - `seconds.toString().padStart(2, "0")` ensures seconds are displayed with two digits.
  - The template literal combines them with a colon (e.g., `25:00`).
- `timerEl.innerHTML`: Updates the `timer` element's content to display the formatted time.

Purpose: Converts the remaining seconds into a `MM:SS` format and updates the display.

3. The `startTimer` Function

function startTimer() {
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      clearInterval(interval);
      alert("Time's up!");
      timeLeft = 1500;
      updateTimer();
    }
  }, 1000);
}

- `interval = setInterval(...)`: Starts a timer that executes the callback function every 1000 milliseconds (1 second).
- Callback Function:
  - Decrements `timeLeft` by 1.
  - Calls `updateTimer` to refresh the display.
  - Checks if `timeLeft` is 0:
    - If true, clears the interval using `clearInterval(interval)` to stop the timer.
    - Shows an alert ("Time's up!").
    - Resets `timeLeft` to 1500 seconds (25 minutes).
    - Calls `updateTimer` to update the display to `25:00`.

Purpose: Starts the countdown, updates the display every second, and handles the timer reaching zero.

4. The `stopTimer` Function

function stopTimer() {
  clearInterval(interval);
}

- `clearInterval(interval)`: Stops the timer by clearing the interval stored in `interval`, pausing the countdown without resetting `timeLeft`.

Purpose: Pauses the timer, preserving the current `timeLeft` value.

5. The `resetTimer` Function

function resetTimer() {
  clearInterval(interval);
  timeLeft = 1500;
  updateTimer();
}

- `clearInterval(interval)`: Stops the timer if it’s running.
- `timeLeft = 1500`: Resets the remaining time to 1500 seconds (25 minutes).
- `updateTimer()`: Updates the display to show `25:00`.

Purpose: Resets the timer to its initial state, stopping any active countdown.

6. Event Listeners

startEl.addEventListener("click", startTimer);
stopEl.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTimer);

- Attaches `click` event listeners to the `start`, `stop`, and `reset` buttons, linking them to their respective functions (`startTimer`, `stopTimer`, `resetTimer`).

Purpose: Enables user interaction with the timer via button clicks.

How It Works

1. HTML Setup: The code assumes an HTML file with:
   - Buttons with IDs `start`, `stop`, and `reset`.
   - An element (e.g., `<div>`) with `id="timer"` to display the time.
   - Optional CSS for styling the timer display or buttons.

2. User Interaction:
   - Clicking "Start" begins the countdown from 25:00, updating every second.
   - Clicking "Stop" pauses the countdown, preserving the current time.
   - Clicking "Reset" stops the countdown and resets the timer to 25:00.
   - When the timer reaches 00:00, an alert is shown, and it resets to 25:00.

3. Example Flow:
   - User clicks "Start."
   - Timer counts down from `25:00`, updating the display (e.g., `24:59`, `24:58`).
   - User clicks "Stop" at `20:30`, pausing the timer.
   - User clicks "Start" to resume from `20:30`.
   - User clicks "Reset" to return to `25:00`.
   - If the timer reaches `00:00`, it alerts "Time's up!" and resets to `25:00`.
