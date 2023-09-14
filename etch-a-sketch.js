let color = "black"
let gridSize;

document.addEventListener("DOMContentLoaded", function () {

    smallGrid()

    let footer = document.querySelector(".footer");

    const smallButton = document.createElement('button');
    smallButton.className = "smallButton"
    smallButton.textContent = "Small"
    smallButton.onclick = function () {
        smallGrid()
    }
    footer.appendChild(smallButton)

    const mediumButton = document.createElement('button');
    mediumButton.className = "mediumButton"
    mediumButton.textContent = "Medium"
    mediumButton.onclick = function () {
        mediumGrid()
    }
    footer.appendChild(mediumButton)

    const largeButton = document.createElement('button');
    largeButton.className = "largeButton"
    largeButton.textContent = "Large"
    largeButton.onclick = function () {
        largeGrid()
    }
    footer.appendChild(largeButton)

    const resetButton = document.createElement('button');
    resetButton.className = "resetButton"
    resetButton.textContent = "Reset"
    resetButton.onclick = function () {
        resetGrid()
    }
    footer.appendChild(resetButton)
})

// creates boards for 3 sizes

let mouseDown = false
// document.body.onmousedown = () => {
//     console.log('you clicked!')
//     mouseDown = true
// }
// document.body.onmouseup = () => (mouseDown = false)

function smallGrid() {
    gridSize = "small"
    let grid = document.querySelector(".grid");
    grid.innerHTML = "";
    grid.style.gridTemplateColumns = `repeat(45, 1fr)`;
    grid.style.gridTemplateRows = `repeat(45, 1fr)`;

    for (let i = 0; i < 45 * 45; i++) {
        let div = document.createElement("div");
        grid.insertAdjacentElement("beforeend", div);
        div.addEventListener("mouseover", colorDiv)
        div.addEventListener("mousedown", (e) => {
            mouseDown = true
            colorDiv.apply(e.target)
        })
        div.addEventListener("mouseup", () => {
            mouseDown = false
        })
    }
}
function mediumGrid() {
    gridSize = "medium"
    let grid = document.querySelector(".grid");
    grid.innerHTML = "";
    grid.style.gridTemplateColumns = `repeat(30, 1fr)`;
    grid.style.gridTemplateRows = `repeat(30, 1fr)`;
  
    for (let i = 0; i < 30 * 30; i++) {
        let div = document.createElement("div");
        grid.insertAdjacentElement("beforeend", div);
        div.addEventListener("mouseover", colorDiv)
        div.addEventListener("mousedown", (e) => {
            mouseDown = true
            colorDiv.apply(e.target)
        })
        div.addEventListener("mouseup", () => {
            mouseDown = false
        })
    }
}
function largeGrid() {
    gridSize = "large"
    let grid = document.querySelector(".grid");
    grid.innerHTML = "";
    grid.style.gridTemplateColumns = `repeat(15, 1fr)`;
    grid.style.gridTemplateRows = `repeat(15, 1fr)`;

    for (let i = 0; i < 15 * 15; i++) {
        let div = document.createElement("div");
        grid.insertAdjacentElement("beforeend", div);
        div.addEventListener("mouseover", colorDiv)
        div.addEventListener("mousedown", (e) => {
            mouseDown = true
            colorDiv.apply(e.target)
        })
        div.addEventListener("mouseup", () => {
            mouseDown = false
        })
    }
}

function colorDiv(){
    if(mouseDown == true) {
        if (color == "black"){
            this.style.backgroundColor = "black"
        }
        if (color == "pink"){
            this.style.backgroundColor = "rgb(255, 181, 192)"
        }
        if (color == "blue"){
            this.style.backgroundColor = "rgb(138, 210, 255)"
        }
        if (color == "purple"){
            this.style.backgroundColor = "rgb(175, 175, 249)"
        }
        if (color == "eraser"){
            this.style.backgroundColor = "white"
        }
    }
}

function setColor(colorChoice){
    color = colorChoice;
}

function resetGrid(){
    if(gridSize == "small") {
        smallGrid()
    }
    if(gridSize == "medium") {
        mediumGrid()
    }
    if(gridSize == "large") {
        largeGrid()
    }

}


