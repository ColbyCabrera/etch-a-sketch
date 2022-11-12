
function createGrid(dimensions) {

    // creates grid elements with coordinates
    for (let i = 0; i < dimensions; i++) {
        for (j = 0; j < dimensions; j++) {
            let gridElement = document.createElement("div");
            gridContainer.appendChild(gridElement);
            gridElement.style.width = gridSize / dimensions + "rem";
            gridElement.classList.add("grid-element");
            gridElement.classList.add(i + "y");
            gridElement.classList.add(j + "x");
        }
    }
}

function updateElement(event) {

    if (event.target.classList.contains("grid-element") && event.buttons == 1) {
        event.target.style.backgroundColor = "white";
    } else if (event.type == "click" && event.target.classList.contains("grid-element")) {
        event.target.style.backgroundColor = "white";
    }
}

//grid size in rems where 1 rem = 10px
const gridSize = 64;
const gridContainer = document.createElement("div");
let gridDimensions = 16;

document.getElementById("sketch-container").appendChild(gridContainer);
gridContainer.style.height = gridSize + "rem";
gridContainer.style.width = gridSize + "rem";
gridContainer.style.minHeight = gridSize + "rem";
gridContainer.style.minWidth = gridSize + "rem";
gridContainer.className = "grid-container";

createGrid(gridDimensions);

addEventListener('click', updateElement);
addEventListener('mouseover', updateElement);