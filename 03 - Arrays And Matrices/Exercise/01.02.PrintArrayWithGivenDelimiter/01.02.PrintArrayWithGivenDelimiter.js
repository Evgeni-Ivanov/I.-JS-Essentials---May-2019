/**
 *
 * @param {Array} input
 */
function printArrayWithGivenDelimiter(input) {
    let delimiter = input.pop();

    let result = input.join(delimiter);

    console.log(result);
}

// Test
//
// printArrayWithGivenDelimiter(['One', 'Two', 'Three', 'Four', 'Five', '-']);
//
// printArrayWithGivenDelimiter(['How about no?', 'I', 'will', 'not', 'do', 'it!', '_']);