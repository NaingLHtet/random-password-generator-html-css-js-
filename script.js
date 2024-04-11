const inputNumber = document.querySelector("#charNumber");
const resultCon = document.querySelector(".result-con");

const lowerCharBtn = document.querySelector("#lowerChar");
const upperCharBtn = document.querySelector("#upperChar");
const numBtn = document.querySelector("#num");
const symbolBtn = document.querySelector("#symbol");

const btn = document.querySelector(".pswGenerateBtn");
const result = document.querySelector(".result");


// function to create random password base on user selectionm
function generatedPassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
  
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!&$_*-()?";
  
  let allowedChars = "";
  let password = "";
  
  allowedChars += includeLowercase ? lowercaseChars : "";
  allowedChars += includeUppercase ? uppercaseChars : "";
  allowedChars += includeNumbers ? numberChars : "";
  allowedChars += includeSymbols ? symbolChars : "";
  
  // return if user choose password length under 4 characters and show alert
  if(passwordLength <= 3) {
    const message1 = "password length must be at least 4";
    alertBox(message1);
    return "";
  };
  
  // return if user doesn't select any character set and show alert
  if(allowedChars.length === 0) {
    const message2 = "at least 1 set of character need to be selected";
    alertBox(message2);
    return "";
  };
  
  for(let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  };
  
  return password;
};


function resetRadioButtons() {
  lowerCharBtn.checked = false;
  upperCharBtn.checked = false;
  symbolBtn.checked = false;
  numBtn.checked = false;
};

btn.addEventListener("click", () => {
  let passwordLength = inputNumber.value;
  
  let includeLowercase = lowerCharBtn.checked;
  let includeUppercase = upperCharBtn.checked;
  let includeNumbers = numBtn.checked;
  let includeSymbols = symbolBtn.checked;
  
  let randomPassword = generatedPassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
  
  result.textContent = randomPassword;
  resetRadioButtons();
});


// create alert box
function alertBox(messages) {
  const alertBox = document.createElement("div");
  alertBox.classList.add("alertBox");
  
  const alertHeader = document.createElement("div");
  alertHeader.classList.add("header");
  alertHeader.textContent = "Mesaage";
  
  const alertMessage = document.createElement("div");
  alertMessage.classList.add("message");
  alertMessage.textContent = messages;
  
  const okBtn = document.createElement("div");
  okBtn.classList.add("okBtn");
  okBtn.textContent = "OK";
  
  alertBox.append(alertHeader, alertMessage, okBtn);
  document.body.appendChild(alertBox);
  
  okBtn.addEventListener("click", () => {
    alertBox.remove();
  });
};

// remove on scrolling the page when alert box is showing 
window.addEventListener("scroll", () => {
  const alertBox = document.querySelector(".alertBox");
  
  if(alertBox) {
    alertBox.remove();
  };
});