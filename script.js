const container = document.querySelector(".container");
container.setAttribute("draggable", false);
function createCell() {
  const newDiv = document.createElement("div");
  newDiv.classList.add("cell");
  container.appendChild(newDiv);
}

for (i = 0; i < 1024; i++) {
  createCell();
}
const gridCells = document.querySelectorAll(".cell");

let toggleMouseDown = false;

gridCells.forEach((cell) => {
  cell.addEventListener("mousedown", function () {
    toggleMouseDown = true;
    console.log(toggleMouseDown);
  });
});
gridCells.forEach((cell) => {
  cell.addEventListener("mouseenter", function (event) {
    if (toggleMouseDown) {
      event.target.style.backgroundColor = "#333";
    }
  });
});
gridCells.forEach((cell) => {
  cell.addEventListener("mouseup", function () {
    toggleMouseDown = false;
    console.log(toggleMouseDown);
  });
});
