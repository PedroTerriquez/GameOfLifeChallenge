var boxsize=10;
var cx=1000;
var cy=400;
var columns =cx/10;
var rows =cy/10;
var board, canvas, iteration,ctx, i, j;


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
            if (living(CoordX, CoordY) ) board[CoordX][CoordY] = 0;
            else board[CoordX][CoordY] = 1;
            fillBoard();
}
         


function living(x,y) {
            if (board[x] ) 
                if (board[x][y]==1) return true;
            return false;
}

function play() {
    if (!iteration) {
        iteration = setInterval("repeat()", 300);
    }
}
function repeat() {
        turn();
        fillBoard();
}

function neighborhood(x, y) {
    var num=0;
    if (living(x-1, y)) num++; //start to check all neighborhood
    if (living(x-1, y-1)) num++;
    if (living(x-1, y+1)) num++;
    if (living(x, y-1)) num++;
    if (living(x, y+1)) num++;
    if (living(x+1, y-1)) num++;
    if (living(x+1, y+1)) num++;
    if (living(x+1, y)) num++;
    return num;
}
         
function turn() {
    var newBoard = [];
    for (i= 0; i< columns; i++) {
        newBoard[i] = [];
        for (j= 0; j< rows; j++ ) {
            var neighbor = neighborhood(i, j);
            //These are the rules
            if ( living(i,j) && neighbor<2)newBoard[i][j]=0;
            else if (living(i,j) && neighbor>3 ) newBoard[i][j]=0;
            else if (living(i,j) && (neighbor==2||neighbor==3))newBoard[i][j]= 1;
            else if (!living(i,j) && (neighbor== 3) ) newBoard[i][j] = 1;
            else newBoard[i][j] = 0;
        }
    }
    board = newBoard; //change to new generation
}
         
