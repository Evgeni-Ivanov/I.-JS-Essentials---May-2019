/**
 *
 * @param {Array} array
 */
function rotateArray(array) {
    let numberOfRotations = Number(array.pop());

    numberOfRotations = numberOfRotations % array.length;

    for (let currentRotation = 0; currentRotation < numberOfRotations; currentRotation++) {
        let lastElement = array.pop();
        array.unshift(lastElement);
    }

    console.log(array.join(" "));
}

// Test
//
// rotateArray(['1', '2', '3', '4', '2']);
//
// rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);