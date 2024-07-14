import clickCellHandler from '../handlers/clickCellHandler.js';

/**
 * Creates a cell element, assigns it a class and dataset index, and attaches a click event listener.
 *
 * @function createCell
 * @param {number} index - The index to be assigned to the cell's dataset.
 * @returns {HTMLDivElement} The created cell element.
 *
*/
const createCell = (index) =>
{
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.index = index;
    cell.addEventListener('click', (e) =>
    {
        clickCellHandler(e);
    });
    return cell;
}

export default createCell;
