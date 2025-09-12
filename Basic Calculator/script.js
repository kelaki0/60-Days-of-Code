//  select all elements with the tag <button> and stores them in a variable called buttonsEl. 
// Since there's more than one, this variable becomes an array-like list of all the button elements.
const buttonsEl = document.querySelectorAll("button");

// select the element with the id result in the DOM
const inputFieldEl = document.getElementById("result");

// loop through the buttons pressed
for (let i = 0; i < buttonsEl.length; i++) {
    buttonsEl[i].addEventListener("click", () => {
        const buttonValue = buttonsEl[i].textContent;
        if (buttonValue === "C") {
            clearResult();
        } else if (buttonValue === "=") {
            calculateResult();
        } else {
            appendValue(buttonValue);
        }
    });
}

function clearResult() {
    inputFieldEl.value = "";
}

function calculateResult() {
    inputFieldEl.value = eval(inputFieldEl.value);
}

function appendValue(buttonValue) {
    inputFieldEl.value += buttonValue;
    // inputFieldEl.value = inputfieldEl.value + buttonValue;
}

