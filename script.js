const container = document.querySelector(".container");

function createCell() {
  const newDiv = document.createElement("div");
  newDiv.classList.add("cell");
  container.appendChild(newDiv);
}

for (i = 0; i < 1024; i++) {
  createCell();
}
