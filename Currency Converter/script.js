const currencyFirstEl = document.getElementById("currency-first");
const worthFirstEl = document.getElementById("worth-first");
const currencySecondEl = document.getElementById("currency-second");
const worthSecondEl = document.getElementById("worth-second");
const exchangeRateEl = document.getElementById("exchange-rate");

async function updateRate() {
    try {
        const response = await fetch(
            `https://api.exchangerate.host/latest?base=${currencyFirstEl.value}&symbols=${currencySecondEl.value}`
        );
        if (!response.ok) throw new Error("Failed to fetch exchange rate");
        
        const data = await response.json();
        const rate = data.rates[currencySecondEl.value];
        
        if (!rate) throw new Error("Invalid currency data");

        exchangeRateEl.innerText = `1 ${currencyFirstEl.value} = ${rate.toFixed(4)} ${currencySecondEl.value}`;
        worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2);
    } catch (error) {
        console.error("Error:", error);
        exchangeRateEl.innerText = "Error fetching exchange rate";
        worthSecondEl.value = "0.00";
    }
}

// Initial update
updateRate();

// Event listeners
currencyFirstEl.addEventListener("change", updateRate);
currencySecondEl.addEventListener("change", updateRate);
worthFirstEl.addEventListener("input", updateRate);