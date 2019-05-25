/**
 *
 * @param {Number} number
 */
function sameNumbers(number) {
    let areSame = true;
    let sumOfDigits = 0;

    for (let i = 0; i < number.toString().length; i++) {

        if (number.toString()[0] === number.toString()[i] && areSame === true) {
            areSame = true;
        }
        else {
            areSame = false;
        }

        sumOfDigits += Number(number.toString()[i]);
    }

    console.log(areSame);
    console.log(sumOfDigits);
}

// Test
//
// sameNumbers(2222222);
//
// sameNumbers(1234);