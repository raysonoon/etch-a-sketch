const GRIDSIDE = 600;
let squaresPerSide = 16;
let currentColor = "black";
let currentOpacity = 1;
let rainbowMode = false;

const gridArea = document.querySelector("#grid-area");
gridArea.style.width = `${GRIDSIDE}px`;
gridArea.style.height = `${GRIDSIDE}px`;

const btnContainer = document.querySelector(".button-container");

btnContainer.addEventListener("click", (event) => {

    switch (event.target.id) {
        case "black":
            rainbowMode = false;
            currentColor = "black";
            break;
        case "shade":
            rainbowMode = false;
            shadeMode = true;
            break;
        case "rainbow":
            rainbowMode = true;
            break;
        case "eraser":
            rainbowMode = false;
            currentColor = "";
            break;
        case "clear":
            removeGridCells();
    }
});

createGridCells(squaresPerSide);

function createGridCells(squaresPerSide) {

    for (let i = 0; i < squaresPerSide; i++) {
        const gridCellRow = document.createElement("div");
        gridCellRow.className = "row";
        gridArea.appendChild(gridCellRow);

        for (let j = 0; j < squaresPerSide; j++) {
            const gridCellCol = document.createElement("div");
            gridCellCol.className = "col";
            gridCellRow.appendChild(gridCellCol);
            gridCellCol.addEventListener("mouseover", setBackgroundColor);
        }
    }
}

function setBackgroundColor() {
    if (rainbowMode) {
        currentColor = randomRgbaColor();
    }

    // Black by default
    this.style.backgroundColor = currentColor;
}

function randomRgbaColor() {
    // 0 - 255
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let a = currentOpacity;

    return `rgba(${r},${g},${b},${a})`;
}

function removeGridCells() {
    const gridCells = document.querySelectorAll("#grid-area div");
    gridCells.forEach(gridCell => {
        gridCell.style.backgroundColor = "";
    });
}

function newGrid() {
    let newSquaresPerSide = parseInt(prompt("Enter size of new grid (Max: 100)"));
    if (typeof newSquaresPerSide == "number" && newSquaresPerSide <= 100) {
        // Empty grid
        gridArea.textContent = "";
        createGridCells(newSquaresPerSide);
    } else {
        alert("Invalid value!");
    }
}

// Event handling for new grid button
const newGridBtn = document.querySelector("#new-grid");
newGridBtn.addEventListener("click", newGrid);