let color = "black"

document.addEventListener("DOMContentLoaded", function () {

    // creating small/medium/large/reset buttons

    const smallButton = document.createElement('button');
    smallButton.textContent = "Small"
    smallButton.onclick = function () {
        smallGrid()
    }
    document.body.appendChild(smallButton)

    const mediumButton = document.createElement('button');
    mediumButton.textContent = "Medium"
    mediumButton.onclick = function () {
        mediumGrid()
    }
    document.body.appendChild(mediumButton)

    const largeButton = document.createElement('button');
    largeButton.textContent = "Large"
    largeButton.onclick = function () {
        largeGrid()
    }
    document.body.appendChild(largeButton)

    const resetButton = document.createElement('button');
    resetButton.textContent = "Reset"
    document.body.appendChild(resetButton)
})

// creates boards for 3 sizes

function smallGrid() {
    let grid = document.querySelector(".container");
    grid.innerHTML = "";
    grid.style.gridTemplateColumns = `repeat(45, 1fr)`;
    grid.style.gridTemplateRows = `repeat(45, 1fr)`;

    for (let i = 0; i < 45 * 45; i++) {
        let div = document.createElement("div");
        grid.insertAdjacentElement("beforeend", div);
        div.addEventListener("mouseover", colorDiv)
    }
}
function mediumGrid() {
    let grid = document.querySelector(".container");
    grid.innerHTML = "";
    grid.style.gridTemplateColumns = `repeat(30, 1fr)`;
    grid.style.gridTemplateRows = `repeat(30, 1fr)`;
  
    for (let i = 0; i < 30 * 30; i++) {
        let div = document.createElement("div");
        grid.insertAdjacentElement("beforeend", div);
        div.addEventListener("mouseover", colorDiv)
    }
}
function largeGrid() {
    let grid = document.querySelector(".container");
    grid.innerHTML = "";
    grid.style.gridTemplateColumns = `repeat(15, 1fr)`;
    grid.style.gridTemplateRows = `repeat(15, 1fr)`;

    for (let i = 0; i < 15 * 15; i++) {
        let div = document.createElement("div");
        grid.insertAdjacentElement("beforeend", div);
        div.addEventListener("mouseover", colorDiv)
    }
}

function colorDiv(){
    if (color == "black"){
        this.style.backgroundColor = "black"
    }
    if (color == "pink"){
        this.style.backgroundColor = "pink"
    }
    if (color == "blue"){
        this.style.backgroundColor = "blue"
    }
    if (color == "purple"){
        this.style.backgroundColor = "purple"
    }
    if (color == "eraser"){
        this.style.backgroundColor = "white"
    }
    
}

function setColor(colorChoice){
    color = colorChoice;
}

function resetBoard(){
    clearBoard()
}

function clearBoard(){
    
}


