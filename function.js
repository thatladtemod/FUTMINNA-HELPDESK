console.log("Hello there! This is thatladtemod's chatbot. How can I help you?")

const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn")
const chat = document.querySelector(".chat-field")
let newmessage

const user = () => {
    console.log(userInput.value);
    newmessage = document.createElement("div");
    newmessage.textContent = userInput.value;
    chat.appendChild(newmessage);
    setTimeout(async () => {
        await assistant();
    }, 2000)
    userInput.value = ""
}

sendBtn.addEventListener("click", user)

const assistant = async () => {
    userText = newmessage
    try {
        if (userText) {
            const something = await fetch("replies.json");
            const response = await something.json();

            // Display message on console
            console.log(response.message);

            // Display message on screen
            let newbotmessage = document.createElement("div")
            newbotmessage.textContent = response.message
            chat.appendChild(newbotmessage)
        }
    } catch (error) {
        console.log(error)
    }
}

