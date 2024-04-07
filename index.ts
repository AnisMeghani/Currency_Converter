#! user/bin/env node

import inquirer from "inquirer";

const currency: any = {
  USD: 1, // Base Currency
  BHD: 0.38,
  EUR: 0.92,
  PKR: 278,
  GBP: 0.79,
};

let userAns = await inquirer.prompt([
  {
    name: "From",
    type: "list",
    message: "Select The Currency From:",
    choices: ["USD", "BHD", "EUR", "PKR", "GBP"],
  },
  {
    name: "To",
    type: "list",
    message: "Select The Currency To:",
    choices: ["USD", "BHD", "EUR", "PKR", "GBP"],
  },
  {
    name: "Amount",
    type: "number",
    message: "Enter Your Amount:",
  },
]);

let fromAmount = currency[userAns.From];
let toAmount = currency[userAns.To];

let amount = userAns.Amount;
let baseAmount = amount / fromAmount; // base banayi hai USD ki
let convertedAmount = baseAmount * toAmount;

console.log(convertedAmount.toFixed(3));

