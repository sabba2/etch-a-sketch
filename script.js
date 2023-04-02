const container = document.querySelector("div.container");
const button = document.querySelector("button");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.justifyContent = "center";
container.style.minWidth = "800px";

function createGrid(gridSize) {
  for (let i = 1; i < gridSize ** 2 + 1; i++) {
    let square = document.createElement("div");
    container.appendChild(square);
    square.style.height = `${800 / gridSize}px`;
    square.style.backgroundColor = "royalblue";
    square.style.flex = `0 0 ${800 / gridSize}px`;

    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "lightblue";
    });

    if (i % gridSize === 0) {
      let lineBreak = document.createElement("div");
      container.appendChild(lineBreak);
      lineBreak.style.height = "0";
      lineBreak.style.flex = "1 0 100%";
    } // adds flex item that breaks items onto new line
  }
}

function emptyContainer() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

button.addEventListener("click", () => {
  let gridSize;
  while (
    gridSize < 0 ||
    gridSize > 100 ||
    isNaN(gridSize) ||
    gridSize === null
  ) {
    gridSize = prompt("Enter a grid size from 1 to 100");
  }
  emptyContainer();
  createGrid(gridSize);
});

createGrid(16);
