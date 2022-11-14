const container = document.querySelector(".container");
const scaleBtn = document.querySelector(".scale");
const colorBtn = document.querySelector("input");
const resetBtn = document.querySelector(".reset");
const eraseBtn = document.querySelector(".erase");
const rainbowBtn = document.querySelector(".rainbow");

// CREATE INITIAL PAD

let userInput = 32;
let color = "#333";
let randomColor = "";
console.log("randomColor", randomColor);

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
  });
});

gridCells.forEach((cell) => {
  cell.addEventListener("mouseenter", function (event) {
    if (toggleMouseDown && rainbowToggle) {
      randomColor = randomColorGenerator();
      event.target.style.backgroundColor = `${randomColor}`;
    } else if (toggleMouseDown) {
      event.target.style.backgroundColor = `${color}`;
    }
  });
});

window.addEventListener("mouseup", function () {
  toggleMouseDown = false;
});

// SCALE BUTTON

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
      });
    });

    newCells.forEach((cell) => {
      cell.addEventListener("mouseenter", function (event) {
        if (toggleMouseDown && rainbowToggle) {
          randomColor = randomColorGenerator();
          event.target.style.backgroundColor = `${randomColor}`;
        } else if (toggleMouseDown) {
          event.target.style.backgroundColor = `${color}`;
        }
      });
    });

    window.addEventListener("mouseup", function () {
      toggleMouseDown = false;
    });
  }
});

// CHOOSE COLOR BUTTON

function changeColor() {
  color = colorBtn.value;
}

colorBtn.addEventListener("input", changeColor);

// RESET BUTTON
resetBtn.addEventListener("click", function () {
  gridCells.forEach((cell) => {
    cell.setAttribute("style", "backgroundColor: #fff");
  });
});

// ERASE BUTTON
eraseBtn.addEventListener("click", function () {
  color = "#fff";
});

// RAINBOW BUTTON
let rainbowToggle = false;
rainbowBtn.addEventListener("click", function () {
  if (!rainbowToggle) {
    rainbowToggle = true;
  } else {
    rainbowToggle = false;
  }
  console.log(rainbowToggle);
});

function randomValueColor() {
  return Math.floor(Math.random() * (256 - 0 + 1)) + 1;
}

function randomColorGenerator() {
  return `rgb(${randomValueColor()}, ${randomValueColor()}, ${randomValueColor()})`;
}
