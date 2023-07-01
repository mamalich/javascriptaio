const ball = document.getElementById('ball');
document.addEventListener('keydown', handleKeyPress);
let positionX = 0;
let positionY = 0;

function handleKeyPress(event) {
    if (event.code === 'ArrowLeft') {
        positionX = positionX - 10;
    }
    if (event.code === 'ArrowRight') {
        positionX = positionX + 10;
    }
    if (positionX < 0) {
        positionX = 0;
    }
    if (event.code === 'ArrowDown') {
        positionY = positionY + 10;
    }
    if (event.code === 'ArrowUp') {
        positionY = positionY - 10;
    }
    if (positionY < 0) {
        positionY = 0;
    }
    refreshBallPositionX();
    refreshBallPositionY();
}
function refreshBallPositionX() {
    ball.style.left = positionX + 'px';
}
function refreshBallPositionY() {
    ball.style.top = positionY + 'px';
}