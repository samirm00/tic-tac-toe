import data from '../data.js';
import dom from '../dom.js';
import checkWin from '../utils/checkWin.js';


const clickCellHandler = (e) => 
{
    const cell = e.target;
    const index = cell.dataset.index;

    if (data.board[index] !== null || checkWin(data)) return;

    cell.innerText = data.currentPlayer;
    data.board[index] = data.currentPlayer;

    if (checkWin(data))
    {
        dom.statusText.innerText = `${data.currentPlayer} wins!`;
        return;
    }

    if (data.board.every(cell => cell !== null))
    {
        dom.statusText.innerText = 'It\'s a draw!';
        return;
    }

    data.currentPlayer = data.currentPlayer === 'X' ? 'O' : 'X';
    dom.statusText.innerText = `${data.currentPlayer}'s turn`;
}


export default clickCellHandler;