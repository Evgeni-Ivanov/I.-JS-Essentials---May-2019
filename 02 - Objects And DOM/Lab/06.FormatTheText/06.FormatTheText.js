function formatTheText() {
    let inputElement = document.getElementById("input");
    let inputContent = inputElement.textContent;

    let sentences = inputContent.split(".").map(sentence => sentence.trim());
    let numberOfSentences = inputContent.split(".").length;

    let outputElement = document.getElementById("output");

    let numberOfParagraphs = parseInt(numberOfSentences / 3);
    if(numberOfSentences % 3 !== 0) {
        numberOfParagraphs++;
    }

    let index = 0;

    for(let i = 0; i < numberOfParagraphs; i++) {
        let paragraphElement = document.createElement('p');

        for (let j = index; j < index + 3; j++) {
            paragraphElement.innerHTML += sentences[j];
        }

        index += 3;
        outputElement.appendChild(paragraphElement);
    }
}