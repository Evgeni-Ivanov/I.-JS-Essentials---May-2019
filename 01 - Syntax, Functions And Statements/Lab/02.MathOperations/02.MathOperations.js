/**
 *
 * @param number1
 * @param number2
 * @param operator
 */

function mathOperations(number1, number2, operator) {
    let result = 0;

    switch (operator) {
        case"+":
            result = number1 + number2;
            break;
        case"-":
            result = number1 - number2;
            break;
        case"*":
            result = number1 * number2;
            break;
        case"/":
            result = number1 / number2;
            break;
        case"%":
            result = number1 % number2;
            break;
        case"**":
            result = number1 ** number2;
            break;
    }

    console.log(result);
}

//Test
// mathOperations(5, 6, "+");
// mathOperations(3, 5.5, "*");