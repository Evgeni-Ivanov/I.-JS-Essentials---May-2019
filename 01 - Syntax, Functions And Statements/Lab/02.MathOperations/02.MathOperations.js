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
// mathOperations(2, 10, "+");
// mathOperations(2, 10, "-");
// mathOperations(2, 10, "*");
// mathOperations(2, 10, "/");
// mathOperations(2, 10, "%");
// mathOperations(2, 10, "**");