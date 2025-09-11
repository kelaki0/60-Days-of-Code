Image Search App

This is a JavaScript-based web application that allows users to search for images using the Unsplash API. The application includes a form for entering search queries, displays image results with clickable links to their Unsplash pages, and provides a "Show More" button to load additional results.

Overview

The application consists of a single JavaScript file that interacts with an HTML page and optional CSS for styling. Users enter a search term (e.g., "nature") in a form, and the app fetches and displays images from Unsplash. The "Show More" button enables pagination to load more images for the same query.

Code Explanation

Below is a detailed breakdown of the JavaScript code, explaining each component and its functionality.

1. Variable Declarations and Setup

- `accessKey`: Stores the Unsplash API access key. **Note**: In a production environment, API keys should be stored securely (e.g., in environment variables) rather than hardcoded.
- `formEl`: References the HTML `<form>` element using `document.querySelector`, which contains the search input and submit button.
- `searchInputEl`: References the HTML input element with `id="search-input"`, where users enter their search query.
- `searchResultsEl`: References the HTML element with `class="search-results"`, which displays the fetched images and their descriptions.
- `showMoreButtonEl`: References the HTML button with `id="show-more-button"`, used to load more images.
- `inputData`: Stores the user’s search query, initialized as an empty string.
- `page`: Tracks the current page number for pagination, initialized to 1.

Purpose: These variables connect the JavaScript to the HTML DOM, store the API key, and manage the search state.

2. The `searchImages` Function
async function searchImages()

- Async/Await: The function is marked `async` to handle asynchronous API requests using `await`.
- `inputData = searchInputEl.value`**: Captures the user’s search query from the input field.
- API Request:
  - Constructs the Unsplash API URL with:
    - `page=${page}`: Specifies the page number for pagination.
    - `query=${inputData}`: The search term (e.g., "nature").
    - `client_id=${accessKey}`: The API key for authentication.
  - Example URL: `https://api.unsplash.com/search/photos?page=1&query=nature&client_id=RZEIOVf...`.
  - Uses `fetch` to make a GET request and `await response.json()` to parse the response into a JavaScript object.
- Clear Results:
  - If `page === 1`, clears the `searchResultsEl` content (`innerHTML = ""`) to start fresh for a new search.
- Process Results:
  - `results = data.results`: Extracts the array of image objects from the API response.
  - `results.map(...)`: Iterates over each image result to create DOM elements:
    - Creates a `<div>` with class `search-result` to wrap each image and link.
    - Creates an `<img>` element with:
      - `src`: The small image URL (`result.urls.small`).
      - `alt`: The image’s description (`result.alt_description`).
    - Creates an `<a>` element with:
      - `href`: The Unsplash page URL (`result.links.html`).
      - `target="_blank"`: Opens the link in a new tab.
      - `textContent`: The image’s description (`result.alt_description`).
    - Appends the `<img>` and `<a>` to the `imageWrapper`, then appends the `imageWrapper` to `searchResultsEl`.
- Pagination:
  - Increments `page` to prepare for the next set of results.
  - If `page > 1`, sets `showMoreButtonEl.style.display = "block"` to make the "Show More" button visible.

Purpose: Fetches images from Unsplash based on the search query, displays them with links, and enables pagination.

3. Form Event Listener

- `formEl.addEventListener("submit", ...)`: Attaches a `submit` event listener to the form.
- `event.preventDefault()`: Prevents the default form submission behavior (e.g., page reload).
- `page = 1`: Resets the page number to 1 for a new search.
- `searchImages()`: Calls the `searchImages` function to fetch and display results for the user’s query.

Purpose: Triggers a new image search when the form is submitted, starting from the first page.

4. Show More Button Event Listener

- Attaches a `click` event listener to the "Show More" button.
- Calls `searchImages()` to fetch the next page of results for the current query.

Purpose: Loads additional images for the same search query by incrementing the page number.

How It Works

1.HTML Setup: The code assumes an HTML file with:
   - A `<form>` containing an input with `id="search-input"` and a submit button.
   - An element with `class="search-results"` to display the images and links.
   - A button with `id="show-more-button"`, initially hidden (e.g., `display: none` in CSS).
   - Optional CSS for styling.

2. User Interaction:
   - User enters a search term (e.g., "nature") and submits the form.
   - The app fetches images from Unsplash, clears previous results, and displays the first page of images.
   - Each image is displayed with a clickable link to its Unsplash page.
   - The "Show More" button appears after the first page, allowing the user to load more images.
   - Clicking "Show More" fetches the next page of results for the same query.

3. Example Flow:
   - User enters "nature" and submits the form.
   - The app fetches the first page of images, displaying thumbnails with descriptions (e.g., "green forest").
   - Each image links to its Unsplash page in a new tab.
   - User clicks "Show More," and the next page of images is appended to the results.
