const container = document.querySelector("div.container");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.justifyContent = "center";
container.style.minWidth = "832px";

for (let i = 1; i < 257; i++) {
  let square = document.createElement("div");
  container.appendChild(square);
  square.style.width = "50px";
  square.style.height = "50px";
  square.style.backgroundColor = "lightblue";
  square.style.border = "1px solid black";
  square.style.flex = "0 0 50px";
  if (i % 16 === 0) {
    let lineBreak = document.createElement("div");
    container.appendChild(lineBreak);
    lineBreak.style.height = "0";
    lineBreak.style.flex = "1 0 100%";
  }
}
