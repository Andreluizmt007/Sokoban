import Piece from "./pieces.js";

export function buildGameBoard(level) {
    const boardMap = level.trim().split('\n');

    const game = document.getElementById("game");
    const board = createGameElement('div', 'board', game);

    let numberOfGoals = 0, boxes = [], player = null;

    for (let y = 0; y < boardMap.length; y++) {
        const row = createGameElement('div', 'row', board);

        for (let x = 0; x < boardMap[y].length; x++) {
            const cell = createGameElement('div', 'cell', row);

            const char = boardMap[y][x];
            const position = { y: y, x: x };

            if (char === '#') cell.classList.add('wall');
            if (char === '_') cell.classList.add('rell');
            if (char === ' ') cell.classList.add('rell');
            if (char === 'P') player = createBoardPiece(position, 'player');
            if (char === 'B') boxes.push(createBoardPiece(position, 'caixao'));
            if (char === 'G') {
                cell.classList.add('goal')
                numberOfGoals++;
            };
        }
    }

    return { boardMap, pieces: { boxes, player }, numberOfGoals };
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