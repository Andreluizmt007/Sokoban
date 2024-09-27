function buildGameBoard(numberOfRows, numberOfCollumns) {
    const game = document.getElementById("game");
    const board = createGameElement('div', 'board', game);
    const pieces = {}
    
    for (let x = 0; x < numberOfRows; x++) {
        const row = createGameElement('div', 'row', board);
        
        for (let y = 0; y < numberOfCollumns; y++) {
            const cell = createGameElement('div', 'cell', row);
            const char =  boardMap[x][y];

            if(char === '#')cell.classList.add('wall');
            if(char === 'B')cell.classList.add('box');
            if(char === 'G')cell.classList.add('goal');
            if(char === 'P')pieces.player = {x: x, y: y};
        }
    } 
    return pieces;
}