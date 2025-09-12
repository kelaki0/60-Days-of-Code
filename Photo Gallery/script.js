// select the DOM element with id btn. A button element (#btn) that triggers the fetchImage function.
const btnEl = document.getElementById("btn");

// select a DOM element with id errorMessage. An element (#errorMessage) for displaying error messages.
const errorMessageEl = document.getElementById("errorMessage");

// select a DOM element with id gallery. An element (#gallery) where images or a loading spinner are displayed.
const galleryEl = document.getElementById("gallery");

// asynchronous function that handles the logic for fetching and displaying images.
async function fetchImage() {

    // Retrieve the value entered by the user. This is a string, but JavaScript’s loose typing allows comparison with numbers.
  const inputValue = document.getElementById("input").value;

  // Check if the input value (from #input) is between 1 and 10. If not, show an error message and exit.
  if (inputValue > 10 || inputValue < 1) {
    errorMessageEl.style.display = "block"; // Make the error message element visible (initially hidden, via display: none in CSS)
    errorMessageEl.innerText = "Number should be between 0 and 11"; // Set the error message text.
    return; // Exit the function early, stopping further execution.
  }

  // Declare a variable imgs and set it to an empty string. This variable will store the HTML for the images to be displayed.
  imgs = "";

  try {
    btnEl.style.display = "none"; // Hide the button during the fetch to prevent multiple clicks.
    const loading = `<img src="spinner.svg" />`; // Define an HTML string for a loading spinner image.
    galleryEl.innerHTML = loading; // Replace the gallery’s content with the spinner to indicate loading.

    // Make an HTTP GET request to the Unsplash API. per_page=${inputValue}: Specifies how many images to fetch (based on user input).  page=${Math.round: Select a random page (1–1000) to fetch random images.
    // Query Parameters :
    // per_page=${inputValue}: Specifies how many images to fetch (based on user input).
    // page=${Math.round(Math.random() * 1000)}: Selects a random page (1–1000) to fetch random images. Math.random() * 1000 generates a number between 0 and 999.999..., and Math.round converts it to an integer (0–1000).
    // client_id=...: The Unsplash API key for authentication.
    await fetch(
      `https://api.unsplash.com/photos?per_page=${inputValue}&page=${Math.round(
        Math.random() * 1000
      )}&client_id=B8S3zB8gCPVCvzpAhCRdfXg_aki8PZM_q5pAyzDUvlc`

      
      // Processes the parsed JSON data (see below).
    ).then((res) =>

        // Convert the response to JSON. .then((data) => { ... }): Processes the parsed JSON data.
      res.json().then((data) => {

        // Loop through the API response data (an array of photo objects) and build HTML for images.
        if (data) {
          data.forEach((pic) => { // Iterate over each photo object in the data array.
            imgs += `
            <img src=${pic.urls.small} alt="image"/>
            `; // Append an <img> tag to the imgs string, using the small URL from the Unsplash photo object (pic.urls.small).

            // Update DOM
            galleryEl.style.display = "block"; //  Ensures the gallery is visible.
            galleryEl.innerHTML = imgs; // Replace the gallery’s content (initially the spinner) with the accumulated image HTML.
            btnEl.style.display = "block"; // Show the button again.
            errorMessageEl.style.display = "none"; // Hides any previous error messages.
          });
        }
      })
    );

    // error handling. Catch and handle errors from the fetch request (e.g., network issues, invalid API key, or server errors).
  } catch (error) {
    console.log(error); // Log the error to the console for debugging.
    errorMessageEl.style.display = "block"; // Show the error message element.
    errorMessageEl.innerHTML = "An error happened, try again later"; // Set a generic error message.
    btnEl.style.display = "block"; // Restore the button’s visibility.
    galleryEl.style.display = "none"; // Hide the gallery to clear any previous content or spinner.
  }
}

// Attach a click event listener to the button (btnEl), so clicking it triggers the fetchImage function.
btnEl.addEventListener("click", fetchImage);
