function tableSearchEngine() {
    let searchButton = document.getElementById("searchBtn");
    searchButton.addEventListener("click", search);

    function search() {
        let tableBody = document.getElementsByTagName("tbody")[0];
        let selectedDataRows = tableBody.getElementsByTagName("select");

        for (let currentElement = 0; currentElement < selectedDataRows.length; currentElement++) {
            selectedDataRows[currentElement].classList.remove("select");
        }

        let searchField = document.getElementById("searchField");
        let textToSearch = searchField.value;

        if (textToSearch !== "") {
            let dataRows = tableBody.getElementsByTagName("td");

            for (const currentDataRow of dataRows) {
                const currentDataRowText = currentDataRow.innerHTML;

                if (currentDataRowText.toLowerCase() === textToSearch.toLowerCase() ||
                    currentDataRowText.toLowerCase().includes(textToSearch.toLowerCase())) {

                    currentDataRow.parentElement.classList.add("select");
                }
            }

            searchField.value = "";
        }
    }
}