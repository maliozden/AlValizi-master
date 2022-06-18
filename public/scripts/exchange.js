const amount = document.getElementById("amount");
const firstCurrency = document.getElementById("firstCurrency");
const secondCurrency = document.getElementById("secondCurrency");


const currency = new Currency("USD","TRY");

addEventListeners();

function addEventListeners(){
    amount.addEventListener("input",exchangeCurrency);
    firstCurrency.onchange = function(){
        currency.changeFirstCurrency(firstCurrency.options[firstCurrency.selectedIndex].textContent);
        ui.changeElements(currency.firstCurrency,currency.secondCurrency);
    }

    secondCurrency.onchange = function(){
        currency.changeSecondCurrency(secondCurrency.options[secondCurrency.selectedIndex].textContent);
        ui.changeElements(currency.firstCurrency,currency.secondCurrency);
    }
}

const ui = new UI();

function exchangeCurrency(){
    currency.changeAmount(amount.value);
    currency.exchange().then(response => {
        ui.changeResult((Number(response.rates[currency.secondCurrency]) * currency.amount));
    });
} 