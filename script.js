function createGrid(size) {
    let container = document.querySelector(".container");
    container.innerHTML = "";

    let containerSize = container.clientWidth;
    let squareSize = Math.floor(containerSize / size);

    for (let i = 0; i < size * size; i++) {
        let square = document.createElement("div"); 

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.border = "1px solid lightgray";

        container.appendChild(square);
    }
}

createGrid(16);