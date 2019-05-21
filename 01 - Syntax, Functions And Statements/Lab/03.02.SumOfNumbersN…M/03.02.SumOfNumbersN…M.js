/**
 *
 * @param {String} n
 * @param {String} m
 */

function sumOfNumbersNToM(n, m) {
    let number1 = +n;
    let number2 = +m;
    let sum = 0;

    for (let i = number1; i <= number2; i++) {
        sum += i;
    }

    return sum;
}

// Test
// console.log(sumOfNumbersNToM("1","5"));
// console.log(sumOfNumbersNToM("1","100"));