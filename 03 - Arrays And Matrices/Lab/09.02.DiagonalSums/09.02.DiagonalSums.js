/**
 *
 * @param {Array} matrix
 */
function diagonalSums(matrix) {
    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for (let i = 0; i < matrix.length; i++) {
        mainDiagonalSum += matrix[i][i];
        secondaryDiagonalSum += matrix[i][matrix.length - i - 1];
    }

    console.log(`${mainDiagonalSum} ${secondaryDiagonalSum}`);
}

// Test
//
// diagonalSums([[20, 40],
//               [10, 60]]);
//
// diagonalSums([[3, 5, 17],
//               [-1, 7, 14],
//               [1, -8, 89]]);