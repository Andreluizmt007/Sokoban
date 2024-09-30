import Piece from "./pieces.js";
import { buildGameBoard } from "./board.js";
import { boardMap } from "./board.js";

const pieces = buildGameBoard();
const board = document.querySelector('.board');

const playerPiece = createBoardPiece(pieces.player, 'player');

function createBoardPiece(piecePosition, className) {
    const piece = new Piece(piecePosition.y, piecePosition.x);
    piece.insertElementInto(className, board);
    
    return piece;
}

for (let i = 0; i < pieces.boxes.length; i++) {

    createBoardPiece(pieces.boxes[i], 'caixao');
}

window.addEventListener("keydown", function (event) {
    const next = playerPiece.nextPosition(event.code);

    if (verifyPosition(next)) {
        playerPiece.moveTo(next);
    }
})

function verifyPosition(position) {
    let { y, x } = position;

    return boardMap[y][x] !== '#';
}