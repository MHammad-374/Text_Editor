const titleCase = (sentence) => {
    let words = sentence.split(" ")
    let newArr = []
    let result;
    words.map(word => {
                word = word.replace(word.charAt(0), word.charAt(0).toUpperCase())  
        newArr.push(word)
        result = newArr.join(" ")
    })
    return result
}

let text = document.getElementsByClassName("txt-inpt")[0]
let letterCountDisplay = document.getElementsByClassName("words")[0]
let upper = document.getElementById("upperCase")
let lower = document.getElementById("lowerCase")
let title = document.getElementById("titleCase")

text.addEventListener('input', () => {
    let value = text.value.trim()
    let words = value.split(" ")
    let onlyWords = [];
    words.map(word => {
        if (word !== '') {
            onlyWords.push(word)
        }
    })
    let characters = onlyWords.join("")
    letterCountDisplay.innerHTML = `${characters.length} characters and ${onlyWords.length}`
})

upper.addEventListener('click', () => {
    let newText = text.value.toUpperCase()
    return text.value = newText
})
lower.addEventListener('click', () => {
    let newText = text.value.toLowerCase()
    return text.value = newText
})
title.addEventListener('click', () => {
    let newText = text.value
    let txt = titleCase(newText)
    return text.value = txt
})