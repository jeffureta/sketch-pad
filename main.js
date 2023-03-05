const mainContainer = document.querySelector("#main-container");

for (let i = 0; i < 3; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for(let j = 0; j < 3; j++) {
        const square = document.createElement("div");
        square.classList.add("square");
        row.appendChild(square);
}
mainContainer.appendChild(row);
}