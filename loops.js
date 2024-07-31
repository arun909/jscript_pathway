const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface
({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user for the array limit
rl.question('ENTER ARRAY LIMIT: ', (input) => {
    var x = +input; // Convert input to a number

    // Ensure that x is a number and valid
    
        // Using a for loop to log values from x to 9
        for (let i = x; i < 10; i++) {
            console.log(i);
        }

    // Close the readline interface
    rl.close();
});