let changeGrid = document.querySelector(".changeGrid");
let resetGrid = document.querySelector(".resetGrid");
const container = document.querySelector("#container");

function getUserInput() {
  let userInput = prompt("gib number blz less than 100 blz");
  while (userInput > 100) {
    userInput = 100;
  }
  gridCells = userInput ** 2;
  container.textContent = "";
  for (i = 0; i < gridCells; i++) {
    let grid = document.createElement("div");
    grid.classList.add("grid");
    grid.style.width = 100 / userInput + "%";
    container.appendChild(grid);
  }
}
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function changeGridColors() {
  const gridColor = document.querySelectorAll(".grid");
  gridColor.forEach((grid) => {
    grid.addEventListener("mouseenter", () => {
      grid.style.backgroundColor = getRandomColor();
      let currentOpacity = parseFloat(grid.style.opacity) || 0.2;
      let newOpacity = Math.min(currentOpacity + 0.2, 1.0);
      grid.style.opacity = newOpacity;
    });
  });
}

//on page load grid
for (i = 0; i < 256; i++) {
  let grid = document.createElement("div");
  grid.classList.add("grid");
  container.appendChild(grid);
}
changeGridColors();
//change grid size
changeGrid.addEventListener("click", () => {
  getUserInput();
  changeGridColors();
});
//reset grid => to.do {make the grid hold the userInput instead of the default}
resetGrid.addEventListener("click", () => {
  container.textContent = "";
  for (i = 0; i < 256; i++) {
    let grid = document.createElement("div");
    grid.classList.add("grid");
    container.appendChild(grid);
  }
  changeGridColors();
});
