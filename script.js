const container = document.querySelector(".container");

function makeGrid(size = 16) {
    for (let i = 0; i < size; i++) {
    const divVertical = document.createElement("div");
    divVertical.className = "grid_block_vertical";
    divVertical.style.cssText = "display: flex; background-color: black; width: 960px"
    
        for (let j = 0; j < size; j++) {

            const divHorizontal = document.createElement("div");
            divHorizontal.className = "grid_block_horizontal";
            divHorizontal.style.cssText = "flex: 1 1 0px; background-color: red; margin: 1px; aspect-ratio: 1";
            
            //Use if you want the divs to be numbered like a matrix
            /*if (i < 10 && j < 10) {
                divHorizontal.innerHTML = `Div 0${i}0${j}`;
            } else if (i < 10 && j >= 10) {
                divHorizontal.innerHTML = `Div 0${i}${j}`;
            } else if (i >= 10 && j < 10) {
                divHorizontal.innerHTML = `Div ${i}0${j}`;
            } else {
                divHorizontal.innerHTML = `Div ${i}${j}`;
            }*/

            divVertical.appendChild(divHorizontal);
        }   
        container.appendChild(divVertical);
    }
} 

const divHorizontal = document.querySelectorAll(".grid_block_horizontal");

divHorizontal.forEach((element) => {
    element.addEventListener("mouseenter", () => {
        element.addEventListener("mouseleave", () => {
            element.style.backgroundColor = "blue";
        })
    })
})

const customGridButton = document.createElement("button");
const divVertical = document.querySelectorAll(".grid_block_vertical");

customGridButton.type = "button";
customGridButton.innerHTML = "New Grid";
container.insertBefore(customGridButton, divVertical[0]);

customGridButton.addEventListener("click", () => {
    const userGridSize = parseInt(prompt("How big is the new grid supposed to be?"));

    if (isNaN(userGridSize) || userGridSize <= 0 || !Number.isInteger(userGridSize)) {
        alert("Please try again with a positive integer > 0");
    }

    divVertical.forEach((element) => {
        container.removeChild(element);
    })

    makeGrid(userGridSize);    
})

const resetGridButton = document.createElement("button");

resetGridButton.type = "button";
resetGridButton.innerHTML = "Reset Grid";
container.insertBefore(resetGridButton, divVertical[0]);

resetGridButton.addEventListener("click", () => {
    divVertical.forEach((element) => {
        container.removeChild(element);
    })
})

makeGrid();









