/**
 *
 * @param {Array} input
 */
function calorieObject(input) {
    let calories = {};

    for (let i = 0; i < input.length; i += 2) {

        calories[input[i]] = Number(input[i + 1]);
    }

    return calories;
}

// Test
//
// console.log(calorieObject(['Yoghurt', 48, 'Rise', 138, 'Apple', 52]));
//
// console.log(calorieObject(['Potato', 93, 'Skyr', 63, 'Cucumber', 18, 'Milk', 42]));