const container = document.querySelector(".container");
const scaleBtn = document.querySelector(".scale");

// CREATE INITIAL PAD

let userInput = 32;

function createCells(cells) {
  container.setAttribute(
    "style",
    `grid-template-columns: repeat(${cells}, ${480 / cells}px);
    grid-template-rows: repeat(${cells}, ${480 / cells}px)`
  );
  for (let i = 0; i < cells ** 2; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("cell");
    container.appendChild(newDiv);
  }
}

createCells(userInput);
let gridCells = document.querySelectorAll(".cell");

// DRAWING EVENT LISTENERS
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
  cell.addEventListener("click", function (event) {
    event.target.style.backgroundColor = "#333";
  });
});

window.addEventListener("mouseup", function () {
  toggleMouseDown = false;
  console.log(toggleMouseDown);
});

// SCALE THE PAD

scaleBtn.addEventListener("click", function () {
  let userInput = prompt("Choose size of the sketch pad between 16 and 100:");
  if (userInput < 16 || userInput > 100) {
    alert("The side lenght of the pad must be between 16 and 100!");
  } else {
    container.innerHTML = "";
    createCells(Number(userInput));
    let newCells = document.querySelectorAll(".cell");
    newCells.forEach((cell) => {
      cell.addEventListener("mousedown", function () {
        toggleMouseDown = true;
        console.log(toggleMouseDown);
      });
    });
    newCells.forEach((cell) => {
      cell.addEventListener("mouseenter", function (event) {
        if (toggleMouseDown) {
          event.target.style.backgroundColor = "#333";
        }
      });
    });

    newCells.forEach((cell) => {
      cell.addEventListener("click", function (event) {
        event.target.style.backgroundColor = "#333";
      });
    });

    window.addEventListener("mouseup", function () {
      toggleMouseDown = false;
      console.log(toggleMouseDown);
    });
  }
});
