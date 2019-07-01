/**
 *
 * @param {Number} n
 * @param {Number} k
 */
function lastKNumbersSequence(n, k) {
    let sequence = [];
    sequence[0] = 1;

    let lastKNumbers = new Array(k).fill(0);


    for (let i = 0; i < n - 1; i++) {

        for (let j = 0; j < k - 1; j++) {
            lastKNumbers[j] = lastKNumbers[j + 1];
        }

        lastKNumbers[k - 1] = sequence[sequence.length - 1];
        let number = lastKNumbers.reduce((a, b) => a + b, 0);
        sequence.push(number);
    }

    console.log(sequence.join(" "));
}

// Test
//
// lastKNumbersSequence(6, 3);
//
// lastKNumbersSequence(8, 2);