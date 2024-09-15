// eventListener = Listen for specific events to create interactive web pages
//                 events: keydown, keyup   
//                 document.addEventListener(event, callback);

const myBox = document.getElementById("myBox"); 
const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {
    myBox.textContent = "😮";
    myBox.style.backgroundColor = "tomato";

    event.preventDefault();
    
    switch(event.key){
        case "w":
        case "W":
            y -= moveAmount;
            break;
        case "s":
        case "S":
            y += moveAmount;
            break; 
        case "a":
        case "A":
            x -= moveAmount;
            break;
        case "d":
        case "D":
            x += moveAmount;
            break;           
    }

    myBox.style.top = `${y}px`;
    myBox.style.left = `${x}px`;
});         

document.addEventListener("keyup", event => {
    myBox.textContent = "😄";
    myBox.style.backgroundColor = "lightblue";
});   