import data from '../data.js';
import dom from '../dom.js';
import createCell from '../components/createCell.js';


const loadHandler = () => {
    data.board.forEach((cell, index) =>
    {
        const cellDom = createCell(index);
        dom.gameBoard.appendChild(cellDom);
    });

    dom.statusText.innerText = `${data.currentPlayer}'s turn`;
    dom.cells = document.querySelectorAll('.cell');
}

export default loadHandler;