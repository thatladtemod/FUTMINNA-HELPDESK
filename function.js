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
                class="text-sm text-purple-600 leading-5 border-purple-100 shadow-md rounded-md p-2 font-semibold wrap-break-word"
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
  // store the value of newmessage in another variable and split into an array
  userText = newmessage.textContent.trim().split(" ");
  userText = userText.map(word => word.toLowerCase())
  console.log(userText)

  try {
    // fetch json file for responses
    const something = await fetch("replies.json")
    const response = await something.json()
    console.log(response.faqs)

    let foundAnswer
    
    // matching up keywords
    outerLoop:
    for (text of userText) {
      for (object of response.faqs) {
        if (object.keywords.includes(text)) {
          console.log(object.answer);
          foundAnswer = object.answer
          break outerLoop
        }
      }
    }
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

      if (!foundAnswer) {
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
                Sorry, I could not find a reply for this.
                </div>
           </div>
           `;
          chat.scrollTop = chat.scrollHeight;
        }, 2000);
      } else {
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
                ${object.answer}
                </div>
           </div>
           `;
          chat.scrollTop = chat.scrollHeight;
        }, 2000);
      }
    }  catch (error) {
    console.log(error);
  }
};
