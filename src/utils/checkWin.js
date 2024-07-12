/**
 * Checks if the current player has won the game.
 * 
 * @function checkWin
 * @param {Object} data - The game data.
 * @returns {boolean} Returns true if the current player has a winning combination, otherwise false.
 */


const checkWin = (data) => 
{
    return data.winningCombinations.some(combination =>
    {
        return combination.every((index) =>
        {
            return data.board[index] === data.currentPlayer;
        });
    });
}

export default checkWin;

