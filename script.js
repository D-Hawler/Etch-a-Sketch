document.addEventListener("DOMContentLoaded", () => {
    const generatingCube = document.querySelector("#main");
    let cube;

    for (let i = 0; i < 256; i++) {
        cube = document.createElement("div");
        cube.classList.add("cube");

        generatingCube.appendChild(cube);
    };

    document.addEventListener("mouseover", (e) => {
        if (e.target.classList.contains("cube")) {
            e.target.style.backgroundColor = "rgb(0, 0, 0)";
        }
    });
});