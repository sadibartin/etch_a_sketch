function boardDom(size){
let board = document.querySelector(".board");
board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
amount = size*size
for(let i = 0; i<amount ; i++ ){

    let square = document.createElement("div");
    square.style.backgroundColor = "pink";
    board.insertAdjacentElement("beforeend",square);
}

}
boardDom(10);
function changeSize(input){
    boardDom(input);
}