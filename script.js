const makeChange = (c) => {
    // Initialize variables to store the number of each coin denomination
    let q = 0, d = 0, n = 0, p = 0;

    // Calculate the number of quarters
    q = Math.floor(c / 25);
    c %= 25;

    // Calculate the number of dimes
    d = Math.floor(c / 10);
    c %= 10;

    // Calculate the number of nickels
    n = Math.floor(c / 5);
    c %= 5;

    // The remaining amount is the number of pennies
    p = c;

    // Return an object with the calculated values
    return { q, d, n, p };
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
