const sortForm = document.getElementsByClassName('sort__form')[0]
const minimumNumberInput = document.getElementsByClassName('number__min')[0]
const maximumNumberInput = document.getElementsByClassName('number__max')[0]
const amountNumberInput = document.getElementsByClassName('number__amount')[0]
const resultContainer = document.getElementsByClassName('result__container')[0]
const resultPage = document.getElementsByClassName('sort__result')[0]
const sortContainer = document.getElementsByClassName('sort')[0]
const submitSort = document.getElementsByClassName('sort__submit')[0]
const resubmitSort = document.getElementsByClassName('result__submit')[0]
const repeatNumberSwitch = document.getElementsByClassName('checkbox__input')[0]
const sortSubtitle = document.getElementsByClassName('sort__subtitle')[0]

let timesSorted = 0 

const validateInput = () => {
    const numberRegex = new RegExp("^[0-9]+$")
}

const sortNumber = (min, max) => {
    return Math.floor(Math.random() * (Number(max) - Number(min)) + Number(min))
}

const showSortedNumber = (test) => {
    const number = document.createElement('p')
    number.className = "sorted__number"
    number.innerText = test
    resultContainer.appendChild(number)
}

const clearSortedNumbers = () => {
    const numbers = document.querySelectorAll('.sorted__number')
    for (let number of numbers) {
        number.parentNode.removeChild(number)
    }
}

sortForm.addEventListener("submit", (e) => {
    e.preventDefault()
})

submitSort.addEventListener('click', () => {
    let min = minimumNumberInput.value
    let max = maximumNumberInput.value
    sortContainer.style.display = 'none'
    resultPage.style.display = 'flex'
    timesSorted++
    sortSubtitle.innerText = `${timesSorted}º resultado`
    showSortedNumber(sortNumber(min, max))
    showSortedNumber(sortNumber(min, max))
})

resubmitSort.addEventListener('click', () => {
    sortContainer.style.display = 'flex'
    resultPage.style.display = 'none' 
   clearSortedNumbers()
})