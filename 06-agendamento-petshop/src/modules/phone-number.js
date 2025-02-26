const phoneInput = document.getElementById("clientPhone");
let phoneNumber = "";
const listOfNumbers = "0123456789";

phoneInput.addEventListener("focus", () => {
  if (!phoneInput.value.includes("+")) phoneInput.value = "+";
  if (phoneNumber) phoneInput.value = phoneNumber;
});

phoneNumber = phoneInput.addEventListener("keydown", (event) => {
  if (!(event.key === "Tab"))
    event.preventDefault();
  if (event.key === "Backspace" || event.key === "Delete") {
    phoneNumber += key;
  }
  validInput(event.key);
  if (phoneNumber) phoneInput.value = phoneNumber;
});

function validInput(key) {
  if (
    key === " " &&
    listOfNumbers.includes(phoneNumber[phoneNumber.length - 1])
  ) {
    if (!phoneNumber.includes("(")) phoneNumber += " (";
    else if (!phoneNumber.includes(")")) phoneNumber += ") ";
    else if (phoneNumber.includes(")")) phoneNumber += "-";
  } else if (listOfNumbers.includes(key)) {
    if (!phoneNumber) phoneNumber = "+";
    phoneNumber += key;
    console.log(phoneNumber);
  }
}
