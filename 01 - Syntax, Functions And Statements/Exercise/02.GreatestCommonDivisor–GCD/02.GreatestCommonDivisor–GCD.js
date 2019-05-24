/**
 *
 * @param {Number} number1
 * @param {Number} number2
 */
function greatestCommonDivisorGCD(number1, number2) {
    let greatestCommonDivisor = 0;

    for (let i = 1; i <= Math.min(number1, number2); i++) {
        if (number1 % i === 0 && number2 % i === 0) {
            greatestCommonDivisor = i;
        }
    }

    console.log(greatestCommonDivisor);
}

// Test
// greatestCommonDivisorGCD(15, 5);