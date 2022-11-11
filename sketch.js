

function createGrid(dimensions) {
    
}

function updateElement() {

}

//grid size in rems where 1 rem = 10px
const gridSize = 64;
const gridContainer = document.createElement("div");
let gridDimensions = 16;

document.getElementById("sketch-container").appendChild(gridContainer);
gridContainer.style.height = gridSize + "rem";
gridContainer.style.width = gridSize + "rem";

createGrid(gridDimensions);