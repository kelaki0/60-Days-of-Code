# Stopwatch Web Application

This is a JavaScript-based web application that implements a stopwatch, tracking elapsed time with millisecond precision. The application includes buttons to start, stop, and reset the stopwatch, and displays the time in an `HH:MM:SS.mm` format (hours, minutes, seconds, and hundredths of a second).

Overview

The application consists of a single JavaScript file that interacts with an HTML page and optional CSS for styling. The stopwatch starts when the user clicks "Start," pauses when they click "Stop," and resets to `00:00:00` when they click "Reset." The timer updates every 10 milliseconds for smooth display of elapsed time.

Code Explanation

Below is a detailed breakdown of the JavaScript code, explaining each component and its functionality.

1. Variable Declarations and Setup
const timerEl = document.getElementById("timer");
const startButtonEl = document.getElementById("start");
const stopButtonEl = document.getElementById("stop");
const resetButtonEl = document.getElementById("reset");

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

- `timerEl`: References the HTML element with `id="timer"` to display the elapsed time (e.g., `00:01:23.45`).
- `startButtonEl`, `stopButtonEl`, `resetButtonEl`: Reference the HTML buttons with IDs `start`, `stop`, and `reset`, respectively, used to control the stopwatch.
- `startTime`: Stores the timestamp (in milliseconds) when the stopwatch starts or resumes, initialized to 0.
- `elapsedTime`: Tracks the total elapsed time in milliseconds, initialized to 0.
- `timerInterval`: Stores the ID of the `setInterval` timer to allow stopping or resetting the stopwatch, initially undefined.

Purpose: These variables connect the JavaScript to the HTML DOM and manage the stopwatch's state.

2. The `startTimer` Function
function startTimer() {
  startTime = Date.now() - elapsedTime;

  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    timerEl.textContent = formatTime(elapsedTime);
  }, 10);

  startButtonEl.disabled = true;
  stopButtonEl.disabled = false;
}

- `startTime = Date.now() - elapsedTime`: Sets `startTime` to the current timestamp (`Date.now()`) minus any previously accumulated `elapsedTime`. This allows the stopwatch to resume from where it left off if paused.
- `timerInterval = setInterval(...)`: Starts a timer that runs every 10 milliseconds, updating `elapsedTime` by subtracting `startTime` from the current timestamp and updating the display with `formatTime(elapsedTime)`.
- `startButtonEl.disabled = true`: Disables the "Start" button to prevent multiple intervals from running concurrently.
- `stopButtonEl.disabled = false`: Enables the "Stop" button to allow pausing the stopwatch.

Purpose: Starts or resumes the stopwatch, updating the display every 10 milliseconds and managing button states.

3. The `formatTime` Function
function formatTime(elapsedTime) {
  const milliseconds = Math.floor((elapsedTime % 1000) / 10);
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  return (
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
    ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    ":" +
    (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
    "." +
    (milliseconds > 9 ? milliseconds : "0" + milliseconds)
  );
}

- Calculations:
  - `milliseconds`: Extracts hundredths of a second by taking the remainder of `elapsedTime` modulo 1000 (milliseconds in a second), dividing by 10, and rounding down (e.g., 456ms → 45).
  - `seconds`: Extracts seconds by taking the remainder modulo 60,000 (milliseconds in a minute) and dividing by 1000.
  - `minutes`: Extracts minutes by taking the remainder modulo 3,600,000 (milliseconds in an hour) and dividing by 60,000.
  - `hours`: Extracts hours by dividing `elapsedTime` by 3,600,000.
- Formatting:
  - Uses ternary operators to ensure two-digit formatting:
    - For `hours`, `minutes`, and `seconds`: If the value is greater than 9, use it as is; otherwise, prepend a "0" (e.g., `5` → `05`). If 0, use `"00"`.
    - For `milliseconds`: Ensures two digits (e.g., `7` → `07`).
  - Concatenates the values with colons and a decimal point to form `HH:MM:SS.mm` (e.g., `01:23:45.67`).

Purpose: Converts elapsed time (in milliseconds) into a formatted `HH:MM:SS.mm` string.

4. The `stopTimer` Function
function stopTimer() {
  clearInterval(timerInterval);
  startButtonEl.disabled = false;
  stopButtonEl.disabled = true;
}

- `clearInterval(timerInterval)`: Stops the timer by clearing the interval, pausing the stopwatch without resetting `elapsedTime`.
- `startButtonEl.disabled = false`: Enables the "Start" button to allow resuming.
- `stopButtonEl.disabled = true`: Disables the "Stop" button to indicate the stopwatch is paused.

Purpose: Pauses the stopwatch, preserving the current elapsed time and updating button states.

5. The `resetTimer` Function
function resetTimer() {
  clearInterval(timerInterval);

  elapsedTime = 0;
  timerEl.textContent = "00:00:00";

  startButtonEl.disabled = false;
  stopButtonEl.disabled = true;
}

- `clearInterval(timerInterval)`: Stops the timer if it’s running.
- `elapsedTime = 0`: Resets the elapsed time to 0.
- `timerEl.textContent = "00:00:00"`: Updates the display to show `00:00:00`.
- `startButtonEl.disabled = false`: Enables the "Start" button.
- `stopButtonEl.disabled = true`: Disables the "Stop" button.

Purpose: Resets the stopwatch to its initial state, clearing the elapsed time and updating the display.

6. Event Listeners
startButtonEl.addEventListener("click", startTimer);
stopButtonEl.addEventListener("click", stopTimer);
resetButtonEl.addEventListener("click", resetTimer);

- Attaches `click` event listeners to the `start`, `stop`, and `reset` buttons, linking them to their respective functions (`startTimer`, `stopTimer`, `resetTimer`).

Purpose: Enables user interaction with the stopwatch via button clicks.

How It Works

1. HTML Setup: The code assumes an HTML file with:
   - Buttons with IDs `start`, `stop`, and `reset`.
   - An element (e.g., `<div>`) with `id="timer"` to display the time.
   - Optional CSS for styling.

2. User Interaction:
   - Clicking "Start" begins the stopwatch, updating the display every 10 milliseconds.
   - Clicking "Stop" pauses the stopwatch, preserving the current time.
   - Clicking "Start" again resumes from the paused time.
   - Clicking "Reset" clears the time to `00:00:00` and stops the stopwatch.
   - The "Start" button is disabled while the stopwatch runs, and the "Stop" button is disabled when paused.

3. Example Flow:
   - User clicks "Start," and the timer begins (e.g., `00:00:00.00` → `00:00:01.23`).
   - After 5 seconds, user clicks "Stop" at `00:00:05.12`.
   - User clicks "Start" to resume from `00:00:05.12`.
   - User clicks "Reset," and the display returns to `00:00:00`.
