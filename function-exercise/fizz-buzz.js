import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

// Use 'await' to wait for the user's input
const answer = await rl.question('Enter a number: ');
const number = parseInt(answer);

// --- Your Fizz-Buzz logic goes here ---
console.log(`You entered: ${number}`);

// Always close the interface at the very end of your script
rl.close();

for (let i = 1; i <= number; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
