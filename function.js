console.log("Hello there! This is thatladtemod's chatbot. How can I help you?")

const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn")
const chat = document.querySelector("#chat-field")
let newmessage

const user = () => {
    console.log(userInput.value);
    newmessage = document.createElement("div");
    newmessage.innerHTML = `<div class="flex flex-row-reverse gap-3 w-2/3">
            <div
                class="h-8 w-8 rounded-full p-2 bg-purple-100 text-purple-600 flex justify-center items-center"
                >
                U
            </div>
            <div
                id="user-message"
                class="text-sm text-purple-600 leading-5 border-purple-100 shadow-md rounded-md p-2 font-semibold"
                >
                ${userInput.value}
            </div>
          </div>`;
    newmessage.className = "flex w-full justify-end";
    chat.appendChild(newmessage);
    setTimeout(async () => {
        await assistant();
    }, 2000)
    userInput.value = ""
}

sendBtn.addEventListener("click", user)

const assistant = async () => {

    // store the value of newmessage in another variable 
    userText = newmessage

    try {
        if (userText) {
            const something = await fetch("replies.json");
            const response = await something.json();

            // Display message on console
            console.log(response.message);

            // Display message on screen
            let newbotmessage = document.createElement("div")
            newbotmessage.innerHTML = `
            <div class="flex self-start gap-2 w-2/3">
                <div
                    class="h-8 w-8 rounded-full p-2 bg-purple-600 flex justify-center items-center"
                >
                    AI
                </div>
                <div
                    id="assistant-message"
                    class="text-sm text-gray-800 leading-5 border-purple-100 shadow-md rounded-md p-2 font-semibold"
                >
                ${response.message}
                </div>
           </div>
           `;
            newbotmessage.className = "flex w-full"
            chat.appendChild(newbotmessage)
        }
    } catch (error) {
        console.log(error)
    }
}

