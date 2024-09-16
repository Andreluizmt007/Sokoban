const board2 = document.getElementById('board2');
const M = 8;
const N = 8;
for(let k=0; k<M; k++) {
const row = document.createElement('div'); 
row.classList.add('row');
   
for (let i=0; i<N; i++) {
    const cell = document.createElement('div');   
    cell.classList.add('cell');
    row.appendChild(cell); 
    
//     if (k == 0 || k == M-1 || i == 0 || i == N-1) {
//         cell.classList.add('dir');
//    }
    if (k > 0 && k < M-1 && i > 0 && i < N-1) 
        cell.classList.add('dir');
    
board2.append(row);
}
   
}
//  const celldir = document.createElement('div');
//     row.classList.add('cell', 'dir');
//     row.appendChild(celldir);
//     board2.append(row)