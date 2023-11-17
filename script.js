const lightBulbs = document.querySelectorAll(".lightbulb");
const cardVisibilityButtons = document.querySelectorAll(".card-visibility-btn")
const allCardsVisibilityButton = document.querySelector(".all-cards-visibility-btn")
const allValuesVisibilityButton = document.querySelector(".all-values-visibility-btn")
const valueDisplays = document.querySelectorAll(".value-display")
const cards = document.querySelectorAll(".card")


valueDisplays.forEach(function (valueDisplay) {
    valueDisplay.addEventListener('click', function() {
        toggleSingleValueVisibility(valueDisplay);
    });
});

lightBulbs.forEach(function (lightbulb) { 
    lightbulb.addEventListener('click', toggleLight);
});

cardVisibilityButtons.forEach(function (button) {
    button.addEventListener('click', function() {
        const card = this.parentElement;
        toggleSingleCardVisibility(card);
    });
});

allCardsVisibilityButton.addEventListener('click', toggleAllCards);
allValuesVisibilityButton.addEventListener('click', toggleAllValues);

function toggleSingleValueVisibility(valueDisplay) {
    let binaryValue = valueDisplay.getAttribute("data-binaryValue");
    if (valueDisplay.innerText === "") {
        valueDisplay.innerText = binaryValue;
    } else {
        valueDisplay.innerText = "";  
    }
}
function toggleSingleCardVisibility(card) {
    let valueDisplay = card.children[0];
    let bulb = card.children[1];
    let button = card.children[2];

    if (bulb.classList.contains("hidden")) {
        valueDisplay.classList.toggle("hidden");
        bulb.classList.toggle("hidden");
        button.innerText = "X";
    } else {
        valueDisplay.classList.toggle("hidden");
        bulb.classList.toggle("hidden");
        button.innerText = "+";
        if (bulb.classList.contains("on")) {
            bulb.classList.toggle("on");
            valueDisplay.classList.toggle("on");
        }
    }
}
    
function toggleLight() {
    let lightbulb = event.currentTarget;
    lightbulb.classList.toggle("on");
    let card = lightbulb.parentElement;
    let valueDisplay = card.children[0];
    valueDisplay.classList.toggle("on");

}

function toggleAllCards() {
    allCardsVisibilityButton.innerText === "Hide all" ? hideAllCards() : showAllCards();
}

function hideAllCards() {
    hideAllValues();
    cards.forEach(function (card) {
        let valueDisplay = card.children[0];
        let bulb = card.children[1];
        let button = card.children[2];
        if (!bulb.classList.contains("hidden")) {
            bulb.classList.toggle("hidden");
            valueDisplay.classList.toggle("hidden");
            button.innerText = "+";
        }
        if (bulb.classList.contains("on")) {
            bulb.classList.toggle("on");
            valueDisplay.classList.toggle("on");
        }
    });

    allCardsVisibilityButton.innerText = "Show all";
}
    
function showAllCards() {
    cards.forEach(function (card) {
        let valueDisplay = card.children[0];
        let bulb = card.children[1];
        let button = card.children[2];
        if (bulb.classList.contains("hidden")) {
            bulb.classList.toggle("hidden");
            valueDisplay.classList.toggle("hidden");
            button.innerText = "X";
        }
    });

    allCardsVisibilityButton.innerText = "Hide all";
    
}


function toggleAllValues() {
    allValuesVisibilityButton.innerText === "Hide values" ? hideAllValues() : showAllValues();
}

function hideAllValues() {
    valueDisplays.forEach(function (valueDisplay) {
        valueDisplay.innerText = ""
    });

    allValuesVisibilityButton.innerText = "Show values";
}

function showAllValues() {
    valueDisplays.forEach(function (valueDisplay) {
        let binaryValue = valueDisplay.getAttribute("data-binaryValue");
        valueDisplay.innerText = binaryValue;
    });

    allValuesVisibilityButton.innerText = "Hide values";
}