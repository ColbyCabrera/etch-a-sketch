
function createGrid(dimensions) {

    

    for (let i = 0; i < dimensions; i++) {
        for (j = 0; j < dimensions; j++) {
            let gridElement = document.createElement("div");
            gridContainer.appendChild(gridElement);
            gridElement.style.width = gridSize / dimensions + "rem";
            gridElement.classList.add("grid-element");
            gridElement.classList.add(i + "x");
            gridElement.classList.add(j + "y");
        }
    }
}

function updateElement() {

}

//grid size in rems where 1 rem = 10px
const gridSize = 64;
const gridContainer = document.createElement("div");
let gridDimensions = 64;

document.getElementById("sketch-container").appendChild(gridContainer);
gridContainer.style.height = gridSize + "rem";
gridContainer.style.width = gridSize + "rem";
gridContainer.className = "grid-container";

createGrid(gridDimensions);