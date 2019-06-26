/**
 *
 * @param {Array} elements
 */
function negativePositiveNumbers(elements) {
    let result = [];

    elements.forEach((element) => {

        if (element < 0) {
            result.unshift(element);

        } else {
            result.push(element);
        }
    });

    console.log(result.join("\n"));
}

// Test
//
// negativePositiveNumbers([7, -2, 8, 9]);
//
// negativePositiveNumbers([3, -2, 0, -1]);