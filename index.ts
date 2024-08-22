#! /usr/bin/env node 

import inquirer from "inquirer";

const randomNumb = Math.floor(Math.random() * 6 + 1);

const answers = await inquirer.prompt([
    {
        name: "userGussedNumber",
        type: "number",
        message: "please guess a number between 1-6: "
    },
]);

if (answers.userGussedNumber === randomNumb) {
    console.log("Congratulations! you guessed right number");
} else {
    console.log("Oops! you guessed wrong number")
}