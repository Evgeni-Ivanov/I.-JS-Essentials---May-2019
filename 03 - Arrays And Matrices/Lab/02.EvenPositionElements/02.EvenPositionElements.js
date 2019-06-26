/**
 *
 * @param {Array} elements
 */
function evenPositionElements(elements) {
    let result = elements.filter((element, index) => index % 2 === 0);
    result = result.join(" ");

    return result;
}

// Test
//
// console.log(evenPositionElements(['20', '30', '40']));
//
// console.log(evenPositionElements(['5', '10']));