let lampButton = document.querySelector(".lampButton");
let lampON = false

lampButton.onclick = function () {
    let img = this.querySelector("img");
    lampButton.classList.toggle("lightON");
    lampButton.classList.toggle("bordinha");


    if (img.src.includes("light-bulb-night.png")) {
        img.src = "./images/light-bulb.png";
        lampON = true;
    } else {
        img.src = "./images/light-bulb-night.png";
        lampON = false;
    }
};

let switchElement = document.querySelector(".switch");
let switchText = document.querySelector(".switch-text");
let slider = document.querySelector(".slider");

let isAutomatic = true;

switchElement.onclick = function () {
    isAutomatic = !isAutomatic;
    switchElement.classList.toggle("active");
    switchElement.classList.toggle("gradient")
    
    if (isAutomatic) {
        switchText.textContent = "Manual";
    } else {
        switchText.textContent = "Automático";
    }
};

let buttons = document.querySelectorAll(".button");
let button1 = false
let button2 = false
let button3 = false

buttons.forEach((button) => {
    button.onclick = function () {
        active = document.querySelectorAll(".grid-active")
        if (button.classList.contains("active-raining")) {
            button1 = !button1;
            if (button1 == true) {
                active[0].classList.add("gradient")
                
            }
            else {
                active[0].classList.remove("gradient")
            }
            
        }
        if (button.classList.contains("active-airdrop")) {
            button2 = !button2;
            if (button2 == true) {
                active[1].classList.add("gradient")
                
            }
            else {
                active[1].classList.remove("gradient")
            }
        }
        if (button.classList.contains("active-door")){
            button3 = !button3;
            if (button3 == true) {
                active[2].classList.add("gradient")
                
            }
            else {
                active[2].classList.remove("gradient")
            }
        }
    };
});

