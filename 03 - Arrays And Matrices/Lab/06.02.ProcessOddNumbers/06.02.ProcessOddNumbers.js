/**
 *
 * @param {Array} numbers
 */
function processOddNumbers(numbers) {
    let output = numbers.filter((element, index) => index % 2 !== 0)
        .map((element) => element * 2)
        .reverse()
        .join(" ");

    console.log(output);
}

// Test
//
// processOddNumbers([10, 15, 20, 25]);
//
// processOddNumbers([3, 0, 10, 4, 7, 3]);