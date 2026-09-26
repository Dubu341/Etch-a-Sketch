for (i = 0; i < 256; i++) {
  const container = document.querySelector("#container");
  let grid = document.createElement("div");
  grid.classList.add("grid");
  grid.setAttribute("style", " background: red;");
  container.appendChild(grid);
}
