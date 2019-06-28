/**
 *
 * @param {Array} numbers
 */
function firstAndLastKNumbers(numbers) {
    let k = numbers[0];

    let newNumbers = numbers.slice(1);

    let firstKNumbersArray = newNumbers.filter((number, index) => index < k);
    let firstKNumbers = firstKNumbersArray.join(" ");

    let lastKNumbersArray = numbers.filter((number, index) => index > newNumbers.length - k);
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