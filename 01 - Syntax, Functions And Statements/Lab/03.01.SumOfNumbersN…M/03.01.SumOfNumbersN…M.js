/**
 *
 * @param {String} n
 * @param {String} m
 */
function sumOfNumbersNToM(n, m) {
    let number1 = Number(n);
    let number2 = Number(m);
    let sum = 0;

    for (let i = number1; i <= number2; i++) {
        sum += i;
    }

    console.log(sum);
}

// Test
// sumOfNumbersNToM("1","5");
// sumOfNumbersNToM("1","100");