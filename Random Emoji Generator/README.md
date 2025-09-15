Emoji Randomizer

Overview

The Emoji Randomizer is a lightweight web application that fetches a list of emojis from the Emoji API and displays a random emoji along with its Unicode name when a user clicks a button. The application uses vanilla JavaScript, HTML, and an external API to provide an interactive experience.

The code retrieves up to 1,500 emojis from the Emoji API, stores them in an array, and updates the button's text with a random emoji and a separate element with its Unicode name upon each button click.

Features

- Fetches emojis from the [Emoji API](https://emoji-api.com/).
- Displays a random emoji on a button when clicked.
- Shows the Unicode name of the selected emoji in a separate element.
- Simple and responsive user interface (assumes accompanying HTML and CSS).

Prerequisites

To run this project, you need:
- A modern web browser (e.g., Chrome, Firefox, Edge).
- An active internet connection to fetch data from the Emoji API.
- A valid API key from [Emoji API](https://emoji-api.com/) (the provided key in the code is assumed to be valid but may need replacement).


How It Works

1. Fetching Emojis:
   - The application uses the `fetch` API to retrieve emoji data from `https://emoji-api.com/emojis` with an access key.
   - The response is parsed as JSON, containing an array of emoji objects with properties like `character` (the emoji) and `unicodeName` (its description).

2. Storing Emojis:
   - The code loops through the first 1,500 emojis from the API response and stores each emoji's `character` and `unicodeName` in a local array (`emoji`).

3. Random Emoji Display:
   - When the button (`id="btn"`) is clicked, a random index is generated based on the length of the `emoji` array.
   - The button's text is updated to display the random emoji, and the element with `id="emoji-name"` is updated with the corresponding Unicode name.

Code Explanation

const btnEl = document.getElementById("btn");

- Retrieves the button element with `id="btn"` from the DOM and stores it in `btnEl` for later manipulation.

const emojiNameEl = document.getElementById("emoji-name");

- Retrieves the element with `id="emoji-name"` (e.g., a `<p>` tag) and stores it in `emojiNameEl` to display the emoji's Unicode name.

const emoji = [];

- Initializes an empty array `emoji` to store objects containing emoji characters and their Unicode names.

- Defines an asynchronous function `getEmoji` to fetch emoji data from the API.

- Uses the `fetch` API to make an HTTP GET request to the Emoji API, passing an access key.
- The `await` keyword pauses execution until the response is received.
- Stores the response in the `response` variable.


- Parses the response body as JSON and stores it in the `data` variable (implicitly global, not best practice).
- The `data` is an array of objects, each containing properties like `character` (the emoji) and `unicodeName` (e.g., "U+1F600" for 😁).

- Starts a loop to iterate 1,500 times to process the first 1,500 emojis from the API response.

- For each iteration, creates an object with two properties:
  - `emojiName`: The emoji character (e.g., 😁).
  - `emojiCode`: The Unicode name (e.g., "U+1F600").
- Pushes the object into the `emoji` array.

- Call the `getEmoji` function immediately to fetch and store emojis when the page loads.

- Adds a click event listener to the button (`btnEl`).
- The listener executes an arrow function when the button is clicked.

- Generates a random index (`randomNum`) between 0 and the length of the `emoji` array:
  - `Math.random()` returns a number between 0 (inclusive) and 1 (exclusive).
  - Multiplying by `emoji.length` scales it to the array size.
  - `Math.floor` rounds down to the nearest integer.

- Sets the button’s text content to the `emojiName` (the emoji character) of the randomly selected emoji object.

- Sets the text content of the `emojiNameEl` element to the `emojiCode` (the Unicode name) of the same emoji.