let userInput = prompt("gib number blz");
gridCells = userInput ** 2;

for (i = 0; i < gridCells; i++) {
  const container = document.querySelector("#container");
  let grid = document.createElement("div");
  grid.classList.add("grid");
  container.appendChild(grid);
  grid.style.width = 960 / userInput + "px";
}

//changing grid divs color on hover
const gridColor = document.querySelectorAll(".grid");
gridColor.forEach((grid) => {
  grid.addEventListener("mouseenter", () => {
    grid.style.backgroundColor = "blue";
  });
});
