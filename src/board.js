
function string2BoardMap(level) {
    const lines = level.trim().split('\n');
    console.log(lines);
    return lines;
}


// export const boardMap = [
//     [" ", " ", "#", "#", "#", "#", "#"],
//     ["#", "#", "#", ".", ".", ".", "#"],
//     ["#", ".", ".", ".", "#", ".", "#", "#"],
//     ["#", ".", "#", ".", "G", ".", ".", "#"],
//     ["#", ".", ".", ".", "B", "#", ".", "#"],
//     ["#", "#", "G", "B", "P", "B", "G", "#"],
//     [" ", "#", ".", ".", ".", "#", "#", "#"],
//     [" ", "#", "#", "#", "#", "#"]
// ];



export function buildGameBoard(level) {
    const boardMap = string2BoardMap(level);
    const game = document.getElementById("game");
    const board = createGameElement('div', 'board', game);
    const pieces = {
        boxes: []
    };
    let numberOfGoals = 0;
    const NUM_ROWS = boardMap.length;

    for (let y = 0; y < NUM_ROWS; y++) {
        const row = createGameElement('div', 'row', board);
        const NUM_COLS = boardMap[y].length;

        for (let x = 0; x < NUM_COLS; x++) {
            const cell = createGameElement('div', 'cell', row);
            const char = boardMap[y][x];
            const position = { y: y, x: x };

            if (char === '#') cell.classList.add('wall');
            if (char === ' ') cell.classList.add('rell');
            if (char === '_') cell.classList.add('rell');
            if (char === 'G') {
                cell.classList.add('goal')
                numberOfGoals++;
            };
            if (char === 'P') pieces.player = position;
            if (char === 'B') pieces.boxes.push(position);
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