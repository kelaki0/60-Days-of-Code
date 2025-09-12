Random Image Gallery

This is a JavaScript-based web application that fetches and displays random images from the Unsplash API based on a user-specified number (1–10). The application includes an input field for the number of images, a button to trigger the fetch, and a gallery to display the images. It handles input validation and errors, showing a loading spinner during API requests.

Overview

The application consists of a single JavaScript file that interacts with an HTML page and optional CSS for styling. Users enter a number between 1 and 10, click a button, and the app fetches that number of random images from Unsplash, displaying them in a gallery. If the input is invalid or an error occurs, an appropriate message is shown.

Code Explanation

Below is a detailed breakdown of the JavaScript code, explaining each component and its functionality.

1. Variable Declarations and Setup

- `btnEl`: References the HTML button with `id="btn"`, used to trigger the image fetch.
- `errorMessageEl`**: References the HTML element with `id="errorMessage"`, used to display validation or error messages.
- `galleryEl`: References the HTML element with `id="gallery"`, where the fetched images are displayed.

Purpose: These variables connect the JavaScript to the HTML DOM elements for user interaction and display.

2. The `fetchImage` Function

- Async/Await: The function is marked `async` to handle asynchronous API requests using `await`.
- Input Validation:
  - `inputValue`: Retrieves the user-entered number from the input element with `id="input"`.
  - Checks if `inputValue` is less than 1 or greater than 10 (note: the error message incorrectly says "between 0 and 11").
  - If invalid, displays an error message in `errorMessageEl` and exits the function.
- Initialization**:
  - `imgs = ""`: Initializes an empty string to store the HTML for the images. **Note**: `imgs` is not declared with `let`, `const`, or `var`, making it a global variable, which is not best practice.

- Try-Catch Block: Handles potential errors (e.g., network issues or invalid API responses).
- Loading State:
  - Hides the button (`btnEl.style.display = "none"`) to prevent multiple clicks.
  - Displays a loading spinner by setting `galleryEl.innerHTML` to an `<img>` tag referencing `spinner.svg`.
- API Request:
  - Uses `fetch` to make a GET request to the Unsplash API with:
    - `per_page=${inputValue}`: Specifies the number of images to fetch (1–10).
    - `page=${Math.round(Math.random() * 1000)}`: Selects a random page (up to 1000) for variety.
    - `client_id=...`: The Unsplash API key (hardcoded; should be secured in production).
  - Example URL: `https://api.unsplash.com/photos?per_page=5&page=123&client_id=...`.
  - Parses the response with `res.json()` and processes the resulting data.
- Success Case:
  - Iterates over the `data` array (each item is an image object).
  - For each image (`pic`):
    - Appends an `<img>` tag to `imgs` with `src` set to `pic.urls.small` (small image URL) and `alt` set to `"image"`.
    - Updates `galleryEl.innerHTML` with `imgs`, overwriting previous content.
    - Shows the gallery (`galleryEl.style.display = "block"`).
    - Shows the button (`btnEl.style.display = "block"`).
    - Hides the error message (`errorMessageEl.style.display = "none"`).
- Error Handling:
  - Logs the error to the console.
  - Displays "An error happened, try again later" in `errorMessageEl`.
  - Shows the button and hides the gallery.

Purpose: Fetches the specified number of random images, displays them in the gallery, and handles loading states and errors.

3. Button Event Listener

- Attaches a `click` event listener to the button (`btnEl`), triggering the `fetchImage` function when clicked.

Purpose: Enables user interaction to fetch images based on the input value.

How It Works

1. HTML Setup: The code assumes an HTML file with:
   - An input element with `id="input"` for the number of images.
   - A button with `id="btn"` to trigger the fetch.
   - An element with `id="gallery"` to display the images.
   - An element with `id="errorMessage"` for error messages.
   - A `spinner.svg` file for the loading animation.
   - Optional CSS for styling.

2. User Interaction:
   - User enters a number (1–10) in the input field and clicks the button.
   - If the number is invalid, an error message is shown.
   - If valid, the button is hidden, a loading spinner is displayed, and the app fetches the specified number of images.
   - Images are displayed in the gallery, or an error message is shown if the request fails.

3. Example Flow:
   - User enters "3" and clicks the button.
   - The button disappears, and a loading spinner appears.
   - The app fetches 3 random images from Unsplash (e.g., from page 456).
   - The gallery displays 3 images, the button reappears, and any error message is hidden.
   - If the user enters "15", an error message appears: "Number should be between 0 and 11".
