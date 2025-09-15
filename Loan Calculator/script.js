// Define a function named calculateLoan, which is triggered whenever any input field (loan-amount, interest-rate, or months-to-pay) changes.
function calculateLoan() {

  // Retrieve and restore the value of the input with id="loan-amount" (the loan amount entered by the user)
  loanAmountValue = document.getElementById("loan-amount").value;

  // retrieve and store the value of the input with id="interest-rate" (the annual interest rate)
  interestRateValue = document.getElementById("interest-rate").value;

  // Retrieve and store the value of the input with id="months-to-pay" (the number of months)
  MonthsToPayValue = document.getElementById("months-to-pay").value;

  // Calculate the monthly interest amount:
  // interestRateValue * 0.01: Converts the annual interest rate (e.g., 10%) to a decimal (e.g., 0.10).
  // loanAmountValue * (interestRateValue * 0.01): Calculates the total interest for the loan by multiplying the loan amount by the decimal interest rate.
  // Divide the total interest by MonthsToPayValue to get the interest portion per month.
  // Store the result in the implicit global variable interest.

  interest = (loanAmountValue * (interestRateValue * 0.01)) / MonthsToPayValue;

  // Calculate the monthly payment:
  // loanAmountValue / MonthsToPayValue: Divides the loan amount by the number of months to get the principal repayment per month.
  // Add the monthly interest calculated above.
  // .toFixed(2): Rounds the result to two decimal places (e.g., 833.33) for currency display.
  // Store the result in the implicit global variable monthlyPayment.

  monthlyPayment = (loanAmountValue / MonthsToPayValue + interest).toFixed(2);


  // Update the <p> element with id="payment":
  // Set its innerHTML to a string that includes the text "Monthly Payment: " followed by the calculated monthlyPayment.
  // Use template literals (backticks) for string interpolation to insert monthlyPayment.

  document.getElementById(
    "payment"
  ).innerHTML = `Monthly Payment: ${monthlyPayment}`;
}
