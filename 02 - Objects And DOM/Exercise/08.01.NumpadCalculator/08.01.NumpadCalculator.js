function numpadCalculator() {
    let buttons = document.getElementsByTagName("button");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", onClick);
    }

    function onClick() {

        let expressionOutput = document.getElementById("expressionOutput");
        let resultOutput = document.getElementById("resultOutput");

        if (this.value !== "=" && this.value !== "Clear") {

            if (this.value === "+" || this.value === "-" || this.value === "*" || this.value === "/") {
                expressionOutput.textContent += ` ${this.value} `;

            } else {
                expressionOutput.textContent += `${this.value}`;
            }

        } else if (this.value === "=") {

            let resultString = expressionOutput.textContent;
            let numbers = resultString.match(/\d*\.*\d+/g);
            let operators = resultString.match(/[\+\-\*\/]/g);

            let result = Number(numbers[0]);

            if (operators) {

                for (let i = 0; i < numbers.length; i++) {
                    let operator = operators[i];
                    let nextNumber = Number(numbers[i + 1]);

                    switch (operator) {
                        case "+":
                            result += nextNumber;
                            break;
                        case "-":
                            result -= nextNumber;
                            break;
                        case "*":
                            result *= nextNumber;
                            break;
                        case "/":
                            result /= nextNumber;
                            break;
                    }
                }
            }

            resultOutput.textContent = result.toString();

        } else {
            expressionOutput.textContent = "";
            resultOutput.textContent = "";
        }
    }
}