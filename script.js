// Elements with same class
const bitContainers = document.querySelectorAll(".bit-container");
const bits = document.querySelectorAll(".bit");
const decimalDisplays = document.querySelectorAll(".decimal-display");

// Unique elements
const addBitBtn = document.getElementById("add-bit-btn");
const bitCounterDisplay = document.getElementById("bit-counter-display");
const removeBitBtn = document.getElementById("remove-bit-btn");
const showValuesBtn = document.getElementById("show-values-btn");
const hideValuesBtn = document.getElementById("hide-values-btn");

// Button EventListeners
addBitBtn.addEventListener('click', addBit);
removeBitBtn.addEventListener('click', removeBit);
showValuesBtn.addEventListener('click', showAllDecimalValues)
hideValuesBtn.addEventListener('click', hideAllDecimalValues)

// Bit EventListeners
bits.forEach(bit => { bit.addEventListener('click', toggleBitOnOff) });

decimalDisplays.forEach(display => { display.addEventListener('click', toggleDecimalValue) });


function showAllDecimalValues() {
    decimalDisplays.forEach(decimalDisplay => {
        showDecimalValue(decimalDisplay);
    });
}
function hideAllDecimalValues() {
    decimalDisplays.forEach(decimalDisplay => {
        hideDecimalValue(decimalDisplay);
    });
}
function toggleDecimalValue(event) {
      
    if (event.target.innerText === "") {
        showDecimalValue(event.target);
    } else {
        hideDecimalValue(event.target);
    }
}

function showDecimalValue(decimalDisplay) {
    let decimalValue = decimalDisplay.getAttribute("data-decimalValue");
    decimalDisplay.innerText = decimalValue;
}

function hideDecimalValue(decimalDisplay) {
    decimalDisplay.innerText = "";
}

function removeBit() {
    let bitCount = bitCounterDisplay.getAttribute("data-bitCount");
    if (bitCount > 0) {
        bitCount--
    };
    
    updateBitCounterDisplay(bitCount);
    showbitContainers(bitCount);
}

function addBit() {
    let bitCount = bitCounterDisplay.getAttribute("data-bitCount");
    if (bitCount < 8) {
        bitCount++
    };
    
    updateBitCounterDisplay(bitCount);
    showbitContainers(bitCount);
}

function showbitContainers(bitCount) {
    // Hide all bitContainers
    bitContainers.forEach(bitContainer => hideElement(bitContainer));
    // Show BitCount amount of bitContainers
    for (let i = 0; i < bitCount; i++) {
        showElement(bitContainers[i]);
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