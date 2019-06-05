function growingWord() {
    let textToChange = document.getElementById("exercise").getElementsByTagName("p")[0];

    if(!textToChange.style.fontSize) {
        textToChange.style.fontSize = "1px";
    }

    if(textToChange.style.color === "blue") {
        textToChange.style.color = "green";
    } else if(textToChange.style.color === "green") {
        textToChange.style.color = "red";
    } else if(textToChange.style.color === "red") {
        textToChange.style.color = "blue";
    } else {
        textToChange.style.color = "blue";
    }

    let currentTextSize = Number(textToChange.style.fontSize.slice(0, -2));
    textToChange.style.fontSize = `${currentTextSize * 2}px`;
}