const colorModeBtn = document.getElementById("color-mode-btn");


colorModeBtn.addEventListener('click', toggleColorMode);

function toggleColorMode() {
    
    document.body.classList.toggle("light-mode");

    if (colorModeBtn.innerText === "Light") {
        colorModeBtn.innerText = "Dark";
    } else {
        colorModeBtn.innerText = "Light";
    }
    colorModeBtn.classList.toggle("btn-dark");
    colorModeBtn.classList.toggle("btn-light");
  
}
