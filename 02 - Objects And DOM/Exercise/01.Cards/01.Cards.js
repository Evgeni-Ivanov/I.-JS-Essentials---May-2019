function cards() {
    let cards = document.getElementsByTagName("img");

    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", selectCard);
    }

    function selectCard(event) {
        let card = event.target;
        let player1Card = document.getElementById("result").getElementsByTagName("span")[0];
        // let player1Card = document.querySelector("#result span");
        let player2Card = document.getElementById("result").getElementsByTagName("span")[2];
        // let player2Card = document.querySelector("#result span:last-child");

        let cardValue = Number(card.name);

        if(card.parentNode === document.getElementById("player1Div") && player1Card.innerHTML === "") {
            player1Card.innerHTML = cardValue;
            card.src = card.src.replace("card", "whiteCard");

        } else if(card.parentNode === document.getElementById("player2Div") && player2Card.innerHTML === "") {
            player2Card.innerHTML = cardValue;
            card.src = card.src.replace("card", "whiteCard");

        }

        if(player1Card.innerHTML !== "" && player2Card.innerHTML !== "") {
            let card1 = document.querySelector(`#player1Div img[name="${player1Card.innerHTML}"]`);
            let card2 = document.querySelector(`#player2Div img[name="${player2Card.innerHTML}"]`);

            if(Number(player1Card.innerHTML) > Number(player2Card.innerHTML)) {
                card1.style.border = "2px solid green";
                card2.style.border = "2px solid red";

            } else {
                card1.style.border = "2px solid red";
                card2.style.border = "2px solid green";
            }

            document.getElementById("history").innerHTML += `[${player1Card.innerHTML} vs ${player2Card.innerHTML}] `;

            player1Card.innerHTML = "";
            player2Card.innerHTML = "";
        }
    }
}