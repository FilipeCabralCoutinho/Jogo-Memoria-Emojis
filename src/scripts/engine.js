const emojis = [
    "🤣",
    "🤣",
    "😁",
    "😁",
    "😎",
    "😎",
    "😘",
    "😘",
    "😡",
    "😡",
    "🥳",
    "🥳",
    "🤢",
    "🤢",
    "😫",
    "😫"
];
let openCards = [];
let found = [];

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

function handleClick() {
    if (openCards.length < 2) {
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    if (openCards.length == 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    if (openCards[0].textContent === 
        openCards[1].textContent) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
        found.push(openCards[0], openCards[1])

    } else{
        openCards[0].classList.remove("boxOpen")
        openCards[1].classList.remove("boxOpen")
    }
    openCards = [];

    if (found.length == emojis.length) {
        alert("Você venceu!");
    }
}

