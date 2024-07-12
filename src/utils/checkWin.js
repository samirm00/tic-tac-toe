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

