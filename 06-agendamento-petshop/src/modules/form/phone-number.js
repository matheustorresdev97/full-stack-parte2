const phoneInput = document.getElementById("clientPhone");
let phoneNumber = "";
const listOfNumbers = " 0123456789";
const listOfCaracteres = "+()-"

// Everytime the phoneInput got focused, the script automatically puts + if there isnt one
phoneInput.addEventListener("focus",() => {
  if (!phoneInput.value.includes("+"))
    phoneInput.value = "+";
})

phoneInput.addEventListener("input", () => {
  if (!phoneInput.value.includes("+"))
    phoneInput.value = "+";

  if (!listOfNumbers.includes(phoneInput.value[phoneInput.value.length - 1])) {
    if (listOfCaracteres.includes(phoneInput.value[phoneInput.value.length-1])){
      if (Verify())
        phoneInput.value = phoneInput.value.slice(0,-1)
    }
    else
      phoneInput.value = phoneInput.value.slice(0,-1)
  }
  function Verify() {
    let contain = false
    if (phoneInput.value.slice(0,-1).includes(phoneInput.value[phoneInput.value.length-1]))
      contain = true
    return contain
  }

  if (phoneInput.value[phoneInput.value.length - 1] === " ") {
    if (!phoneInput.value.includes("("))
      phoneInput.value += "("
    else if (!phoneInput.value.includes(")")) {
      phoneInput.value = phoneInput.value.slice(0,-1)
      phoneInput.value += ") "
    }
    else if (!phoneInput.value.includes("-") && listOfNumbers.includes(phoneInput.value[phoneInput.value.length - 2])) {
      phoneInput.value = phoneInput.value.slice(0,-1)
      phoneInput.value += "-"
    }
  }
})