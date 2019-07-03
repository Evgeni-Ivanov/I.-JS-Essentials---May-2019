/**
 *
 * @param {Array} numbers
 */
function processOddNumbers(numbers) {
    let numbersAtOddPosition = numbers.filter((element, index) => index % 2 !== 0);

    let doubledNumbers = numbersAtOddPosition.map((element) => element * 2);

    let reversedNumbers = doubledNumbers.reverse();

    let output = reversedNumbers.join(" ");

    console.log(output);
}

// Test
//
// processOddNumbers([10, 15, 20, 25]);
//
// processOddNumbers([3, 0, 10, 4, 7, 3]);