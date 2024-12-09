const container = document.querySelector(".container");
const customGridButton = document.createElement("button");
const divVertical = document.querySelectorAll(".grid_block_vertical");
const resetGridButton = document.createElement("button");

customGridButton.type = "button";
customGridButton.innerHTML = "New Grid";
container.insertBefore(customGridButton, divVertical[0]);
resetGridButton.type = "button";
resetGridButton.innerHTML = "Reset Grid";
container.insertBefore(resetGridButton, divVertical[0]);

function makeGrid(size = 16) {
    for (let i = 0; i < size; i++) {
        const divVertical = document.createElement("div");
        divVertical.className = "grid_block_vertical";
        divVertical.style.cssText = "display: flex; background-color: black; width: 960px";
    
        for (let j = 0; j < size; j++) {

            const divHorizontal = document.createElement("div");
            divHorizontal.className = "grid_block_horizontal";
            divHorizontal.style.cssText = "flex: 1 1 0px; background-color: red; margin: 1px; aspect-ratio: 1";
            divVertical.appendChild(divHorizontal);
        }   
    container.appendChild(divVertical);
    }
} 

makeGrid();

container.addEventListener("mouseout", (event) => {
    if (event.target.className === "grid_block_horizontal") {
        event.target.style.backgroundColor = "blue";
    }
});

customGridButton.addEventListener("click", () => {
    const userGridSize = parseInt(prompt("How big is the new grid supposed to be?"));

    if (isNaN(userGridSize) || userGridSize <= 0 || !Number.isInteger(userGridSize) || userGridSize > 100) {
        alert("Please try again with a positive integer 0 < n <= 100");
    }

    clearGrid();

    makeGrid(userGridSize);    
})

resetGridButton.addEventListener("click", () => {
    clearGrid();
    makeGrid();
});

resetGrid();

function clearGrid() {
    while (container.lastChild != resetGridButton) {
        container.removeChild(container.lastChild);
    }
}










