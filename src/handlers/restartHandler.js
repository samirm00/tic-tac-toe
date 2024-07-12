import data from '../data.js';
import dom from '../dom.js';

const restartHandler = () => 
{
    data.board.fill(null);
    dom.cells.forEach(cell => cell.innerText = '');
    data.currentPlayer = 'X';
    dom.statusText.innerText = `${data.currentPlayer}'s turn`;
}

export default restartHandler;