const player = new Player(0, 0);
const celulas = document.querySelectorAll('.cell');
const element = document.querySelector('.player');

window.addEventListener("keydown", function (event) {
    const next = player.nextPosition(event.code);

    if (verifyPosition(next)) {
        let k = next.x * 8 + next.y;
        player.moveTo(next, element, celulas[k]);
    }
})

function Player(x, y) {
    this.x = x;
    this.y = y;

    this.nextPosition = function (keycode) {
        let { x, y } = player;
        if (keycode == 'ArrowUp') { x--; }
        if (keycode == 'ArrowDown') { x++; }
        if (keycode == 'ArrowRight') { y++; }
        if (keycode == 'ArrowLeft') { y--; }

        return { x, y };
    }

    this.moveTo = function(position, element, parent) {
        this.x = position.x;
        this.y = position.y;

        parent.append(element);
    }
}

function verifyPosition(position) {
    let { x, y } = position;

    return x >= 0 && x < 8 && y >= 0 && y < 8;
}
