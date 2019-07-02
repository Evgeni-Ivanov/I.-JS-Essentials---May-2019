/**
 *
 * @param {Number} n
 * @param {Number} k
 */
function lastKNumbersSequence(n, k) {
    let sequence = [];
    sequence[0] = 1;

    for (let i = 1; i < n; i++) {
        let firstIndex;

        if (sequence.length >= k) {
            firstIndex = sequence.length - k;

        } else {
            firstIndex = 0;
        }

        let sum = sequence.slice(firstIndex, sequence.length).reduce((a, b) => a + b, 0);

        sequence[i] = sum;
    }

    console.log(sequence.join(" "));
}

// Test
//
// lastKNumbersSequence(6, 3);
//
// lastKNumbersSequence(8, 2);