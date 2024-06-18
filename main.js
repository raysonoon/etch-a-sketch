const grid = document.querySelector(".grid");

const gridSize = 16;


// 16 x 16 grid
for (let i = 1; i <= gridSize; i++) {
    for (let j = 1; j <=gridSize; j++) {
        const square = document.createElement("div");
        square.setAttribute("style", "color: black; width: 100px; height: 100px;");
        square.style.border = "5px solid #000000";
        square.style.backgroundColor =  "transparent";
        grid.appendChild(square);
    }
}