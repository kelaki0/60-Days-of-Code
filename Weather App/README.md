Weather App

This is a JavaScript-based web application that fetches and displays current weather data for a user-specified city using the OpenWeatherMap API. The application includes a form for users to input a city name, and it displays the temperature, weather description, icon, and additional details like "feels like" temperature, humidity, and wind speed.

Overview

The application consists of a single JavaScript file that interacts with an HTML page and optional CSS for styling. When a user submits a city name via a form, the app fetches weather data from the OpenWeatherMap API and updates the page with the results. It handles errors gracefully by displaying an error message if the API request fails.

Code Explanation

Below is a detailed breakdown of the JavaScript code, explaining each component and its functionality.

1. Variable Declarations and Setup

const apikey = "d1c1dd1e608e26acb08928eb44988eb2";
const weatherDataEl = document.getElementById("weather-data");
const cityInputEl = document.getElementById("city-input");
const formEl = document.querySelector("form");
```

- `apikey`: Stores the API key for OpenWeatherMap. **Note**: In a production environment, API keys should be stored securely (e.g., in environment variables) rather than hardcoded.
- `weatherDataEl`: References the HTML element with `id="weather-data"`, which contains child elements to display the weather icon, temperature, description, and details.
- `cityInputEl`: References the HTML input element with `id="city-input"`, where the user enters the city name.
- `formEl`: References the HTML `<form>` element using `document.querySelector`, which contains the city input field and a submit button.

Purpose: These variables connect the JavaScript to the HTML DOM and provide access to the API key.

2. Form Event Listener

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const cityValue = cityInputEl.value;
  getWeatherData(cityValue);
});

- `formEl.addEventListener("submit", ...)`: Attaches a `submit` event listener to the form element.
- `event.preventDefault()`: Prevents the default form submission behavior (e.g., page reload).
- `cityValue`: Retrieves the user-entered city name from the `city-input` element.
- `getWeatherData(cityValue)`: Calls the `getWeatherData` function with the city name to fetch and display weather data.

Purpose: Captures the user’s city input when the form is submitted and triggers the API request.

3. The `getWeatherData` Function

async function getWeatherData(cityValue) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    const temperature = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;
    const details = [
      `Feels like: ${Math.round(data.main.feels_like)}`,
      `Humidity: ${data.main.humidity}%`,
      `Wind speed: ${data.wind.speed} m/s`,
    ];

    weatherDataEl.querySelector(
      ".icon"
    ).innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`;
    weatherDataEl.querySelector(
      ".temperature"
    ).textContent = `${temperature}°C`;
    weatherDataEl.querySelector(".description").textContent = description;
    weatherDataEl.querySelector(".details").innerHTML = details
      .map((detail) => `<div>${detail}</div>`)
      .join("");
  } catch (error) {
    weatherDataEl.querySelector(".icon").innerHTML = "";
    weatherDataEl.querySelector(".temperature").textContent = "";
    weatherDataEl.querySelector(".description").textContent =
      "An error happened, please try again later";
    weatherDataEl.querySelector(".details").innerHTML = "";
  }
}

- Async/Await: The function is marked `async` to handle asynchronous API requests using `await`.
- Try-Catch Block: Handles potential errors (e.g., invalid city or network issues).
- API Request:
  - Uses `fetch` to make a GET request to the OpenWeatherMap API with:
    - `q=${cityValue}`: The city name from user input.
    - `appid=${apikey}`: The API key for authentication.
    - `units=metric`: Requests temperature in Celsius.
  - URL example: `https://api.openweathermap.org/data/2.5/weather?q=London&appid=d1c1dd1e...&units=metric`.
- Response Check:
  - `if (!response.ok)`: Throws an error if the response status is not 200–299 (e.g., city not found returns 404).
  - `data = await response.json()`: Parses the response into a JavaScript object.
- Data Extraction:
  - `temperature`: Rounds the main temperature (`data.main.temp`) to the nearest integer.
  - `description`: Extracts the weather description (e.g., "clear sky") from `data.weather[0].description`.
  - `icon`: Extracts the icon code (e.g., "01d") from `data.weather[0].icon`.
  - `details`: Creates an array of strings for additional details:
    - "Feels like" temperature (rounded).
    - Humidity percentage.
    - Wind speed in meters per second.
- DOM Updates:
  - Updates the `.icon` element with an `<img>` tag pointing to the OpenWeatherMap icon URL (e.g., `http://openweathermap.org/img/wn/01d.png`).
  - Sets the `.temperature` element to the temperature with "°C".
  - Sets the `.description` element to the weather description.
  - Maps the `details` array into `<div>` elements and joins them into a single string to update the `.details` element.
- Error Handling:
  - Clears the `.icon`, `.temperature`, and `.details` elements.
  - Displays "An error happened, please try again later" in the `.description` element.

Purpose: Fetches weather data for the specified city, updates the UI with the results, and handles errors gracefully.

How It Works

1. HTML Setup: The code assumes an HTML file with:
   - A `<form>` containing an input with `id="city-input"` and a submit button.
   - An element with `id="weather-data"` containing child elements with classes `icon`, `temperature`, `description`, and `details`.
   - Optional CSS for styling.

2. User Interaction:
   - User enters a city name (e.g., "London") in the input field and submits the form.
   - The app fetches weather data from the OpenWeatherMap API.
   - If successful, it displays the weather icon, temperature, description, and details.
   - If an error occurs (e.g., invalid city), it clears the display and shows an error message.

3. Example Flow:
   - User enters "Paris" and submits the form.
   - The API returns data (e.g., temp: 15.7°C, description: "clear sky", icon: "01d").
   - The UI updates to show:
     - An icon image (e.g., sunny icon).
     - Temperature: "16°C".
     - Description: "clear sky".
     - Details: "Feels like: 15°C", "Humidity: 70%", "Wind speed: 3.5 m/s".
   - If the user enters an invalid city (e.g., "xyz"), the UI shows "An error happened, please try again later".