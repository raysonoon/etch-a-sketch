const GRIDSIDE = 600;
let squaresPerSide = 16;

const gridArea = document.querySelector("#grid-area");
gridArea.style.width = `${GRIDSIDE}px`;
gridArea.style.height = `${GRIDSIDE}px`;

function setBackgroundColor() {
    this.style.backgroundColor = "black";
}
function createGridCells(squaresPerSide) {
    //const squareLength = `${GRIDSIDE / squaresPerSide - 2}px`;

    for (let i = 0; i < squaresPerSide; i++) {
        const gridCellRow = document.createElement("div");
        gridCellRow.className = "row";
        //gridCellRow.style.width = gridCellRow.style.height = squareLength;
        gridArea.appendChild(gridCellRow);

        for (let j = 0; j < squaresPerSide; j++) {
            const gridCellCol = document.createElement("div");
            gridCellCol.className = "col";
            //gridCellCol.style.width = gridCellCol.style.height = squareLength;
            gridCellRow.appendChild(gridCellCol);
            gridCellCol.addEventListener("mouseover", setBackgroundColor);
        }
    }
}

function removeGridCells() {
    gridArea.textContent = "";
}
function newGrid() {
    let newSquaresPerSide = parseInt(prompt("Enter size of new grid (Max: 100)"));
    if (typeof newSquaresPerSide == "number" && newSquaresPerSide <= 100) {
        removeGridCells();
        createGridCells(newSquaresPerSide);
    } else {
        alert("Invalid value!");
    }
}

// Event handling for reset game button
const newGridBtn = document.querySelector("#new-grid");
newGridBtn.addEventListener("click", newGrid);

createGridCells(squaresPerSide);