const form = document.querySelector("form");
const newItem = document.getElementById("new-item");
const button = document.querySelector('button[type="submit"]');
const itemList = document.getElementById("items-list");
const item = document.getElementsByClassName("item");
const checkbox = document.querySelector('input[type="checkbox"]');
const itemName = document.querySelector("span");
const removeButton = document.querySelectorAll("li.item > svg");
const error = document.querySelector("div.add-item > p");

form.onsubmit = (event) => {
  event.preventDefault();

  if (newItem.value == "") {
    newItem.classList.add("error-border");
    error.classList.remove("hidden");

    button.blur();

    newItem.addEventListener("keypress", () => {
      newItem.classList.remove("error-border");
      error.classList.add("hidden");
    });
    return;
  } else {
    newItem.classList.remove("error-border");
    error.classList.add("hidden");
  }

  addItem(newItem.value);
  newItem.value = "";
  button.blur();
};

function addItem(name) {
  const newItem = document.createElement("li");
  newItem.classList.add("item");

  const new_checkbox = document.createElement("input");
  new_checkbox.setAttribute("type", "checkbox");
  newItem.append(new_checkbox);
  const newName = document.createElement("span");
  newName.textContent = name;
  newItem.append(newName);
  const newRemoveImg = document.createElement("img");
  newRemoveImg.setAttribute("src", "./img/trash-bin.svg");
  newRemoveImg.setAttribute("alt", "Ícone de lata de lixo");
  newItem.append(newRemoveImg);
  itemList.prepend(newItem);

  deleteEvent(newRemoveImg);
}

removeButton.forEach((selected_element) => {
  deleteEvent(selected_element);
});

function deleteEvent(element) {
  element.addEventListener("click", (event) => {
    const warningBox = document.getElementById("warning-wrapper");
    const warningMessagem = warningBox.querySelector("p");
    const removedItem = event.target.closest("li.item");
    const closeIcon = document.getElementById("close-icon");

    warningMessagem.querySelector("span.removed").textContent =
      removedItem.querySelector("span").textContent;

    warningBox.classList.remove("hidden");

    removedItem.remove();

    closeIcon.addEventListener("click", () => {
      warningBox.classList.add("hidden");
    });
  });
}
