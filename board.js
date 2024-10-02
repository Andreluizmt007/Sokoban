export const boardMap = [
    [ "#", "#", "#", "#", "#", "#", "#", "#" ],
    [ "#", ".", ".", ".", ".", ".", ".", "#" ],
    [ "#", ".", ".", ".", "#", ".", ".", "#" ],
    [ "#", ".", "#", ".", "G", ".", ".", "#" ],
    [ "#", ".", ".", ".", "B", "#", ".", "#" ],
    [ "#", ".", "G", "B", "P", "B", "G", "#" ],
    [ "#", ".", ".", ".", ".", ".", ".", "#" ],
    [ "#", "#", "#", "#", "#", "#", "#", "#" ]
];

const NUM_ROWS = boardMap.length;
const NUM_COLS = boardMap[0].length;


export function buildGameBoard() {
    const game = document.getElementById("game");
    const board = createGameElement('div', 'board', game);
    const pieces = {
        boxes: []
    };

    for (let y = 0; y < NUM_ROWS; y++) {
        const row = createGameElement('div', 'row', board);
        
        for (let x = 0; x < NUM_COLS; x++) {
            const cell = createGameElement('div', 'cell', row);
            const char =  boardMap[y][x];
            const position = {y: y, x: x};

            if(char === '#')cell.classList.add('wall');
            if(char === 'G')cell.classList.add('goal');
            if(char === 'P')pieces.player = position;
            if(char === 'B')pieces.boxes.push(position);
        }
    } 
    return pieces;
}

export function createGameElement(elementName, className, parentNode) {
    const element = document.createElement(elementName);
    element.classList.add(className);
    parentNode.append(element);

    return element;
}