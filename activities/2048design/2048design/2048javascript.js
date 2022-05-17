var objImage = null;
function init() {
    objImage = document.getElementById("tile2");
    objImage.style.position = "absolute";
    objImage.style.left = "112px";
    objImage.style.top = "112px";
}
function getKeyAndMove(e) {
    var key_code = e.which || e.keyCode;
    switch (key_code) {
        case 37: //left arrow key
            moveLeft();
            break;
        case 38: //Up arrow key
            moveUp();
            break;
        case 39: //right arrow key
            moveRight();
            break;
        case 40: //down arrow key
            moveDown();
            break;
    }
}
function moveLeft() {
    objImage.style.left = parseInt(objImage.style.left) - 367 + "px";
}
function moveUp() {
    objImage.style.top = parseInt(objImage.style.top) - 245 + "px";
}
function moveRight() {
    objImage.style.left = parseInt(objImage.style.left) + 122 + "px";
}
function moveDown() {
    objImage.style.top = parseInt(objImage.style.top) + 367 + "px";
}
window.onload = init;