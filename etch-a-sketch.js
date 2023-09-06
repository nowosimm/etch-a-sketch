document.addEventListener("DOMContentLoaded", function(){
    createGraph(16)

    
})

function createGraph(size){
    let graph = document.querySelector(".container");
    graph.style.gridTemplateColumns = "repeat(16, 1fr)";
    graph.style.gridTemplateRows = `repeat(16, 1fr)`;

    let numDivs = size * size;

    for(let i = 0; i < numDivs; i++){
        let div = document.createElement("div");
        graph.insertAdjacentElement("beforeend", div);
    }
}
