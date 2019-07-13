/**
 *
 * @param {Array} matrix
 */
function equalNeighbors(matrix) {
    let equalPairs = 0;

    // Get equal pair by columns (on different rows).
    for (let column = 0; column < matrix[0].length; column++) {

        for (let row = 0; row < matrix.length - 1; row++) {

            if (matrix[row][column] === matrix[row + 1][column]) {
                equalPairs++;
            }
        }
    }

    // Get equal pairs by (columns on the same) row.
    for (let row = 0; row < matrix.length; row++) {

        for (let column = 0; column < matrix[row].length - 1; column++) {

            if (matrix[row][column] === matrix[row][column + 1]) {
                equalPairs++;
            }
        }
    }

    console.log(equalPairs);
}

// Test
//
// equalNeighbors([['2', '3', '4', '7', '0'],
//                 ['4', '0', '5', '3', '4'],
//                 ['2', '3', '5', '4', '2'],
//                 ['9', '8', '7', '5', '4']]);
//
// equalNeighbors([['test', 'yes', 'yo', 'ho'],
//                 ['well', 'done', 'yo', '6'],
//                 ['not', 'done', 'yet', '5']]);