/**
 *
 * @param {Array} input
 */
function printEveryNthElementFromAnArray(input) {
    let n = Number(input.pop());

    console.log(input.filter((element, index) => index % n === 0).join("\n"));
}

// Test
//
// printEveryNthElementFromAnArray(['5',
//     '20',
//     '31',
//     '4',
//     '20',
//     '2']);
//
// printEveryNthElementFromAnArray(['dsa',
//     'asd',
//     'test',
//     'tset',
//     '2']
// );
//
// printEveryNthElementFromAnArray(['1',
//     '2',
//     '3',
//     '4',
//     '5',
//     '6']
// );