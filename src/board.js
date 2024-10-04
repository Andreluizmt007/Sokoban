import Piece from "./pieces.js";

export function buildGameBoard(level) {
    const boardMap = level.trim().split('\n');
    const pieces = {
        boxes: []
    };

    let numberOfGoals = 0;

    const game = document.getElementById("game");
    const board = createGameElement('div', 'board', game);
    const NUM_ROWS = boardMap.length;

    for (let y = 0; y < NUM_ROWS; y++) {
        const NUM_COLS = boardMap[y].length;
        const row = createGameElement('div', 'row', board);

        for (let x = 0; x < NUM_COLS; x++) {
            const cell = createGameElement('div', 'cell', row);

            const char = boardMap[y][x];
            const position = { y: y, x: x };

            if (char === '#') cell.classList.add('wall');
            if (char === '_') cell.classList.add('rell');
            if (char === ' ') cell.classList.add('rell');
            if (char === 'P') pieces.player = createBoardPiece(position, 'player');
            if (char === 'B') pieces.boxes.push(createBoardPiece(position, 'box'));
            if (char === 'G') {
                cell.classList.add('goal')
                numberOfGoals++;
            };
        }
    }

    return { boardMap, pieces, numberOfGoals };
}

export function createGameElement(elementName, className, parentNode) {
    const element = document.createElement(elementName);
    element.classList.add(className);
    parentNode.append(element);

    return element;
}

function createBoardPiece(piecePosition, className) {
    const board = document.querySelector('.board');
    const piece = new Piece(piecePosition.y, piecePosition.x);

    piece.insertElementInto(className, board);

    return piece;
}