/**
 *
 * @param {Array} input
 */
function cookingByNumbers(input) {

    let number = Number(input[0]);

    for (let i = 1; i < input.length; i++) {

        let command = input[i];

        switch (command) {
            case "chop":
                number /= 2;
                break;
            case "dice":
                number = Math.sqrt(number);
                break;
            case "spice":
                number += 1;
                break;
            case "bake":
                number *= 3;
                break;
            case "fillet":
                number *= 0.8;
                break;
        }

        console.log(number);
    }
}

// Test
//
// cookingByNumbers(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
//
// cookingByNumbers(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);