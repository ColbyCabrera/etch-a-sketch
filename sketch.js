//grid size in rems where 1 rem = 10px
const gridSize = 64;
const gridContainer = document.createElement("div");
const clearButton = document.getElementsByClassName("clear")[0];
const create = document.getElementsByClassName("create")[0];

document.getElementById("sketch-container").appendChild(gridContainer);
gridContainer.style.height = gridSize + "rem";
gridContainer.style.width = gridSize + "rem";
gridContainer.style.minHeight = gridSize + "rem";
gridContainer.style.minWidth = gridSize + "rem";
gridContainer.className = "grid-container";

createGrid();

addEventListener('click', updateElement);
addEventListener('mouseover', updateElement);
clearButton.addEventListener('click', clearGrid);
create.addEventListener('click', createGrid);

function updateElement(event) {

    if (event.target.classList.contains("grid-element") && event.buttons == 1) {
        event.target.style.backgroundColor = "white";
    } else if (event.type == "click" && event.target.classList.contains("grid-element")) {
        event.target.style.backgroundColor = "white";
    }
}

function clearGrid() {
    gridElements = Array.from(document.getElementsByClassName("grid-element"));

    gridElements.forEach(element => {
        element.style.backgroundColor = "black";
    });
}

function deleteGrid() {
    
    let child = gridContainer.firstElementChild;
    console.log(child);
    while(child) {
        gridContainer.removeChild(child);
        child = gridContainer.firstElementChild;
    }
}

function createGrid() {

    // creates grid elements with coordinates
    const dimensions = document.getElementById("dimensions").value;
    if (dimensions <= 100 && dimensions >= 1) {
        deleteGrid();

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
    } else {
        alert("Dimensions must be from 1 to 100");
    }
}