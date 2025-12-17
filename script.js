const grid = document.getElementById("grid");
const total = 64;

for (let i = 0; i < total; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    grid.appendChild(cell);
}

const cells = document.querySelectorAll(".cell");

setInterval(() => {
    cells.forEach(c => c.classList.remove("active"));

    const random = Math.floor(Math.random() * cells.length);
    cells[random].classList.add("active");
}, 200);