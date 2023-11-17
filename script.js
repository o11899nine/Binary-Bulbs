const lightBulbs = document.querySelectorAll(".lightbulb");
const toggleBtn = document.querySelectorAll(".hide-btn")


lightBulbs.forEach(function (lightbulb) { 
    lightbulb.addEventListener('click', toggleLight)
});

toggleBtn.forEach(function (button) {
    button.addEventListener('click', toggleCardVisibility)
});

function toggleCardVisibility() {
    let button = event.target;
    button.innerText = "+";
    let card = button.parentElement;
    let binaryValue = card.children[0];
    let bulb = card.children[1];
    binaryValue.style.visibility = "hidden";
    bulb.style.visibility = "hidden";
}
    
function toggleLight() {
    event.currentTarget.classList.toggle("on");
}

