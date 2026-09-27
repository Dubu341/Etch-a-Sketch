let promptBtn = document.querySelector("button");
//on page load grid
for (i = 0; i < 256; i++) {
  let grid = document.createElement("div");
  grid.classList.add("grid");

  container.appendChild(grid);
  const gridColor = document.querySelectorAll(".grid");
  gridColor.forEach((grid) => {
    grid.addEventListener("mouseenter", () => {
      grid.style.backgroundColor = "blue";
    });
  });
}
//change grid size
promptBtn.addEventListener("click", () => {
  let userInput = prompt("gib number blz less than 100 blz");
  while (userInput > 100) {
    userInput = 100;
  }
  gridCells = userInput ** 2;
  const container = document.querySelector("#container");
  container.textContent = "";
  for (i = 0; i < gridCells; i++) {
    let grid = document.createElement("div");
    grid.classList.add("grid");
    grid.style.width = 960 / userInput + "px";
    container.appendChild(grid);
  }

  const gridColor = document.querySelectorAll(".grid");
  gridColor.forEach((grid) => {
    grid.addEventListener("mouseenter", () => {
      grid.style.backgroundColor = "blue";
    });
  });
});
