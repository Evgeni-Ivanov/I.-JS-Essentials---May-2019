/**
 *
 * @param {Array} matrix
 */
function biggestElement(matrix) {
    let maximumNumber = Number.MIN_SAFE_INTEGER;

    for (const row of matrix) {
        let rowMaximumNumber = Math.max(...row);

        maximumNumber = Math.max(maximumNumber, rowMaximumNumber);
    }

    return maximumNumber;
}

// Test
//
// console.log(biggestElement([[20, 50, 10],
//                 [8, 33, 145]]));
//
// console.log(biggestElement([[3, 5, 7, 12],
//                 [-1, 4, 33, 2],
//                 [8, 3, 0, 4]]));