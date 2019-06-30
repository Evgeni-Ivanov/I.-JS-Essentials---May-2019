/**
 *
 * @param {Number} n
 * @param {Number} k
 */
function lastKNumbersSequence(n, k) {
    let sequence = [];
    sequence[0] = 1;

    for (let i = 1; i < n; i++) {

        let sum = 0;
        let startIndex = Math.max(0, i - k);

        for (let j = startIndex; j < i; j++) {
            sum += sequence[j];
        }

        sequence[i] = sum;
    }

    console.log(sequence.join(" "));
}

// Test
//
// lastKNumbersSequence(6, 3);
//
// lastKNumbersSequence(8, 2);