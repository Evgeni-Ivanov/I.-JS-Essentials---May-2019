function visitedSites() {
    let divElements = document.getElementsByClassName("link-1");

    for (let currentDivElement = 0; currentDivElement < divElements.length; currentDivElement++) {
        divElements[currentDivElement].addEventListener("click", function changeVisits() {
            
            let numberOfVisitsElementWords = divElements[currentDivElement].querySelector("p").textContent.split(" ");
            let currentNumberOfVisits = Number(numberOfVisitsElementWords[1]);

            let newNumberOfVisits = currentNumberOfVisits += 1;

            divElements[currentDivElement].querySelector("p").textContent = `visited ${newNumberOfVisits} times`;

        });
    }
}