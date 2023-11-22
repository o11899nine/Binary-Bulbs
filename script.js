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
showValuesBtn.addEventListener('click', showAllDecimalValues);
totalBtn.addEventListener('click', () => {
    displayTotalDecValue();
    toggleElementShowHide(totalContainerDiv);
});

// Unique Divs
const bitCounterDiv = document.getElementById("bit-counter-display");
const totalContainerDiv = document.getElementById("total-container");
const totalCalculationDiv = document.getElementById("total-calculation");
const totalValueDiv = document.getElementById("total-value");



// Functions for decimal displays and values
function showDecimalValue(decimalDisplay) {
    let decimalValue = decimalDisplay.getAttribute("data-decimalValue");
    decimalDisplay.innerText = decimalValue;
}

function hideDecimalValue(decimalDisplay) {
    decimalDisplay.innerText = "";
}

function showAllDecimalValues() {
    bitValueDiv.forEach(decimalDisplay => {
        showDecimalValue(decimalDisplay);
    });
}
function hideAllDecimalValues() {
    bitValueDiv.forEach(decimalDisplay => {
        hideDecimalValue(decimalDisplay);
    });
}

function toggleDecimalValueShowHide(event) {
      
    if (event.target.innerText === "") {
        showDecimalValue(event.target);
    } else {
        hideDecimalValue(event.target);
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
    // Show BitCount amount of bitContainers
    for (let i = 0; i < bitCount; i++) {
        showElement(bitContainerDivs[i]);
    }
    // Turn off hidden bits
    for (let i = bitCount; i < 8; i++) {
        let bit = bitContainerDivs[i].children[1];
        let decimalDisplay = bit.parentElement.children[0];
        turnBitOff(bit, decimalDisplay);
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
    bitDivs.forEach(bit => {
        turnBitOff(bit)
    });
}


// Total decimal counter
function displayTotalDecValue() {
    let totalDecValue = 0;
    let bitValues = [];
 
    bitDivs.forEach(bit => {
       
        if (bit.classList.contains("on")) {
            let decimalDisplay = bit.parentElement.children[0];
            let decValue = decimalDisplay.getAttribute("data-decimalValue");
            totalDecValue += parseInt(decValue);
            bitValues.unshift(decValue);
        }
    });

    totalValueDiv.innerText = totalDecValue;
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
function turnBitOff(bit) {
    let decimalDisplay = bit.parentElement.children[0];
    bit.classList.remove("on");
    decimalDisplay.classList.remove("on");
    displayTotalDecValue();
}

function turnBitOn(bit) {
    let decimalDisplay = bit.parentElement.children[0];
    bit.classList.add("on");
    decimalDisplay.classList.add("on");
    displayTotalDecValue();
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
function hideElement(element) {
    element.classList.add("hide");
}

function showElement(element) {
    element.classList.remove("hide");
}

function toggleElementShowHide(element) {
    element.classList.toggle("hide");
    console.log(element.classList);
}

// Colormode
function toggleColorMode() {
    let htmlTag = document.documentElement;
    htmlTag.classList.toggle("lightmode");
    if (htmlTag.classList.contains("lightmode")) {
        colormodeBtn.innerText = "Dark mode";
    } else {
        colormodeBtn.innerText = "Light mode";
    }
    
}