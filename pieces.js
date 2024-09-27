function Piece(x, y) {
    this.x = x;
    this.y = y;

    this.nextPosition = function (keycode) {
        let { x, y } = this;
        if (keycode == 'ArrowUp') { x--; }
        if (keycode == 'ArrowDown') { x++; }
        if (keycode == 'ArrowRight') { y++; }
        if (keycode == 'ArrowLeft') { y--; }

        return { x, y };
    }

    this.moveTo = function (position) {
        this.x = position.x;
        this.y = position.y;

        this.element.style.top = calculaPosicao(this.x);
        this.element.style.left = calculaPosicao(this.y);
    }

    this.insertElementInto = function (className, parent) {
        this.element = createGameElement('div', className, parent);

        this.element.style.top = calculaPosicao(this.x);
        this.element.style.left = calculaPosicao(this.y);
    }
}
