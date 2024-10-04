import Piece from "./pieces.js";
import { buildGameBoard } from "./board.js";
import { lvl0, lvl1, lvl2 } from "./level.js";

const { boardMap, pieces, numberOfGoals } = buildGameBoard(lvl2);
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

    handlePieceMovement(event.code);
});


function findBoxAtPosition(position) {

    return boxes.find((box) => box.y == position.y && box.x == position.x);
}

function handlePieceMovement(keycode) {
    const next = player.nextPosition(keycode);
    const foundBox = findBoxAtPosition(next);

    if (foundBox) {
        const nextPosBox = foundBox.nextPosition(keycode);
        const foundBox2 = findBoxAtPosition(nextPosBox);
        const boxCanMove = verifyPosition(nextPosBox);

        if (boxCanMove && !foundBox2) {
            foundBox.moveTo(nextPosBox);
            player.moveTo(next);

            if(levelCompleted()) setTimeout(() => alert("Congratulations!"), 250);
        }
    }

    else {
        const playerCanMove = verifyPosition(next)
        if (playerCanMove) {
            player.moveTo(next);
        }
    }
}

function verifyPosition(position) {
    let { y, x } = position;

    return boardMap[y][x] !== '#';
}

function levelCompleted() {
    let count = 0;

    for (const position of boxes) {
        if (boardMap[y][x] == 'G') count++;
    }
    return count == numberOfGoals;
}