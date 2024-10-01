import Piece from "./pieces.js";
import { buildGameBoard } from "./board.js";
import { boardMap } from "./board.js";

const pieces = buildGameBoard();
const board = document.querySelector('.board');

const player = createBoardPiece(pieces.player, 'player');
const boxes = [];

function createBoardPiece(piecePosition, className) {
    const piece = new Piece(piecePosition.y, piecePosition.x);
    piece.insertElementInto(className, board);
    
    return piece;
}

for (let i = 0; i < pieces.boxes.length; i++) {
    let piece = createBoardPiece(pieces.boxes[i], 'caixao');
    boxes.push(piece);
}

window.addEventListener("keydown", function (event) {
    // event.preventDefault();

    handlePieceMovement(event.code);
});

/** Tarefa #1: implementar função para localizar uma caixa à partir de um
 * uma dada coordenada.
*/
function findBoxAtPosition(position) {
    // modificar linha(s) de código abaixo
    return boxes.find((box) => box.y == position.y && box.x == position.x);
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