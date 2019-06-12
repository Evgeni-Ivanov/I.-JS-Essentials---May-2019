function numberConvertor() {
    initialize();

    let convertButton = document.getElementsByTagName("button")[0];
    convertButton.addEventListener("click", convertNumber);

    function convertNumber() {
        let input = document.getElementById("input");

        let convertTo = document.getElementById("selectMenuTo");

        let result = 0;

        if (input.value !== "" && convertTo.value === "binary") {
            result = decimalToBinaryConverter(Number(input.value));
            // result = Number(input.value).toString(2);
        } else if(input.value !== "" && convertTo.value === "hexadecimal") {
            result = decimalToHexadecimalConverter(Number(input.value));
            // result = Number(input.value).toString(16).toUpperCase();
        }

        document.getElementById("result").value = result;
    }

    function decimalToBinaryConverter(number) {
        return number.toString(2);
    }

    function decimalToHexadecimalConverter(number) {
        return number.toString(16).toUpperCase();
    }

    function initialize() {
        let selectMenuTo = document.getElementById("selectMenuTo");

        let binaryOption = selectMenuTo.getElementsByTagName("option")[0];
        // let binaryOption = selectMenuTo.querySelector("option");
        binaryOption.value = "binary";
        binaryOption.innerText = "Binary";

        let hexadecimalOption = document.createElement("option");
        selectMenuTo.appendChild(hexadecimalOption);
        hexadecimalOption.value = "hexadecimal";
        hexadecimalOption.innerText = "Hexadecimal";
    }
}