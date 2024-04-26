#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 8 + 1);
const input = await inquirer.prompt([
    { message: "Welcome to The Number Guessing Game! Press Enter to start.",
        type: "enter key",
        name: "enterkey"
    },
    { message: "Guess a number from 1-8\n",
        type: "number",
        name: "userGuessedNumber",
    },
]);
if (input.userGuessedNumber === randomNumber) {
    console.log("Congratulations!You have guessed the right number.");
}
else
    (console.log("Oops! You've lost."));
