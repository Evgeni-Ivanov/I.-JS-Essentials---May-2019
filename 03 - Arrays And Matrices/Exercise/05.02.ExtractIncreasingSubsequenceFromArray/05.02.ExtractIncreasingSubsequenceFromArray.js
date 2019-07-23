/**
 *
 * @param {Array} array
 */
function extractIncreasingSubsequenceFromArray(array) {
    let biggestNumber = array[0];
    let increasingSubsequence = [];

    for (const currentNumber of array) {

        if (currentNumber >= biggestNumber) {
            biggestNumber = currentNumber;
            increasingSubsequence.push(biggestNumber);
        }
    }

    console.log(increasingSubsequence.join("\n"));
}

// Test
//
// extractIncreasingSubsequenceFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);
//
// extractIncreasingSubsequenceFromArray([1, 2, 3, 4]);
//
// extractIncreasingSubsequenceFromArray([20, 3, 2, 15, 6, 1]);