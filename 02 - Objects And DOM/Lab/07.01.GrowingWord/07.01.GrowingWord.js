function growingWord() {
    let textToChange = document.querySelector("#exercise p");

    let colorElements = document.querySelectorAll("#colors div");

    let newPixelSize = Number(textToChange.style.fontSize.slice(0, -2)) * 2 || 2;

    if (newPixelSize === 2) {
        colorElements[0].classList.add("active");

    } else {

        for(let i = 0; i < colorElements.length; i++) {

            if(colorElements[i].classList.contains("active")) {
                colorElements[i].classList.remove("active");

                if(i === colorElements.length - 1) {
                    colorElements[0].classList.add("active");

                } else {
                    colorElements[i + 1].classList.add("active");

                }
                break;
            }
        }
    }

    let color = document.getElementsByClassName("active")[0].id.slice(0, -3);

    textToChange.style.color = color;
    textToChange.style.fontSize = `${newPixelSize}px`;
}