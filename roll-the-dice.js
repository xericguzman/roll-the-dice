const prompt = require('prompt-sync')();

const sides = Number(prompt('How many sides does the die have?: '))
const diceRoll = Math.floor( Math.random() * sides) + 1;

    console.log ('You rolled a: ', diceRoll);


