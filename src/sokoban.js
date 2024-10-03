import Piece from "./pieces.js";
import { buildGameBoard } from "./board.js";
import { lvl0, lvl1 } from "./level.js";

const { boardMap, pieces, numberOfGoals } = buildGameBoard(lvl1);
const board = document.querySelector('.board');

const player = createBoardPiece(pieces.player, 'player');
const boxes = [];

function createBoardPiece(piecePosition, className) {
    const piece = new Piece(piecePosition.y, piecePosition.x);
    piece.insertElementInto(className, board);

    return piece;
}

for (let i = 0; i < pieces.boxes.length; i++) {
    let piece = createBoardPiece(pieces.boxes[i], 'caixao');
    boxes.push(piece);
}

window.addEventListener("keydown", function (event) {
    // event.preventDefault();

    handlePieceMovement(event.code);
});

/** Tarefa #1: implementar função para localizar uma caixa à partir de um
 * uma dada coordenada.
*/
function findBoxAtPosition(position) {
    // modificar linha(s) de código abaixo
    return boxes.find((box) => box.y == position.y && box.x == position.x);
}

function leveantaAPlaquinha() {
    alert("Congratulations!");
}

/** Tarefa #2: modificar a função abaixo de forma a tratar tando a movimentação
 * do jogador quanto das caixas.
*/
function handlePieceMovement(keycode) {
    // Variável destinada ao pré-cálculo da posição do jogador
    const next = player.nextPosition(keycode);
    // (Modificar) Variável para detectar a "presença" de outra peça
    const foundBox = findBoxAtPosition(next);

    // Implementar lógica caso encontre uma outra peça no caminho.
    if (foundBox) {
        const nextPosBox = foundBox.nextPosition(keycode);
        const foundBox2 = findBoxAtPosition(nextPosBox);
        const boxCanMove = verifyPosition(nextPosBox);

        if (boxCanMove && !foundBox2) {
            foundBox.moveTo(nextPosBox);
            player.moveTo(next);

            const caixasCertas = contagemDeCaixasCorretas();

            if (caixasCertas == numberOfGoals) {
                setTimeout(leveantaAPlaquinha, 300);
            }
        }
    }
    // E caso não encontre outra peça...
    else {
        // Faça as modificações que forem necessárias para manter o
        // funcionamento do jogo.
        const playerCanMove = verifyPosition(next)
        if (playerCanMove) {
            player.moveTo(next);
        }
    }
}

function verifyPosition(position) {
    let { y, x } = position;

    return boardMap[y][x] !== '#';
}

function contagemDeCaixasCorretas() {
    let count = 0;

    for (let i = 0; i < boxes.length; i++) {
        let { y, x } = boxes[i];

        if (boardMap[y][x] == 'G') count++;
    }
    return count;
}