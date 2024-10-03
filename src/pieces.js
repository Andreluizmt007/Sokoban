import { createGameElement } from "./board.js";

const DIST_SALTO = 66;
const MARGIN_FIX = 4;

function Piece(y, x) {
    this.y = y;
    this.x = x;

    this.nextPosition = function (keycode) {
        let { y, x } = this;
        if (keycode == 'ArrowUp') { y--; }
        if (keycode == 'ArrowDown') { y++; }
        if (keycode == 'ArrowRight') { x++; }
        if (keycode == 'ArrowLeft') { x--; }

        return { y, x };
    }

    this.moveTo = function (position) {
        this.y = position.y;
        this.x = position.x;

        this.updateElementPosition();
    }

    this.insertElementInto = function (className, parent) {
        this.element = createGameElement('div', className, parent);

        this.updateElementPosition();
    }

    this.updateElementPosition = function () {
        this.element.style.top = calculaPosicao(this.y);
        this.element.style.left = calculaPosicao(this.x);
    }

    function calculaPosicao(qtd) {

        return (qtd * DIST_SALTO + MARGIN_FIX + "px");
    }
}

export default Piece;