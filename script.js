// Divs by Class
const bitContainerDivs = document.querySelectorAll(".bit-container");
const bitDivs = document.querySelectorAll(".bit");
const bitValueDiv = document.querySelectorAll(".bit-value");

    // Bit EventListeners
    bitDivs.forEach(bit => { bit.addEventListener('click', toggleBitOnOff) });
    bitValueDiv.forEach(display => { display.addEventListener('click', toggleDecimalValueShowHide) });

// Divs by ID
const bitCounterDiv = document.getElementById("bit-count");
const totalContainerDiv = document.getElementById("total-container");
const totalCalculationDiv = document.getElementById("total-calculation");
const totalValueDiv = document.getElementById("total-value");

// Buttons by ID
const addBitBtn = document.getElementById("add-bit-btn");
const bitTypeBtn = document.getElementById("bittype-btn");
const colormodeBtn = document.getElementById("colormode-btn");
const removeBitBtn = document.getElementById("remove-bit-btn");
const resetBtn = document.getElementById("reset-btn");
const valuesBtn = document.getElementById("values-btn");
const totalBtn = document.getElementById("total-btn");

    // Button EventListeners
    addBitBtn.addEventListener('click', addBitContainer);
    bitTypeBtn.addEventListener('change', toggleBitType);
    colormodeBtn.addEventListener('change', toggleColorMode);
    removeBitBtn.addEventListener('click', removeBitContainer);
    resetBtn.addEventListener('click', resetBits);
    totalBtn.addEventListener('change', function () {
        if (totalBtn.checked) {
            displayTotalValue();
            showElement(totalContainerDiv);
        } else {
            hideElement(totalContainerDiv);
        }
    });
    valuesBtn.addEventListener('change', function () {
        if (valuesBtn.checked) {
            showAllBitValues();
        } else {
            hideAllBitValues();
        }
    });




// Functions for bit values
function showBitValue(bitValueDiv) {
    bitValueDiv.innerText = bitValueDiv.getAttribute("data-bitValue");
}

function hideBitValue(bitValueDiv) {
    bitValueDiv.innerText = "";
}

function showAllBitValues() {
    bitValueDiv.forEach(bitValueDiv => {showBitValue(bitValueDiv)});
}
function hideAllBitValues() {
    bitValueDiv.forEach(bitValueDiv => {hideBitValue(bitValueDiv)});
}

function toggleDecimalValueShowHide(event) {
    let bitValueDiv = event.target;
      
    if (bitValueDiv.innerText === "") {
        showBitValue(bitValueDiv);
    } else {
        hideBitValue(bitValueDiv);
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
    let byteValue = 0;
    let bitValues = [];
 
    bitDivs.forEach(bit => {
        if (bit.classList.contains("on")) {
            let bitValueDiv = bit.parentElement.children[0];
            let bitValue = bitValueDiv.getAttribute("data-bitValue");
            byteValue += parseInt(bitValue);
            // Unshift array to make sure highest value is always on the left
            bitValues.unshift(bitValue);
        }
    });

    totalValueDiv.innerText = byteValue;
    displayTotalCalculation(bitValues);

}

function displayTotalCalculation(bitValues) {
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
    element.classList.remove("hidden");
}

function hideElement(element) {
    element.classList.add("hidden");
}

function toggleElementShowHide(element) {
    element.classList.toggle("hidden");
}

// Colormode
function toggleColorMode() {
    document.documentElement.classList.toggle("lightmode");
}

// Sidemenu
function openSideMenu() {
document.getElementById("side-menu").style.width = "250px";
}

function closeSideMenu() {
document.getElementById("side-menu").style.width = "0";
}