var boxsize=10;
var cx=1000;
var cy=400;
var columns =cx/10;
var rows =cy/10;
var board, canvas, ctx, i, j;

function start() {
    canvas=document.getElementById("board");
    ctx=canvas.getContext("2d");      
    canvas.addEventListener("click", onCanvasClick, false); 
    createBoard();
    fillBoard();
}

function createBoard() {
    board = [];
    for ( i = 0; i < columns; i++) {
        board[i] = [];
        for ( j = 0; j < rows; j++ ) {
            board[i][j] = 0;
        }
    }
}
         
function fillBoard() {
    for (i = 0; i < columns; i++) {
        for (j = 0; j < rows; j++ ) {
            if ( board[i][j] == 0){
                ctx.fillStyle = "#FFFFFF";
            } else {
                ctx.fillStyle = "#e8a735";
            }
            ctx.strokeStyle = '#000000'; 
            ctx.lineWidth = 1;
            ctx.strokeRect(i*boxsize, j*boxsize, boxsize, boxsize);                   
            ctx.fillRect(i*boxsize, j*boxsize, boxsize, boxsize);      
        }
    }
}
         
function onCanvasClick(evt) {
            var x = evt.clientX - canvas.offsetLeft;
            var y = evt.clientY - canvas.offsetTop;
            var CoordX = parseInt(x/boxsize);
            var CoordY = parseInt(y/boxsize);
            fillBoard();
 }
         

  



