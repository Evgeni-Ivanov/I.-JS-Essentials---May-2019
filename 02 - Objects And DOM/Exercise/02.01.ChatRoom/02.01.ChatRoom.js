function chatRoom() {
    let chatInputArea = document.getElementById("chat_input");
    let sendButton = document.getElementById("send");

    sendButton.addEventListener("click", sendMessage);

    function sendMessage() {

        if(chatInputArea.value !== "") {
            let messageSection = document.getElementById("chat_messages");

            let messageToSend = document.createElement("div");
            messageToSend.classList.add("message");
            messageToSend.classList.add("my-message");
            messageToSend.innerHTML += chatInputArea.value;

            messageSection.appendChild(messageToSend);

            chatInputArea.value = "";
        }
    }
}