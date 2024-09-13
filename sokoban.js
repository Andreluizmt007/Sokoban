const board2 = document.getElementById('board2');

const row = document.createElement('div'); 
row.classList.add('row');

for (let i=0; i<4; i++) {
    const cell = document.createElement('div');   
    cell.classList.add('cell');
    board2.appendChild(cell); 
}

board2.append(row);
