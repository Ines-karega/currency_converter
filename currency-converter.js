const input = require("sync-input");

const rates = {
    USD: 1.0,
    JPY: 113.5,
    EUR: 0.89,
    RUB: 74.36,
    GBP: 0.75,
    RWF: 9.86,
    NRA: 1200,
    SHL: 2900
};

function convertCurrency() {

    console.log("\nAvailable currencies (1 USD =):");

    for (let currency in rates) {
        console.log(`${currency} : ${rates[currency]}`);
    }

    let from = input("\nConvert FROM: ").toUpperCase();
    let to = input("Convert TO: ").toUpperCase();

    if (!(from in rates) || !(to in rates)) {
        console.log("Invalid currency.");
        return;
    }

    if (from === to) {
        console.log("You cannot convert the same currency.");
        return;
    }

    let amount = Number(input("Enter amount: "));

    if (isNaN(amount) || amount <= 0) {
        console.log("Invalid amount.");
        return;
    }

    let result = (amount / rates[from]) * rates[to];

    console.log(
        `\n${amount} ${from} = ${result.toFixed(2)} ${to}`
    );
}

console.log("WELCOME TO THE CURRENCY CONVERTER");

while (true) {

    console.log("\n1. Convert currency");
    console.log("2. Exit");

    let choice = input("Choose 1 or 2: ");

    if (choice === "1") {
        convertCurrency();
    } 
    else if (choice === "2") {
        console.log("\nThank you for using the currency converter.");
        console.log("Goodbye!");
        break;
    } 
    else {
        console.log("Invalid choice.");
    }
}
