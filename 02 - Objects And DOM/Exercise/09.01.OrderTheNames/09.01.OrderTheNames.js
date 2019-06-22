function orderTheNames() {
    let addButton = document.getElementsByTagName("button")[0];
    addButton.addEventListener("click", addNameToDatabase);

    let inputForm = document.getElementsByTagName("input")[0];

    function addNameToDatabase() {
        let name = inputForm.value.toLowerCase();
        name = name[0].toUpperCase() + name.slice(1);

        inputForm.value = "";

        let position = name[0].charCodeAt() - ('A'.charCodeAt() - 1);

        let row = document.querySelector(`ol li:nth-child(${position})`);

        let namesInRow = row.textContent.split(", ").filter(currentName => currentName !== "");

        namesInRow = namesInRow.concat(name);
        row.textContent = namesInRow.join(", ");
    }
}