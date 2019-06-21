function numpadCalculator() {
    [...document.querySelectorAll('.keys button')]
        .filter(b => b.value !== '=' && b.value !== 'Clear')
        .forEach(b => b.addEventListener('click', displayExpression));

    let expressionOutput = document.getElementById("expressionOutput");

    function displayExpression(event) {
        let button = event.target;

        if(button.value === "+" || button.value === "-" || button.value === "*" || button.value === "/") {
            expressionOutput.textContent += ` ${button.value} `;

        } else {
            expressionOutput.textContent += `${button.value}`;
        }
    }


    let equalButton = document.querySelector('.keys button[value="="]');
    equalButton.addEventListener("click", displayResult);

    let resultOutput = document.getElementById("resultOutput");

    function displayResult() {
        let expressionRegex = /(\d+(.\d+)?)\s[+/*-]\s(\d+(.\d+)?)/;
        let match = expressionOutput.textContent.match(expressionRegex);

        if(match) {
            resultOutput.textContent = eval(expressionOutput.textContent);

        } else {
            resultOutput.textContent = 'NaN';
        }
    }

    let clearButton = document.getElementsByClassName("clear")[0];
    clearButton.addEventListener("click", clear);

    function clear() {
        expressionOutput.textContent = "";
        resultOutput.textContent = "";
    }
}