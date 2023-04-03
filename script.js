const container = document.querySelector("div.container");
const button = document.querySelector("button");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.justifyContent = "center";
container.style.minWidth = "860px";
container.style.maxWidth = container.style.minWidth;

function createGrid(gridSize) {
  for (let i = 1; i < gridSize ** 2 + 1; i++) {
    let square = document.createElement("div");
    container.appendChild(square);
    square.style.height = `${860 / gridSize}px`; // subtract border widths
    square.style.flex = `0 0 ${860 / gridSize}px`;

    square.style.backgroundColor = "lightblue";
    changeColor(square);

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

function randomRGBNumber() {
  return Math.floor(Math.random() * 256);
}

function changeColor(element) {
  element.addEventListener(
    "mouseover",
    () => {
      let r = randomRGBNumber();
      let b = randomRGBNumber();
      let g = randomRGBNumber();
      let selectedColor = `rgb(${r},${g},${b})`;
      element.style.backgroundColor = selectedColor;
      makeDarker(element, r, g, b);
    },
    { once: true }
  );
}

function makeDarker(element, r, g, b) {
  let tenPercentR = r / 10;
  let tenPercentG = g / 10;
  let tenPercentB = b / 10;
  element.addEventListener("mouseover", () => {
    r = r - tenPercentR;
    g = g - tenPercentG;
    b = b - tenPercentB;
    selectedColor = `rgb(${r},${g},${b})`;
    element.style.backgroundColor = selectedColor;
  });
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
