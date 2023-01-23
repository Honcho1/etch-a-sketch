const gridContainer = document.getElementById("grid-container");
for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    let div = document.createElement("div");
    div.style.width = "40px";
    div.style.height = "40px";
    div.style.border = "1px solid #B2B2B2";
    gridContainer.appendChild(div);
  }
}

const divs = document.querySelectorAll("#grid-container div");
divs.forEach((div) => {
  div.addEventListener("mouseover", function (e) {
    e.target.classList.add("active");
    div.style.backgroundColor = "#000";
  });
  div.addEventListener("mouseout", function (e) {
    e.target.classList.remove("active");
  });
});

const gridSizeBtn = document.getElementById("grid-size-btn");
gridSizeBtn.addEventListener("click", () => {
  let gridSize = +prompt(
    "Enter the number of squares you want per side for the new grid",
    "20"
  );
  if (
    gridSize !== null &&
    !isNaN(gridSize) &&
    gridSize > 0 &&
    gridSize % 1 === 0 &&
    gridSize <= 100
  ) {
    gridContainer.innerHTML = "";
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        let div = document.createElement("div");
        div.style.height = 640 / gridSize + "px";
        div.style.width = 640 / gridSize + "px";
        div.style.border = "1px solid #B2B2B2";

        if (gridSize !== 16) {
          gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, ${
            640 / gridSize
          }px)`;
          gridContainer.style.gridTemplateRows = `repeat(${gridSize}, ${
            640 / gridSize
          }px)`;
        }

        div.addEventListener("mouseover", (e) => {
          e.target.classList.add("active");
          div.style.backgroundColor = "#000";
        });

        div.addEventListener("mouseout", (e) => {
          e.target.classList.remove("active");
        });

        gridContainer.appendChild(div);
      }
    }
  } else {
    alert("Invalid input. Please enter a positive integer between 1 and 100.");
  }
});

const clearGrid = document.getElementById("clear-grid");
clearGrid.addEventListener("click", () => {
  const divs = document.querySelectorAll("#grid-container div");
  divs.forEach((div) => {
    div.style.backgroundColor = "#fff";
    div.classList.remove("active");
  });
});
