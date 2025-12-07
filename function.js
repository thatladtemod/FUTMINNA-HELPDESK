console.log("Hello there! This is thatladtemod's chatbot. How can I help you?");

const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const chat = document.querySelector("#chat-field");
let newmessage;
let newbotmessage;
let typing;

const user = () => {
  console.log(userInput.value);
  newmessage = document.createElement("div");
  newmessage.innerHTML = `<div class="flex flex-row-reverse gap-3 w-2/3">
            <div
                class="h-8 w-8 rounded-full p-2 bg-purple-100 text-purple-600 flex justify-center items-center"
                >
                <i class="fa-solid fa-user"></i>
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
  chat.scrollTop = chat.scrollHeight;

  assistant();

  userInput.value = "";
};

sendBtn.addEventListener("click", () => {
  if (userInput.value.trim() !== "") {
    user();
  }
});

const assistant = async () => {
  // store the value of newmessage in another variable
  userText = newmessage.textContent.trim();

  try {
    if (userText !== "") {
      const something = await fetch("replies.json");
      const response = await something.json();

      // Display message on console
      console.log(response.message);

      // Display message on screen
      newbotmessage = document.createElement("div");

      newbotmessage.innerHTML = `
            <div class="flex self-start gap-2 w-2/3">
                <div
                    class="h-8 w-8 rounded-full p-2 bg-purple-600 flex justify-center items-center"
                >
                    <i class="fa-solid fa-robot"></i>
                </div>
                <div
                    id="assistant-message"
                    class="text-sm text-gray-800 leading-5 border-purple-100 shadow-md rounded-md p-2 font-semibold"
                >
                thinking...
                </div>
           </div>
           `;

      newbotmessage.className = "flex w-full";
      chat.appendChild(newbotmessage);
      chat.scrollTop = chat.scrollHeight;

      setTimeout(() => {
        newbotmessage.innerHTML = `
            <div class="flex self-start gap-2 w-2/3">
                <div
                    class="h-8 w-8 rounded-full p-2 bg-purple-600 flex justify-center items-center"
                >
                    <i class="fa-solid fa-robot"></i>
                </div>
                <div
                    id="assistant-message"
                    class="text-sm text-gray-800 leading-5 border-purple-100 shadow-md rounded-md p-2 font-semibold"
                >
                ${response.message}
                </div>
           </div>
           `;
        chat.scrollTop = chat.scrollHeight;
      }, 2000);
    }
  } catch (error) {
    console.log(error);
  }
};
