/**
 *
 * @param {Array} numbers
 */
function smallestTwoNumbers(numbers) {
    let sortedArray = numbers.sort((a, b) => a - b);

    let smallestNumbersArray = sortedArray.slice(0, 2);

    let smallestNumbers = smallestNumbersArray.join(" ");

    console.log(smallestNumbers);
}

// Test
//
// smallestTwoNumbers([30, 15, 50, 5]);
//
// smallestTwoNumbers([3, 0, 10, 4, 7, 3]);