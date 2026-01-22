import input from "sync-input";

let hasUsedConverter = false;

function startConversion() {

    const rates = {
        USD: 1,
        JPY: 150,
        EUR: 0.9,
        RUB: 90,
        GBP: 0.85,
        RWF: 1320.0
        };

    function calculate(amount, from, to) {
        let valueInUSD = amount / rates[from];
        let finalValue = valueInUSD * rates[to];
        return finalValue.toFixed(2);
    }

    console.log("\nAvailable currencies (based on 1 USD):");
    for (let code in rates) {
        console.log(`${code}: ${rates[code]}`);
    }

    let sourceCurrency;
    let targetCurrency;

    // validate source currency
    while (true) {
        sourceCurrency = input("\nConvert from: ").toUpperCase();

        if (rates[sourceCurrency]) {
            break;
        }
        console.log("Unknown currency. Please try again.");
    }

    // validate target currency
    while (true) {
        targetCurrency = input("Convert to: ").toUpperCase();

        if (!rates[targetCurrency]) {
            console.log("Unknown currency. Please try again.");
            continue;
        }

        if (targetCurrency === sourceCurrency) {
            console.log("Source and target currencies cannot be the same.");
            continue;
        }

        break;
    }

    let amount;

    // validate amount
    while (true) {
        amount = Number(input("Amount to convert: "));

        if (amount > 0) {
            break;
        }
        console.log("Amount must be a number greater than 0.");
    }

    let converted = calculate(amount, sourceCurrency, targetCurrency);

    console.log(
        `\n${amount} ${sourceCurrency} equals ${converted} ${targetCurrency}`
    );

    hasUsedConverter = true;
}

function exitProgram() {
    console.log("\nThank you for using the currency converter.");
    console.log("Goodbye!");
}

console.log("WELCOME TO THE CURRENCY CONVERTER");

while (true) {

    console.log(`\nWhat would you like to do${hasUsedConverter ? " now" : ""}?`);
    console.log(`1. Convert currency${hasUsedConverter ? " again" : ""}`);
    console.log("2. Exit");

    let option = input("Your choice: ");

    if (option === "1") {
        startConversion();
    } 
    else if (option === "2") {
        exitProgram();
        break;
    } 
    else {
        console.log("Invalid option. Please select 1 or 2.");
    }
}
