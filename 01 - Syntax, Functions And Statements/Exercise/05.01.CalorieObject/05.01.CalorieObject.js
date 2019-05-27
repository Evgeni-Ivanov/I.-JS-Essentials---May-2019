/**
 *
 * @param {Array} input
 */
function calorieObject(input) {
    let calories = {};

    for (let i = 0; i < input.length; i += 2) {
        let currentFood = input[i];
        let currentFoodCalories = input[i + 1];

        calories[currentFood] = Number(currentFoodCalories);
    }

    console.log(calories);
}

// Test
//
// calorieObject(['Yoghurt', 48, 'Rise', 138, 'Apple', 52]);
//
// calorieObject(['Potato', 93, 'Skyr', 63, 'Cucumber', 18, 'Milk', 42]);