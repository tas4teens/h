var board = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];

board[Math.floor(Math.random()*4)][Math.floor(Math.random()*4)] = 2;
board[Math.floor(Math.random()*4)][Math.floor(Math.random()*4)] = 2;

console.log(board);

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        console.log('up');
        moveUp();
    }
    else if (e.keyCode == '40') {
        //console.log('down');
        moveDown();
    }
    else if (e.keyCode == '37') {
       //console.log('left');
        moveLeft();
    }
    else if (e.keyCode == '39') {
       //console.log('right');
        moveRight();
    }
}


/*template board for easy visualization
[0, 0, 0, 0]
[0, 0, 2, 0]
[0, 0, 0, 0]
[0, 2, 0, 0]
*/

var temprow;
var tempcol;

function moveUp(){
    for (var row = 1; row < board.length; row++){
        for (var col = 0; col < board[0].length; col++){
            temprow = row;
            tempcol = col;
            while ((board[temprow][tempcol] == board[temprow - 1][tempcol]) || (board[temprow - 1][tempcol] == 0)){
                board[temprow - 1][tempcol] += board[temprow][tempcol]
                board[temprow][tempcol] = 0
                temprow -= 1

                if (temprow == 0){
                    break;
                }
            }
        }
    }
    console.log(board);  
}

function moveDown(){
    for (var row = board.length-2; row > -1; row--){
        for (var col = 0; col < board[0].length; col++){
            temprow = row;
            tempcol = col;
            //moves top element down while top element is equal to down element or down element is equal to 0
            while ((board[temprow][tempcol] == board[temprow + 1][tempcol]) || (board[temprow + 1][tempcol] == 0)){
                board[temprow + 1][tempcol] += board[temprow][tempcol]
                board[temprow][tempcol] = 0
                temprow += 1

                if (temprow == board.length - 1){
                    break;
                }
            }
        }
    }   
    console.log(board);
}

function moveRight(){
    for (var row = 1; col < board[0].length; row++){
        for (var col = 0; col < board.length; col++){
            temprow = row;
            tempcol = col;
            while ((board[tempcol][temprow] == board[tempcol - 1][temprow]) || (board[tempcol - 1][temprow] == 0)){
                board[tempcol - 1][temprow] += board[tempcol][temprow]
                board[tempcol][temprow] = 0
                tempcol -= 1

                if (tempcol == 0){
                    break;
                }
            }
        }
    }
    console.log(board);  
}
    
    