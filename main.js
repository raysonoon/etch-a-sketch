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

createGridCells();