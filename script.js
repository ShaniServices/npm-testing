let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let colorValue = document.querySelector("h3");
let result = document.querySelector("#gradient");
let btn = document.querySelector(".btn");
let colora = document.querySelector(".color-1");
let colorb = document.querySelector(".color-2");

// Sitting Intial colors for gradient
result.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value}`;
colorValue.textContent = result.style.background;
colora.textContent = color1.value;
colorb.textContent = color2.value;

// Color Input Function
function setGradiant() {
    result.style.background = 
    `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    colorValue.textContent = result.style.background+ ";";

    // Color Hex Box
    colora.textContent = color1.value;
    colorb.textContent = color2.value;
}

// Rangom Generator Function 
function randomGenerator() {
    let colora =  Math.floor(Math.random()*16777215).toString(16);
    let colorb = Math.floor(Math.random()*16777215).toString(16);    
    color1.value = `#${colora}`;
    color2.value = `#${colorb}`;
    setGradiant();
}


color1.addEventListener("input", setGradiant);
color2.addEventListener("input", setGradiant);
btn.addEventListener("click", randomGenerator);