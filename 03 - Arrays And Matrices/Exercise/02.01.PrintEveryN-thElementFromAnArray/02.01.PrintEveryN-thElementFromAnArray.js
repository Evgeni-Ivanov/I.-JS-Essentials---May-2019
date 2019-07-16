/**
 *
 * @param {Array} input
 */
function printEveryNthElementFromAnArray(input) {
    let n = Number(input.pop());

    for (let i = 0; i < input.length; i += n) {

        console.log(`${input[i]}`);
    }
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