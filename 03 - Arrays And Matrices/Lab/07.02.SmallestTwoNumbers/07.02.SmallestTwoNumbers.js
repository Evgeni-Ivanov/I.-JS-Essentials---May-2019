/**
 *
 * @param {Array} numbers
 */
function smallestTwoNumbers(numbers) {
    let smallestNumbersArray = [];

    for (let i = 0; i < 2; i++) {
        let indexOfSmallestNumber = numbers.indexOf(Math.min(...numbers));

        smallestNumbersArray.push(numbers[indexOfSmallestNumber]);

        numbers.splice(indexOfSmallestNumber, 1);
    }

    let smallestNumbers = smallestNumbersArray.join(" ");

    console.log(smallestNumbers);
}

// Test
//
// smallestTwoNumbers([30, 15, 50, 5]);
//
// smallestTwoNumbers([3, 0, 10, 4, 7, 3]);