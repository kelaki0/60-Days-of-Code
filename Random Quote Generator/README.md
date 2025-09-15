Random Quote Generator

This is a JavaScript-based web application that fetches and displays a random quote and its author from the Quotable API. The application includes a button to trigger the fetching of a new quote, and it displays the quote and author name on the page, with loading states and error handling for a smooth user experience. The app fetches a quote automatically when the page loads.

Overview

The application consists of a single JavaScript file that interacts with an HTML page and a CSS for styling. When the user clicks the "Get a quote" button or when the page loads, the app fetches a random quote from the Quotable API, displays a loading message, and updates the UI with the quote and author or an error message if the request fails.

Code Explanation

Below is a detailed breakdown of the JavaScript code, explaining each component and its functionality.

1. Variable Declarations and Setup

- `btnEl`: References the HTML button with `id="btn"`, used to trigger fetching a new quote.
- `quoteEl`: References the HTML element with `id="quote"`, where the fetched quote text is displayed.
- `authorEl`: References the HTML element with `id="author"`, where the quote’s author is displayed.
- `apiURL`: Stores the URL for the Quotable API endpoint (`https://api.quotable.io/random`), which returns a random quote object.

Purpose: These variables connect the JavaScript to the HTML DOM elements and define the API endpoint.

2. The `getQuote` Function

- Async/Await: The function is marked `async` to handle asynchronous API requests using `await`.
- Try-Catch Block: Handles potential errors (e.g., network issues or API failures).
- Loading State:
  - Sets the button text to "Loading..." and disables it (`btnEl.disabled = true`) to prevent multiple simultaneous requests.
  - Sets `quoteEl.innerText` and `authorEl.innerText` to "Updating..." to indicate data is being fetched.
- API Request:
  - Uses `fetch` to make a GET request to the Quotable API (`https://api.quotable.io/random`).
  - Awaits the response and parses it into a JavaScript object with `response.json()`.
- Success Case:
  - Extracts the quote text (`data.content`) and author (`data.author`) from the API response.
  - Updates `quoteEl.innerText` with the quote text.
  - Updates `authorEl.innerText` with the author’s name, prefixed with "~ ".
  - Restores the button text to "Get a quote" and re-enables it (`btnEl.disabled = false`).
  - Logs the full API response to the console for debugging.
- Error Handling:
  - Logs the error to the console.
  - Sets `quoteEl.innerText` to "An error happened, try again later".
  - Sets `authorEl.innerText` to "An error happened".
  - Restores the button text and re-enables it.

Purpose: Fetches a random quote from the Quotable API, updates the UI with the quote and author, and handles loading states and errors.

3. Initial Quote Fetch

- Calls the `getQuote` function immediately when the script loads, fetching and displaying a random quote on page load.

Purpose: Ensures the user sees a quote immediately without needing to click the button first.

4. Button Event Listener

- Attaches a `click` event listener to the button (`btnEl`), triggering the `getQuote` function when clicked.

Purpose: Enables users to fetch a new random quote by clicking the button.

How It Works

1. HTML Setup: The code assumes an HTML file with:
   - A button with `id="btn"` to trigger fetching a new quote.
   - Elements with `id="quote"` and `id="author"` to display the quote text and author, respectively.
   - Optional CSS for styling.

2. User Interaction:
   - On page load, a random quote is fetched and displayed automatically.
   - Clicking the "Get a quote" button triggers a new fetch.
   - During fetching, the button shows "Loading..." and is disabled, while the quote and author areas show "Updating...".
   - On success, the quote and author are updated, and the button is re-enabled.
   - On error, an error message is displayed, and the button is re-enabled.

3. Example Flow:
   - Page loads, and `getQuote` runs, fetching a quote (e.g., `{ content: "The only way to do great work is to love what you do.", author: "Steve Jobs" }`).
   - The UI shows: Quote: "The only way to do great work is to love what you do.", Author: "~ Steve Jobs".
   - User clicks the button, sees "Loading..." and "Updating...", then a new quote (e.g., "Life is what happens when you're busy making other plans. ~ John Lennon").
   - If the API fails, the UI shows "An error happened, try again later" and "An error happened".