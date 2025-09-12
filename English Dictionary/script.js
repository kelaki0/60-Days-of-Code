// An input field where the user types a word.
const inputEl = document.getElementById("input");
//An element (<p>) to display status messages (e.g., "Searching..." or error messages)
const infoTextEl = document.getElementById("info-text");
//  A container (<div>) that holds the word’s definition and related content.
const meaningContainerEl = document.getElementById("meaning-container");
//  An element (<p>) to display the word being searched.
const titleEl = document.getElementById("title");
// An element (<p>) to display the word’s definition.
const meaningEl = document.getElementById("meaning");
// An element (<audio>) to play the word’s pronunciation audio.
const audioEl = document.getElementById("audio");

// Define an asynchronous function that takes a word parameter and fetches its definition and pronunciation from the Dictionary API.
async function fetchAPI(word) {
    // Initiate the API request and handle the loading state.
    try {
        infoTextEl.style.display = "block"; // Make the status message element visible (initially hidden, via display: none in CSS).
        meaningContainerEl.style.display = "none"; // Hide the meaning container to clear any previous results.
        infoTextEl.innerText = `Searching the meaning of "${word}"`; // Display a loading message with the searched word.
        // Construct the API URL using the provided word. The Dictionary API provides word data in English (/en/).
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        // Make an HTTP GET request to the API and convert the response to JSON. 
        // Store the parsed JSON response, which is either an array of word entries (if the word exists) or an error object (if it doesn’t).
        const result = await fetch(url).then((res) => res.json());

        // Process the API response to display the word’s details or an error state if the word isn’t found.
        if (result.title) { // The Dictionary API returns an object with a title property.
            // If result.title exists
            meaningContainerEl.style.display = "block"; // Show the meaning container.
            infoTextEl.style.display = "none"; // Hide the loading/error message.
            titleEl.innerText = word; //  Display the searched word.
            meaningEl.innerText = "N/A"; // Indicate no definition is available.
            audioEl.style.display = "none"; // Hide the audio player (no audio available).

            // If result.title is absent, result is an array of word entries.
        } else {
            infoTextEl.style.display = "none"; // Hide the loading message.
            meaningContainerEl.style.display = "block"; // Show the meaning container.
            audioEl.style.display = "inline"; // Show the audio player
            titleEl.innerText = result[0].word; // Set the word from the API response.
            meaningEl.innerText = result[0].meanings[0].definitions[0].definition; // Set the first definition from the first meaning of the word.
            audioEl.src = result[0].phonetics[0].audio; // Set the audio source to the first phonetic audio file (if available).
        }

        // Catch errors from the fetch request or JSON parsing (e.g., network issues, invalid API response).
    } catch (error) {
        console.log(error); // Log the error to the console for debugging.
        infoTextEl.innerText = "An error occurred, please try again later"; // Update the status message to inform the user of the error.
    }
}


// Listen for the keyup event on the input field and trigger the fetchAPI function when the user presses Enter with a non-empty input.
inputEl.addEventListener("keyup", (e) => { // Attache a keyup event listener to the input field.

    // e.target.value: The current value of the input field (the word typed by the user).
    // e.key === "Enter": Checks if the pressed key is Enter.
    // e.target.value && e.key === "Enter": Ensure the input is non-empty (e.target.value is truthy) and the Enter key was pressed.
    if (e.target.value && e.key === "Enter") {
        fetchAPI(e.target.value); // Call the fetchAPI function with the input value as the word parameter.
    }
});