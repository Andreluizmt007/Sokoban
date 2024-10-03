// buildGameBoard(8, 8, rule0);
buildGameBoard(8, 8, rule1);
// buildGameBoard(8, 8, rule2);
// buildGameBoard(8, 8, rule3);
// buildGameBoard(8, 8, rule4);
// buildGameBoard(8, 8, rule5);


function buildGameBoard(numberOfRows, numberOfCollumns, rule) {
    const game = document.getElementById("game");
    const board = document.createElement('div');
    board.classList.add('board');

    for (let k = 0; k < numberOfRows; k++) {
        const row = document.createElement('div');
        row.classList.add('row');
        board.append(row);

        for (let i = 0; i < numberOfCollumns; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            row.append(cell);

            if(rule(cell, numberOfRows, numberOfCollumns, k, i)){
                cell.classList.add('dir');
            }
        }
    }
    game.append(board);
}

function rule0(cell, numberOfRows, numberOfCollumns, k, i) {
    return k <= 4
}

function rule1(cell, numberOfRows, numberOfCollumns, k, i) {
    if (k == 0 || k == numberOfRows-1 || i == 0 || i == numberOfCollumns-1) {
        cell.classList.add('dir');
    }
}
function rule2(cell, numberOfRows, numberOfCollumns, k, i) {
    if (k > 0 && k < numberOfRows-1 && i > 0 && i < numberOfCollumns-1)
        cell.classList.add('dir');
}
function rule3(cell, numberOfRows, numberOfCollumns, k, i) {
    if (k == i) {
        cell.classList.add('dir');
    }
}
function rule4(cell, numberOfRows, numberOfCollumns, k, i) {
    if (k + i == numberOfCollumns-1) {
        cell.classList.add('dir');
    }
}
function rule5(cell, numberOfRows, numberOfCollumns, k, i) {
    if (k == i || k + i == numberOfCollumns-1) {
        cell.classList.add('dir');
    }
}


