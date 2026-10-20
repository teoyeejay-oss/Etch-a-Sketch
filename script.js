const container = document.querySelector("#container");

const gridSize = 16;
const containerSize = 960;

const totalSquare = gridSize * gridSize; 
const eachSquaresize = containerSize / gridSize;
const loop = totalSquare;

for (let i=1; i<=totalSquare; i++) {
const square = document.createElement("div");
square.classList.add("square");
square.style.width = eachSquaresize + "px";
square.style.height = eachSquaresize + "px";
container.appendChild(square);

square.addEventListener("mouseenter", () => {
 square.style.backgroundColor = "blue"
});
};