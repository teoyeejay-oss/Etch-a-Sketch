const container = document.querySelector("#container");
const btn = document.querySelector("button");
const containerSize = 960;

btn.addEventListener("click",() => {
const size = +prompt("How many grid?");
 if (!Number.isInteger(size) || size < 1 || size >100) {
    return;
  }
  else{
    container.textContent = "";
    createGrid(size);
  }
});

function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
  // 1. 得到三个随机整数，分别存进变量（r、g、b）
  // 2. 拼成 "rgb(r, g, b)" 这样的字符串，并 return
};

function createGrid(gridSize) {
const totalSquare = gridSize * gridSize; 
const eachSquaresize = containerSize / gridSize;

for (let i=1; i<=totalSquare; i++) {
const square = document.createElement("div");
square.classList.add("square");
square.style.width = eachSquaresize + "px";
square.style.height = eachSquaresize + "px";
container.appendChild(square);

square.addEventListener("mouseenter", () => {
 square.style.backgroundColor = getRandomColor();
});
};
}

createGrid(16);