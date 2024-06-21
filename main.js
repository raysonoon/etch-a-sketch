const GRIDSIDE = 600;
let squaresPerSide = 16;

const gridArea = document.querySelector("#grid-area");
gridArea.style.width = `${GRIDSIDE}px`;
gridArea.style.height = `${GRIDSIDE}px`;

function setBackgroundColor() {
    this.style.backgroundColor = "black";
}
function createGridCells() {
    const numSquares = squaresPerSide * squaresPerSide;
    const squareLength = `${GRIDSIDE / squaresPerSide - 2}px`;

    for (let i = 0; i < numSquares; i++) {
        const gridCell = document.createElement("div");

        gridCell.style.width = gridCell.style.height = squareLength;
        gridCell.className = "cell";
        //gridCell.classList.add("cell");

        gridArea.appendChild(gridCell);

        gridCell.addEventListener("mouseover", setBackgroundColor);
    }
}

function newGrid() {
    let newSquaresPerSide = parseInt(prompt("Enter size of new grid (Max: 100)"));
    if (typeof newSquaresPerSide == "number" && newSquaresPerSide <= 100) {
        squaresPerSide = newSquaresPerSide;
        // Empty old grid
        gridArea.textContent = "";
        createGridCells();
    } else {
        alert("Invalid value!");
    }
}

// Event handling for reset game button
const newGridBtn = document.querySelector("#new-grid");
newGridBtn.addEventListener("click", newGrid);

createGridCells();