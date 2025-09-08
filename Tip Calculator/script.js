// select the HTML button with the ID calculate and store it in the variable btnEl.
const btnEl = document.getElementById("calculate");
// select the input field where the user enters the bill amount, and store it in billInput.
const billInput = document.getElementById("bill");
// selects the input field where the user enters the tip amount, storing it in tipInput.
const tipInput = document.getElementById("tip");
// select the HTML element where the final total will be displayed.
const totalSpan = document.getElementById("total");

function calculateTotal() {
    //retrieve the value the user entered in the bill input field.
    const billValue = billInput.value;
    // retrieve the value the user entered in the tip input field.
    const tipValue = tipInput.value;
    // perform the calculation.
    const totalValue = billValue * (1 + tipValue / 100);

    // update the content of the totalSpan element to have exactly two decimal places.
    totalSpan.innerText = totalValue.toFixed(2);
}

// attache an event listener to the btnEl button. When the user clicks this button, the calculateTotal() function is automatically executed, triggering the calculation and displaying the result.
btnEl.addEventListener("click", calculateTotal);