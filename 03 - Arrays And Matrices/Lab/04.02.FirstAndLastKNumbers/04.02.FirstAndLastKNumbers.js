/**
 *
 * @param {Array} numbers
 */
function firstAndLastKNumbers(numbers) {
    let k = numbers[0];

    let firstKNumbersArray = numbers.slice(1, k + 1);
    let firstKNumbers = firstKNumbersArray.join(" ");

    let lastKNumbersArray = numbers.slice(numbers.length - k);
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