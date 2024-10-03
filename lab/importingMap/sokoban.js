const boardMap = [
    [ "#", "#", "#", "#", "#", "#", "#", "#" ],
    [ "#", ".", ".", ".", ".", ".", ".", "#" ],
    [ "#", ".", ".", ".", "#", ".", ".", "#" ],
    [ "#", ".", "#", "G", ".", ".", ".", "#" ],
    [ "#", ".", ".", "G", "B", "#", ".", "#" ],
    [ "#", ".", ".", "#", ".", "B", ".", "#" ],
    [ "#", ".", ".", "P", ".", ".", ".", "#" ],
    [ "#", "#", "#", "#", "#", "#", "#", "#" ]
];

const NUM_ROWS = boardMap.length;
const NUM_COLS = boardMap[0].length;

buildGameBoard(NUM_ROWS, NUM_COLS);

function createGameElement(elementName, className, parentNode) {
    const element = document.createElement(elementName);
    element.classList.add(className);
    parentNode.append(element);

    return element;
}

function buildGameBoard(numberOfRows, numberOfCollumns) {
    const game = document.getElementById("game");
    const board = createGameElement('div', 'board', game);
    
    for (let x = 0; x < numberOfRows; x++) {
        const row = createGameElement('div', 'row', board);
        
        for (let y = 0; y < numberOfCollumns; y++) {
            const cell = createGameElement('div', 'cell', row);
            const char =  boardMap[x][y];
            
            if(char === '#')cell.classList.add('wall');
            if(char === 'B')cell.classList.add('box');
            if(char === 'G')cell.classList.add('goal');
        }
    }
}