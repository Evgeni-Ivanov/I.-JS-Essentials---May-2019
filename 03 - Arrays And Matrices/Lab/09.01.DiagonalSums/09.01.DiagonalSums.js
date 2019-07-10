/**
 *
 * @param {Array} matrix
 */
function diagonalSums(matrix) {
    let diagonalsSum = [];

    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for (let row = 0; row < matrix.length; row++) {

        for (let column = 0; column < matrix[row].length; column++) {

            if (row === column) {
                mainDiagonalSum += matrix[row][column];
            }

            if ((row + column) === (matrix.length - 1)) {
                secondaryDiagonalSum += matrix[row][column];
            }
        }
    }

    diagonalsSum.push(mainDiagonalSum);
    diagonalsSum.push(secondaryDiagonalSum);

    let output = diagonalsSum.join(" ");

    console.log(output);
}

// Test
//
// diagonalSums([[20, 40],
//               [10, 60]]);
//
// diagonalSums([[3, 5, 17],
//               [-1, 7, 14],
//               [1, -8, 89]]);