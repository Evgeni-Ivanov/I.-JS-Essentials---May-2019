/**
 *
 * @param {Array} elements
 */
function sumFirstLast(elements) {
    elements = elements.map(Number);
    let sum = elements[0] + elements[elements.length - 1];

    return sum;
}

// Test
//
// console.log(sumFirstLast(['20', '30', '40']));
//
// console.log(sumFirstLast(['5', '10']));