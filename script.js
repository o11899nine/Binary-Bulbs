const cards = document.querySelectorAll(".card");
const valueDisplays = document.querySelectorAll(".value-display");
const lightBulbs = document.querySelectorAll(".lightbulb");
const allValuesVisibilityButton = document.querySelector(".all-values-visibility-btn");
const bulbCounterMinusBtn = document.getElementById("bulb-counter-minus-btn");
const bulbCounterPlusBtn = document.getElementById("bulb-counter-plus-btn");
const bulbCounterDisplay = document.getElementById("bulb-counter-display");


bulbCounterPlusBtn.addEventListener('click', function () {
    countBulbs("+")
});
bulbCounterMinusBtn.addEventListener('click', function () {
    countBulbs("-")
});

function countBulbs(operator) {
    let numBulbs = parseInt(bulbCounterDisplay.value);
    operator === "+" ? numBulbs += 1: numBulbs -= 1;
    
    if (numBulbs < 0) {
        numBulbs = 0;
    } else if (numBulbs > 8) {
        numBulbs = 8;
    }

    bulbCounterDisplay.value = numBulbs;

    cards.forEach(function (card) {
        hideElement(card)
    });

    for (let i = 0; i < numBulbs; i++) {
        showElement(cards[i])
    }
}


valueDisplays.forEach(function (valueDisplay) {
    valueDisplay.addEventListener('click', function() {
        toggleSingleValueVisibility(valueDisplay);
    });
});

lightBulbs.forEach(function (lightbulb) { 
    lightbulb.addEventListener('click', toggleLight);
});


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
        valueDisplay.innerText = "";
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
    hideAllValues();
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

function hideElement(element) {
    element.style.visibility = "hidden";
}

function showElement(element) {
    element.style.visibility = "visible";
}