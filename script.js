// Bits
const bitContainerDivs = document.querySelectorAll(".bit-container");
const bitDivs = document.querySelectorAll(".bit");
const bitValueDiv = document.querySelectorAll(".bit-value");

// Bit EventListeners
bitDivs.forEach(bit => { bit.addEventListener('click', toggleBitOnOff) });
bitValueDiv.forEach(display => { display.addEventListener('click', toggleDecimalValueShowHide) });

// Buttons
const addBitBtn = document.getElementById("add-bit-btn");
const bitTypeBtn = document.getElementById("bittype-btn");
const colormodeBtn = document.getElementById("colormode-btn");
const hideValuesBtn = document.getElementById("hide-values-btn");
const removeBitBtn = document.getElementById("remove-bit-btn");
const resetBtn = document.getElementById("reset-btn");
const showValuesBtn = document.getElementById("show-values-btn");
const totalBtn = document.getElementById("total-btn");

// Button EventListeners
addBitBtn.addEventListener('click', addBitContainer);
bitTypeBtn.addEventListener('click', toggleBitType);
colormodeBtn.addEventListener('click', toggleColorMode);
hideValuesBtn.addEventListener('click', hideAllDecimalValues);
removeBitBtn.addEventListener('click', removeBitContainer);
resetBtn.addEventListener('click', resetBits);
showValuesBtn.addEventListener('click', showAllBitValues);
totalBtn.addEventListener('click', () => {
    displayTotalValue();
    toggleElementShowHide(totalContainerDiv);
});

// Unique Divs
const bitCounterDiv = document.getElementById("bit-count");
const totalContainerDiv = document.getElementById("total-container");
const totalCalculationDiv = document.getElementById("total-calculation");
const totalValueDiv = document.getElementById("total-value");



// Functions for bit values
function showBitValue(bitValueDiv) {
    bitValueDiv.innerText = bitValueDiv.getAttribute("data-decimalValue");
}

function hideBitValue(bitValueDiv) {
    bitValueDiv.innerText = "";
}

function showAllBitValues() {
    bitValueDiv.forEach(bitValueDiv => {
        showBitValue(bitValueDiv);
    });
}
function hideAllDecimalValues() {
    bitValueDiv.forEach(bitValueDiv => {
        hideBitValue(bitValueDiv);
    });
}

function toggleDecimalValueShowHide(event) {
    let bitValueDiv = event.target;
      
    if (bitValueDiv.innerText === "") {
        showBitValue(event.target);
    } else {
        hideBitValue(event.target);
    }
}

// Functions for Byte
function removeBitContainer() {
    let bitCount = bitCounterDiv.getAttribute("data-bitCount");
    if (bitCount > 0) {
        bitCount--
    };
    
    updateBitCounter(bitCount);
    showBitContainers(bitCount);
}

function addBitContainer() {
    let bitCount = bitCounterDiv.getAttribute("data-bitCount");
    if (bitCount < 8) {
        bitCount++
    };
    
    updateBitCounter(bitCount);
    showBitContainers(bitCount);
}

function showBitContainers(bitCount) {
    // Hide all bitContainers
    bitContainerDivs.forEach(bitContainer => hideElement(bitContainer));

    // Show bitCount amount of bitContainers
    for (let i = 0; i < bitCount; i++) {
        showElement(bitContainerDivs[i]);
    }
    // Turn off hidden bits
    for (let i = bitCount; i < 8; i++) {
        let bit = bitContainerDivs[i].children[1];
        let bitValueDiv = bit.parentElement.children[0];
        turnBitOff(bit, bitValueDiv);
    }
}

function toggleBitType() {
    bitDivs.forEach(bit => {
        if (bit.classList.contains("bulb")) {
            bit.classList.remove("bulb");
            bit.classList.add("digit");
            bitTypeBtn.innerText = "Bulbs";
        } else {
            bit.classList.remove("digit");
            bit.classList.add("bulb");
            bitTypeBtn.innerText = "Binary";
        }

    });
}

function resetBits() {
    bitDivs.forEach(bit => {turnBitOff(bit)});
}


// Total decimal counter
function displayTotalValue() {
    let totalValue = 0;
    let bitValues = [];
 
    bitDivs.forEach(bit => {
       
        if (bit.classList.contains("on")) {
            let bitValueDiv = bit.parentElement.children[0];
            let decValue = bitValueDiv.getAttribute("data-decimalValue");
            totalValue += parseInt(decValue);
            bitValues.unshift(decValue);
        }
    });

    totalValueDiv.innerText = totalValue;
    if (bitValues.length > 0) {
        totalCalculationDiv.innerText = bitValues.join(' + ');
    } else {
        totalCalculationDiv.innerText = " ";
    }
}

// Bit counter
function updateBitCounter(bitCount) {
    bitCounterDiv.setAttribute("data-bitCount", bitCount);
}

// Functions for bits
function turnBitOn(bit) {
    let bitValueDiv = bit.parentElement.children[0];
    bit.classList.add("on");
    bitValueDiv.classList.add("on");
    displayTotalValue();
}

function turnBitOff(bit) {
    let bitValueDiv = bit.parentElement.children[0];
    bit.classList.remove("on");
    bitValueDiv.classList.remove("on");
    displayTotalValue();
}


function toggleBitOnOff(event) {
    let bit = event.target;
    
    if (bit.classList.contains("on")) {
        turnBitOff(bit);
    } else {
        turnBitOn(bit);
    }
}   

// Functions for all elements
function showElement(element) {
    element.classList.remove("hide");
}

function hideElement(element) {
    element.classList.add("hide");
}

function toggleElementShowHide(element) {
    element.classList.toggle("hide");
}

// Colormode
function toggleColorMode() {
    document.documentElement.classList.toggle("lightmode");
}