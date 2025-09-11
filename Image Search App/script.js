// store the unsplash access key, used to authenticate access to the Unsplash API
const accessKey = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";

// select the first <form> element in the DOM
const formEl = document.querySelector("form");

// select the element in the DOM with an id 'search-input'
const searchInputEl = document.getElementById("search-input");

// select the first element with class='search-results'
const searchResultsEl = document.querySelector(".search-results");

// select the element in the DOM with the id show-more-button
const showMoreButtonEl = document.getElementById("show-more-button");

// store the users search query
let inputData = "";

// track the current page for pagination in the Unsplash API
let page = 1;

// create an asynchronous function that will fetch data from an API based on users search term
async function searchImages() {

    // retrieve the current value of the search input field
  inputData = searchInputEl.value;

  // construct and API url using:Base URL: https://api.unsplash.com/search/photos
  // Query parameters:page=${page}: Specifies the page number for pagination.
  // query=${inputData}: The search term (e.g., “nature”).
  // client_id=${accessKey}: Authenticates the request with the API key.
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

  // send a GET request to the constructed URL
  const response = await fetch(url);

  // parse the response body as json, which contains the image data
  const data = await response.json();

  // Clear the previous search results (if any) when starting a new search.
  if (page === 1) {
    searchResultsEl.innerHTML = "";
  }

  // extract the results array from the API response, which contains the list of image objects
  const results = data.results;

  // Iterate over the results array to create and display image elements in the DOM
  results.map((result) => {

    // For each photo: Creates a <div> (imageWrapper) with class search-result to contain the image and link.
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("search-result");

    const image = document.createElement("img");  // Create an <img> element
    image.src = result.urls.small; // Set the image source to the “small” size URL from the API.
    image.alt = result.alt_description; // Set the alt text for accessibility.
    const imageLink = document.createElement("a"); // create a <a> element
    imageLink.href = result.links.html; // Link to the photo’s page on Unsplash.
    imageLink.target = "_blank"; // Opens the link in a new tab.
    imageLink.textContent = result.alt_description; // Display the photo’s description as the link text

    imageWrapper.appendChild(image); //Append the <img> and <a> to the imageWrapper.
    imageWrapper.appendChild(imageLink); 
    searchResultsEl.appendChild(imageWrapper); // Append the imageWrapper to searchResultsEl (the .search-results container).
  });

  // Increment the page variable to fetch the next page of results when the “Show More” button is clicked.
  page++;

  //Show the “Show More” button after the first page of results is loaded.
  if (page > 1) {
    showMoreButtonEl.style.display = "block";
  }
}

// Listen for the form’s submit event (e.g., when the user presses Enter or clicks a submit button).
formEl.addEventListener("submit", (event) => {

  //Prevent the default form submission behavior (which would reload the page).  
  event.preventDefault();

  // Resets the page number to 1 for a new search.

  page = 1;

  // Call the searchImages function to fetch and display results.
  searchImages();
});

// Listen for clicks on the “Show More” button to load the next page of results.
showMoreButtonEl.addEventListener("click", () => {

    // Call searchImages() without resetting page, so it fetches the next page (since page was incremented).
  searchImages();
});
