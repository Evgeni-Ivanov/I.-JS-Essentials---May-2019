/**
 *
 * @param {String} firstString
 * @param {String} secondString
 * @param {String} thirdString
 */
function stringLength(firstString, secondString, thirdString) {
    let firstStringLength = firstString.length;
    let secondStringLength = secondString.length;
    let thirdStringLength = thirdString.length;

    let totalLength = firstStringLength + secondStringLength + thirdStringLength;

    let averageLength = Math.floor(totalLength / 3);

    console.log(totalLength);
    console.log(averageLength);
}

// Test
// stringLength("chocolate", "ice cream", "cake");
// stringLength("pasta", "5", "22.3");