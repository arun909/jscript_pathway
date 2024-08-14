const readline = require('readline');   // Create an interface for input and output

const r2 = readline.createInterface
({
    input: process.stdin,
    output: process.stdout
});


r2.question('ENTER ARRAY LIMIT: ', (input) => {  
    var x = +input; // Convert input to a number

    // Ensure that x is a number and valid
    
        // Using a for loop to log values from x to 9
        for (let i = x; i <= 50; i++) {
            console.log(i);
        }

    
    r2.close();
});