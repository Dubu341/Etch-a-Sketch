let promptBtn = document.querySelector("button");

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
