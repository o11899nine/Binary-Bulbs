const lightBulbs = document.querySelectorAll(".lightbulb");
const cardVisibilityButtons = document.querySelectorAll(".card-visibility-btn")
const allCardsVisibilityButton = document.querySelector(".all-cards-visibility-btn")
const cards = document.querySelectorAll(".card")


lightBulbs.forEach(function (lightbulb) { 
    lightbulb.addEventListener('click', toggleLight)
});

cardVisibilityButtons.forEach(function (button) {
    button.addEventListener('click', function() {
        const card = this.parentElement;
        toggleSingleCardVisibility(card);
    });
});

allCardsVisibilityButton.addEventListener('click', toggleAllCardsVisibility);

function toggleSingleCardVisibility(card) {
    let binaryValue = card.children[0];
    let bulb = card.children[1];
    let button = card.children[2];

    if (button.innerText === "+") {
    binaryValue.style.visibility = "visible";
    bulb.style.visibility = "visible";
    button.innerText = "X";
        
    } else {
        binaryValue.style.visibility = "hidden";
        bulb.style.visibility = "hidden";
        button.innerText = "+";
        if (bulb.classList.contains("on")) {
            bulb.classList.toggle("on");
        }
    }
}
    
function toggleLight() {
    event.currentTarget.classList.toggle("on");
    console.log(event.currentTarget.getAttribute("data-binaryValue"));
}

function toggleAllCardsVisibility() {
    if (allCardsVisibilityButton.innerText === "Hide all") {
        allCardsVisibilityButton.innerText = "Show all";
    } else {
        allCardsVisibilityButton.innerText = "Hide all";
    }
    cards.forEach(function (card) { 
        toggleSingleCardVisibility(card);
});
}
