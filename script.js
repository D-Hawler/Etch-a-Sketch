document.addEventListener("DOMContentLoaded", () => {

    generatin();

    const red = document.getElementById("red");
    const green = document.getElementById("green");
    const blue = document.getElementById("blue");

    red.addEventListener("input", () => {
        const textForRed = document.getElementById("textForRed");
        textForRed.textContent = `Red ${red.value}`;
        root.style.setProperty("--red", red.value);
    });

    green.addEventListener("input", () => {
        const textForGreen = document.getElementById("textForGreen");
        textForGreen.textContent = `Green ${green.value}`;
        root.style.setProperty("--green", green.value);
    });

    blue.addEventListener("input", () => {
        const textForBlue = document.getElementById("textForBlue");
        textForBlue.textContent = `Blue ${blue.value}`;
        root.style.setProperty("--blue", blue.value);
    });

    let isMouseOver = false;
    let isMouseDown = false;

    document.addEventListener("mouseover", (e) => {
        if (e.target.classList.contains("cube")) {
            isMouseOver = true;
            isDrawing(e);
        }
    });

    document.addEventListener("mousedown", (e) => {
        if (e.target.classList.contains("cube")) {
            isMouseDown = true;
            isDrawing(e);
        }
    });

    document.addEventListener("mouseup", (e) => {
        isMouseDown = false;
    });

    function isDrawing(e) {
        if (isMouseOver && isMouseDown) {
            if (e.target.classList.contains("cube")) {
                if (pensilMode === true) {
                    e.target.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value}`;
                }
                if (eraserМode === true) {
                    e.target.style.backgroundColor = "rgb(255, 255, 255)";
                }
            }
        }
    };
});

    let pensilMode = true;
    let eraserМode = false;

    const pensil = document.getElementById("pensilMode");
    const eraser = document.getElementById("eraserМode");

    pensil.onclick = () => {
        pensilMode = true;
        eraserМode = false;
    };

    eraser.onclick = () => {
        pensilMode = false;
        eraserМode = true;
    };

    let size = Number(16);
    const root = document.documentElement;
    root.style.setProperty("--size-box", size);

    grid.addEventListener("input", () => {
        const grid = document.getElementById("grid");
        const textForGrid = document.getElementById("textForGrid");
        textForGrid.textContent = `Grid: ${grid.value}x${grid.value}`

        size = grid.value;
        generatin();
    });

    function generatin() {
        const generatingCube = document.querySelector("#main");
        let cube;

        root.style.setProperty("--size-box", grid.value);

        while (generatingCube.firstChild) {
            generatingCube.removeChild(generatingCube.firstChild);
        }
    
        for (let i = 0; i < size * size; i++) {
            cube = document.createElement("div");
            cube.classList.add("cube");
    
            generatingCube.appendChild(cube);
        };
    };