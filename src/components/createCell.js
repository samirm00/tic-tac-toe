import clickCellHandler from '../handlers/clickCellHandler.js';

const createCell = (index) => 
{
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.index = index;
    cell.addEventListener('click', (e) => {
        clickCellHandler(e);
    });
    return cell;
}

export default createCell;