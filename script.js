const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
    item.onclick = () => {
        if(item.id == "clear"){
            display.innerText = "";
        } else if (item.id == "backspace"){
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length -1 );
        }else if (display.innerText != "" && item.id == "="){
            display.innerText = eval(display.innerText);
        }else if (display.innerText == "" && item.id == "="){
            display.innerText = "Null";
            setTimeout(() => (display.innerText= ""),2000);
        }else {
            display.innerText += item.id;
        }
    } 
} );

/* const themeToggleBtn = document.querySelector('.theme-toogler');

themeToggleBtn.addEventListener('click', ()=>{
    document.body.classList.toggle('dark');
}) */


const themeToggleBtn = document.querySelector(".theme-toogler");
const calculator = document.querySelector(".calculator");
const body = document.querySelector("body");
const titulo = document.querySelector(".titulo");

let isDark=true;

themeToggleBtn.addEventListener('click', ()=>{
    calculator.classList.toggle("dark");
    body.classList.toggle("dark");
    titulo.classList.toggle("dark");
    themeToggleBtn.classList.toggle("active");
    isDark = ! isDark;
});