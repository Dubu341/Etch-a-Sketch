for (i = 0; i < 256; i++) {
  const container = document.querySelector("#container");
  let grid = document.createElement("div");
  grid.classList.add("grid");
  //grid.setAttribute("style", " background: red;");
  container.appendChild(grid);
}

//changing grid divs color on hover
const gridColor = document.querySelectorAll(".grid");
gridColor.forEach((grid) => {
  grid.addEventListener("mouseenter", () => {
    grid.style.backgroundColor = "blue";
  });
});
