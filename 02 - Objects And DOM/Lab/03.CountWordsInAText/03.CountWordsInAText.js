/**
 *
 * @param {Array} input
 */
function countWordsInAText(input) {
    let result = {};

    let text = input[0].split(/[, .?!'-:;"]/).filter(word => word.length > 0);

    for (let word of text) {
        if (!result[word]) {
            result[word] = 0;
        }

        result[word]++;
    }


    return JSON.stringify(result);
}

// Test
//
// console.log(countWordsInAText(["Far too slow, you're far too slow."]));
//
// console.log(countWordsInAText(["JS devs use Node.js for server-side JS.-- JS for devs"]));