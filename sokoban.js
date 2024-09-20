function Player(x, y) {
    this.x = x;
    this.y = y;

    console.log(Player);
}

const player = new Player(0, 0);

const element = document.querySelector('.player');

// player.addEventListener("click", function () {
//     alert("Clicou no jogador");
// })

window.addEventListener("keydown", function (event) {
    nextPosition(event.code);

})
const celulas = document.querySelectorAll('.cell');
console.log(celulas);



function nextPosition(keycode) {
    if (keycode == 'ArrowUp') {
        player.x--;
    }
    if (keycode == 'ArrowDown') {
        player.x++;
    }
    if (keycode == 'ArrowRight') {
        player.y++;
    }
    if (keycode == 'ArrowLeft') {
        player.y--;
    }
    console.log(keycode, player);

    movePlayer();
}

function movePlayer(x, y) {
    const k = x * 8 + y;

    celulas[k].append(element);
}

function verifyPosition() {

}
