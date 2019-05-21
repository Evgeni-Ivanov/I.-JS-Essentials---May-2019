/**
 *
 * @param {Number} number1
 * @param {Number} number2
 * @param {Number} number3
 */

function largestNumber(number1, number2, number3) {
    let result;

    if (number1 > number2 && number1 > number3) {
        result = number1;
    }
    else if (number2 > number1 && number2 > number3) {
        result = number2;
    }
    else if (number3 > number1 && number3 > number2) {
        result = number3;
    }

    console.log(`The largest number is ${result}.`);
}

// Test
largestNumber(5, -3, 16);
largestNumber(-3, -5, -22.5);