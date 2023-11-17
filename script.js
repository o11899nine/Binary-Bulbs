const lightBulbs = document.querySelectorAll(".lightbulb");


lightBulbs.forEach(function (lightbulb) { 
    lightbulb.addEventListener('click', switchBulb)
});


function switchBulb() {
    event.currentTarget.classList.toggle("on");
}

