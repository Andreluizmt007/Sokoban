import Piece from "./pieces.js";
import { buildGameBoard } from "./board.js";
import { boardMap } from "./board.js";

const pieces = buildGameBoard();

const board = document.querySelector('.board');
const player = createBoardPiece(pieces.player, 'player');

function createBoardPiece(piecePosition, className) {
    const piece = new Piece(piecePosition.y, piecePosition.x);
    piece.insertElementInto(className, board);

    return piece;
}

window.addEventListener("keydown", function (event) {
    const next = player.nextPosition(event.code);

    if (verifyPosition(next)) {
        player.moveTo(next);
    }
})

function verifyPosition(position) {
    let { y, x } = position;

    return boardMap[y][x] !== '#';
}