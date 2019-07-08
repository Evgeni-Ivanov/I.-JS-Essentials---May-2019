/**
 *
 * @param {Array} matrix
 */
function biggestElement(matrix) {
    let maximumNumber = Number.MIN_SAFE_INTEGER;

    for (let row = 0; row < matrix.length; row++) {

        for (let column = 0; column < matrix[row].length; column++) {

            if (matrix[row][column] > maximumNumber) {
                maximumNumber = matrix[row][column];
            }
        }
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