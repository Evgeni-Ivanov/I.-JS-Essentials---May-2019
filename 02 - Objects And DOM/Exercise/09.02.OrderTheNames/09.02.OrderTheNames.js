function orderTheNames() {
    let addButton = document.getElementsByTagName("button")[0];
    addButton.addEventListener("click", addNameToDatabase);

    let inputForm = document.getElementsByTagName("input")[0];

    let liElements = document.getElementsByTagName("li");

    function addNameToDatabase() {
        let name = inputForm.value.split(", ").filter(currentName => currentName !== "");

        let liElementIndex = name[0].toUpperCase().charCodeAt() - 65;

        for (let i = 0; i < name.length; i++) {
            name[i] = name[i][0].toUpperCase() + name[i].slice(1).toLowerCase();
        }

        if (liElements[liElementIndex].textContent) {
            name.unshift(liElements[liElementIndex].textContent);
        }

        liElements[liElementIndex].textContent = name.join(", ");

        inputForm.value = "";
    }
}