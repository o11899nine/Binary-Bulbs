// Elements with same class
const bitCards = document.querySelectorAll(".bit-card");
const bits = document.querySelectorAll(".bit");
const decimalDisplays = document.querySelectorAll(".decimal-display");
const decimalValues = document.querySelectorAll(".decimal-value")

// Unique elements
const addBitBtn = document.getElementById("add-bit-btn");
const bitCounterDisplay = document.getElementById("bit-counter-display");
const removeBitBtn = document.getElementById("remove-bit-btn");
const valuesBtn = document.querySelector("values-btn");

// Button EventListeners
addBitBtn.addEventListener('click', addBit);
removeBitBtn.addEventListener('click', removeBit);

// BitCard EventListeners
bits.forEach((bit) => { bit.addEventListener('click', toggleBitOnOff) });

decimalDisplays.forEach((display) => { display.addEventListener('click', toggleDecimalValue) });
decimalValues.forEach((value) => { value.addEventListener('click', toggleDecimalValue) });


function toggleDecimalValue(event) {
    let decimalDisplay = event.target;
    let decimalValue = decimalDisplay.children[0];
    toggleElementVisibility(decimalValue);
}

function removeBit() {
    let bitCount = bitCounterDisplay.getAttribute("data-bitCount");
    if (bitCount > 0) {
        bitCount--
    };
    
    updateBitCounterDisplay(bitCount);
    showBitCards(bitCount);
}

function addBit() {
    let bitCount = bitCounterDisplay.getAttribute("data-bitCount");
    if (bitCount < 8) {
        bitCount++
    };
    
    updateBitCounterDisplay(bitCount);
    showBitCards(bitCount);
}

function showBitCards(bitCount) {
    // Hide all bitCards
    bitCards.forEach((bitCard => hideElement(bitCard)));
    // Show BitCount amount of BitCards
    for (let i = 0; i < bitCount; i++) {
        showElement(bitCards[i]);
    }
}

function updateBitCounterDisplay(bitCount) {
    bitCounterDisplay.setAttribute("data-bitCount", bitCount);
    bitCounterDisplay.innerText = bitCount;
}


function toggleBitOnOff(event) {
    let bit = event.target;
    let decimalDisplay =  bit.parentElement.children[0];

    bit.classList.toggle("on");
    decimalDisplay.classList.toggle("on");
}   

function hideElement(element) {
    element.style.visibility = "hidden";
}

function showElement(element) {
    element.style.visibility = "visible";
}

function toggleElementVisibility(element) {
    if (element.style.visibility === "hidden") {
        element.style.visibility = "visible";
    } else {
        element.style.visibility = "hidden";
    }
}