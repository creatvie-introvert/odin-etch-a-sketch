let container = document.querySelector('.container');
function createGrid(size) {
    container.innerHTML = '';

    let containerSize = container.clientWidth;
    let borderSize = 1;

    let squareSize = Math.floor(containerSize / size);

    for (let i = 0; i < size * size; i++) {
        let square = document.createElement('div'); 

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.border = `${borderSize}px solid lightgray`;

        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = 'lightgray';
        })

        container.appendChild(square);
    }
}

// TODO: Create function to handle hover effect

function resetButton() {
    const button = document.createElement('button');
    const butttonText = document.createTextNode('Reset Grid');
    button.appendChild(butttonText);

    document.body.insertBefore(button, container);

    button.addEventListener('click', () => {
        let userInput = Number(prompt("Choose your grid size"));

        if (userInput > 100) {
            userInput = 100;
        }

        createGrid(userInput);
    });
}

resetButton();
createGrid(16);