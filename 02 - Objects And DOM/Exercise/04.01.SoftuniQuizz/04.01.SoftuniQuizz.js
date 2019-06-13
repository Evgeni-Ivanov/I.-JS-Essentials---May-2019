function softuniQuizz() {
    let sections = document.getElementsByTagName("section");

    let rightAnswers = ["onclick", "JSON.stringify()", "A programming API for HTML and XML documents"];

    let givenRightAnswers = 0;

    for (let i = 0; i < sections.length; i++) {
        let currentQuestionAnswers = sections[i].getElementsByClassName("answer-text");

        if (i !== sections.length - 1) {

            for (let currentAnswer = 0; currentAnswer < currentQuestionAnswers.length; currentAnswer++) {
                currentQuestionAnswers[currentAnswer].addEventListener("click", solve);

                function solve(event) {
                    let givenAnswer = currentQuestionAnswers[currentAnswer].innerHTML;

                    if (givenAnswer === rightAnswers[i]) {
                        givenRightAnswers++;
                    }

                    sections[i].classList.add("hidden");
                    sections[i + 1].classList.remove("hidden");

                    sections[i].style.display = "none";
                    sections[i + 1].style.display = "block";
                }
            }

        } else {

            for (let currentAnswer = 0; currentAnswer < currentQuestionAnswers.length; currentAnswer++) {
                currentQuestionAnswers[currentAnswer].addEventListener("click", solve);

                function solve(event) {
                    let givenAnswer = currentQuestionAnswers[currentAnswer].innerHTML;

                    if (givenAnswer === rightAnswers[i]) {
                        givenRightAnswers++;
                    }

                    sections[i].classList.add("hidden");
                    sections[i].style.display = "none";

                    let resultElement = document.getElementById("results");
                    resultElement.style.display = "block";
                    let result = resultElement.getElementsByTagName("h1")[0];


                    if (givenRightAnswers === 3) {
                        result.innerHTML = `You are recognized as top JavaScript fan!`;
                    } else {
                        result.innerHTML = `You have ${givenRightAnswers} right answers`;
                    }
                }
            }
        }
    }
}