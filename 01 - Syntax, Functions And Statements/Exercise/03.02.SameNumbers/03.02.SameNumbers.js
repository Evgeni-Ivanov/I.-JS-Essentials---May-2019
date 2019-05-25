/**
 *
 * @param {Number} number
 */
function sameNumbers(number) {
    number = number.toString();
    let areSame = true;
    let firstNumber = number[0];
    let sumOfDigits = Number(firstNumber);


    for (let i = 1; i < number.length; i++) {

        if (firstNumber !== number[i]) {
            areSame = false;
        }

        sumOfDigits += Number(number[i]);
    }

    console.log(areSame);
    console.log(sumOfDigits);
}

// Test
// sameNumbers(2222222);
//
// sameNumbers(1234);