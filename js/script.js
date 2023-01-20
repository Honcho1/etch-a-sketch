const gridContainer = document.getElementById("grid-container");
for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    let div = document.createElement("div");
    div.style.width = "60px";
    div.style.height = "60px";
    div.style.backgroundColor = "blue";
    gridContainer.appendChild(div);
  }
}

const divs = document.querySelectorAll("#grid-container div");
divs.forEach((div) => {
  div.addEventListener("mouseover", function (e) {
    e.target.classList.add("active");
    div.style.backgroundColor = "red";
  });
  div.addEventListener("mouseout", function (e) {
    e.target.classList.remove("active");
  });
});

const gridSizeBtn = document.getElementById("grid-size-btn");
gridSizeBtn.addEventListener("click", () => {
  let gridSize = +prompt(
    "How many number of squares do you want per side for the new grid?",
    "20"
  );
  if (
    gridSize !== null &&
    !isNaN(gridSize) &&
    gridSize > 0 &&
    gridSize % 1 === 0
  ) {
    gridContainer.innerHTML = "";
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        let div = document.createElement("div");
        div.style.height = "2rem";
        div.style.width = "2rem";
        div.style.backgroundColor = "green";
        gridContainer.appendChild(div);
      }
    }
  } else {
    alert("Invalid input. Please enter a positive integer.");
  }
});
