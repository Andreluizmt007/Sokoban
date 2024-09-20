window.addEventListener("keydown", function (event) {
    const next = nextPosition(event.code);
    
    if(verifyPosition(next)) movePlayer(next);
})

function Player(x, y) {
    this.x = x;
    this.y = y;
}

const player = new Player(0, 0);
const celulas = document.querySelectorAll('.cell');
const element = document.querySelector('.player');

function nextPosition(keycode) {
    let {x, y} = player;
    if (keycode == 'ArrowUp') {x--;}
    if (keycode == 'ArrowDown') {x++;}
    if (keycode == 'ArrowRight') {y++;}
    if (keycode == 'ArrowLeft') {y--;}
    
    return {x, y};
}

function movePlayer(position) {
    let {x, y} = position;
    player.x = position.x;
    player.y = position.y;

    const k = player.x * 8 + player.y;

    celulas[k].append(element);
}

function verifyPosition(position) {
    let {x, y} = position;

    return x >= 0 && x < 8 && y >= 0 && y < 8;
}
