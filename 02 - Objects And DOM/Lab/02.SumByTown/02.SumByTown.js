/**
 *
 * @param {Array} input
 * @returns {string}
 */
function sumByTown(input) {
    let result = {};

    for (let i = 0; i < input.length; i += 2) {

        let currentTown = input[i];

        if (!result[currentTown]) {

            result[currentTown] = 0;
        }

        result[currentTown] += Number(input[i + 1]);
    }

    return JSON.stringify(result);
}

// Test
//
// console.log(sumByTown(["Sofia", "20", "Varna", "3", "Sofia", "5", "Varna", "4"]));
//
// console.log(sumByTown(["Sofia", "20", "Varna", "3", "sofia", "5", "varna", "4"]));