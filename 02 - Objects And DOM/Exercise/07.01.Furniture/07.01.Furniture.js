function furniture() {
    let generateButton = document.getElementsByTagName("button")[0];
    generateButton.addEventListener("click", generateFurniture);

    let checkbox = document.getElementsByTagName("input")[0];
    checkbox.disabled = false;

    function generateFurniture() {
        let inputTextArea = document.getElementsByTagName("textarea")[0];

        if (inputTextArea.value !== "") {
            let furniture = JSON.parse(inputTextArea.value);

            let tableBody = document.getElementsByTagName("tbody")[0];

            for (let element of furniture) {
                element.price = Number(element.price);
                element.decFactor = Number(element.decFactor);

                let newTableRow = document.createElement("tr");

                newTableRow.innerHTML =
                    `<td><img src=${element.img}></td>
                    <td><p>${element.name}</p></td>
                    <td><p>${element.price}</p></td>
                    <td><p>${element.decFactor}</p></td>
                    <td><input type="checkbox"/></td>`;

                tableBody.appendChild(newTableRow);
            }
        }
    }

    let buyButton = document.getElementsByTagName("button")[1];
    buyButton.addEventListener("click", buyFurniture);

    function buyFurniture() {
        let outputTextArea = document.getElementsByTagName("textarea")[1];

        let boughtFurniture = [];
        let totalPrice = 0;
        let totalDecorationFactor = 0;

        let checkboxes = document.querySelectorAll("input[type=checkbox]:checked");

        for (let checkbox of checkboxes) {
            let itemRow = checkbox.parentElement.parentElement;
            let furnitureName = itemRow.getElementsByTagName("p")[0].innerHTML;
            let furniturePrice = Number(itemRow.getElementsByTagName("p")[1].innerHTML);
            let furnitureDecorationFactor = Number(itemRow.getElementsByTagName("p")[2].innerHTML);

            boughtFurniture.push(furnitureName);
            totalPrice += furniturePrice;
            totalDecorationFactor += furnitureDecorationFactor;
        }

        let averageDecorationFactor = totalDecorationFactor / checkboxes.length;

        outputTextArea.value += `Bought furniture: ${boughtFurniture.join(", ")}\n`;
        outputTextArea.value += `Total price: ${totalPrice.toFixed(2)}\n`;
        outputTextArea.value += `Average decoration factor: ${averageDecorationFactor}`;
    }
}