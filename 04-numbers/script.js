document.querySelector(".sort-form").addEventListener("submit", (e) => {
    e.preventDefault()
    sortearNumeros().then(displayResults)
})

document.getElementById("btn-reset").addEventListener("click", () => {
    document.getElementById("form-container").style.display = "block"
    document.getElementById("result").style.display = "none"
})

