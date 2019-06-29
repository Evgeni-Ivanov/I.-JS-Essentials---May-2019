/**
 *
 * @param {Array} numbers
 */
function firstAndLastKNumbers(numbers) {
    let k = numbers[0];

    numbers = numbers.slice(1);

    let firstKNumbersArray = numbers.filter((number, index) => index < k);
    let firstKNumbers = firstKNumbersArray.join(" ");

    let lastKNumbersArray = numbers.filter((number, index) => index >= numbers.length - k);
    let lastKNumbers = lastKNumbersArray.join(" ");


    console.log(firstKNumbers);
    console.log(lastKNumbers);
}

// Test
//
// firstAndLastKNumbers([2,
//     7, 8, 9]);
//
// firstAndLastKNumbers([3,
//     6, 7, 8, 9]);