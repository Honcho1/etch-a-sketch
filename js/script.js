const gridContainer = document.getElementById("grid-container");
for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    let div = document.createElement("div");
    div.style.width = "20px";
    div.style.height = "20px";
    div.style.backgroundColor = "blue";
    gridContainer.appendChild(div);
  }
}
