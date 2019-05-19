/**
 *
 * @param {String} firstString
 * @param {String} secondString
 * @param {String} thirdString
 */

function sameNumbers(firstString, secondString, thirdString) {
    let firstStringLength = firstString.length;
    let secondStringLength = secondString.length;
    let thirdStringLength = thirdString.length;

    let totalLength = firstStringLength + secondStringLength + thirdStringLength;

    let averageLength = Math.floor(totalLength / 3);

    console.log(totalLength);
    console.log(averageLength);
}

// Test
// console.log(sameNumbers("sample", "test", "text"));