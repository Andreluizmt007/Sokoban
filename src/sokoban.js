import { buildGameBoard } from "./board.js";
import { lvl0, lvl1, lvl2 } from "./level.js";

const { boardMap, pieces: { boxes, player }, numberOfGoals } = buildGameBoard(lvl2);

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

            if (levelCompleted()) setTimeout(() => alert("Congratulations!"), 250);
        }
    }
    else {
        const playerCanMove = verifyPosition(next)
        if (playerCanMove) player.moveTo(next);
    }
}

function verifyPosition(position) {
    let { y, x } = position;

    return boardMap[y][x] !== '#';
}

function levelCompleted() {
    let count = 0;

    for (const position of boxes) {
        let { y: y, x: x } = position;

        if (boardMap[y][x] == 'G') count++;
    }

    return count == numberOfGoals;
}