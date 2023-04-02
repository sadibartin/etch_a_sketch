let color="black";
let click=true;
function boardDom(size){
let board = document.querySelector(".board");
board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
amount = size*size
for(let i = 0; i<amount ; i++ ){

    let square = document.createElement("div");
    square.addEventListener('mouseover', colorSquare)
    square.style.backgroundColor = "white";
    board.insertAdjacentElement("beforeend",square);
}

}
boardDom(10);
function changeSize(input){
    boardDom(input);
}

function colorSquare(){if(click){
    if(color==='rgb'
    ){
        var red = Math.floor(Math.random() * 256);
        var blue = Math.floor(Math.random() * 256);
        var green = Math.floor(Math.random() * 256);
       
        this.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";}
        else {this.style.backgroundColor=color;}
}
}
function changeColor(choice){

    color=choice;

}
function resetBoard(){
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div)=> div.style.backgroundColor='white'); 
} 
document.querySelector('body').addEventListener('click', () => {
    click=!click;});
