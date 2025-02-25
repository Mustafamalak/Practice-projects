// const display = document.querySelector("#display")
// const keys = document.querySelector(".keys")
// const operatorbtn = document.querySelectorAll(".operator-btn")
const button = document.querySelectorAll(".button")
const displaytxt = document.querySelector("#displaytext")


button.forEach((btn) => {
    btn.addEventListener("click",()=>{
        console.log("Adding event listener to:", btn.textContent);

        appendToDisplay(btn.textContent)


        
    })
    
    
});

function appendToDisplay(key){
    displaytxt.textContent += key 
}
window.cleardisplay = function () {
    displaytxt.textContent = "";
};
window.backspace = function (){
    let newtxt = displaytxt.textContent.slice(0,-1)
    displaytxt.textContent = newtxt
};

window.calculate = function () {
    try {
        let answer = eval(displaytxt.textContent);
        displaytxt.textContent += '=' + answer;
    } catch (error) {
        // Do something with the error, for example, log it
        displaytxt.textContent = error;
    }
};