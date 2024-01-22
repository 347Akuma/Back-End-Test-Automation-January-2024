function listOfNames(input) {
    'use strict';
    input.sort((a, b) => a.localeCompare(b));
    for (let i = 1; i <= input.length; i++) {
        console.log(`${i}.${input[i - 1]}`);
    }
}
listOfNames(["John", "Bob", "Christina", "Ema"]);