function chatRoom() {
    let chatInputArea = document.getElementById("chat_input");
    let sendButton = document.getElementById("send");
    let messageSection = document.getElementById("chat_messages");

    sendButton.addEventListener("click", sendMessage);

    function sendMessage() {

        if(chatInputArea.value) {
            let chatInputContent = chatInputArea.value;

            let messageToSend = document.createElement("div");
            messageToSend.className = "message my-message";
            messageToSend.textContent = chatInputContent;

            messageSection.appendChild(messageToSend);

            chatInputArea.value = "";
        }
    }
}