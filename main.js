 // selectors 
const cells = Array.from(document.querySelectorAll('.cell'));
const playerDisplay = document.querySelector('.display-player');
const restartButton = document.querySelector('#restart');
const announcer = document.querySelector('.announcer');

// data 
const PLAYER_X_WON = 'PLAYER_X_WON';
const PLAYER_O_WON = 'PLAYER_O_WON';
const TIE = 'TIE';

let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let isGameActive = true;    
  
// winning possibilities 
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];


/**
 * a function used to announce the winner player or announce tie 
 * 
 * @param {string} type 
 * @returns {string} 
 */

const announce = (type) => {   
    switch (type) {
        case PLAYER_O_WON:
            announcer.innerHTML = 'Player <span class="playerO">O</span> Won';
            break;
        case PLAYER_X_WON:
            announcer.innerHTML = 'Player <span class="playerX">X</span> Won';
            break;
        case TIE:
            announcer.innerText = 'Tie';
    }
    announcer.classList.remove('hide');
};


/**
 * check a cell if it is valid for the action or it has already been chosen
 * @param  cellDOM element
 * @returns {boolean}
 */

const isValidAction = (cell) => {
    if (cell.innerText === 'X' || cell.innerText === 'O') {
        return false;
    }

    return true;
};

/**
 * validate the game result 
 * @returns {boolean}
 */

function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        const a = board[winCondition[0]];
        const b = board[winCondition[1]];
        const c = board[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        announce(currentPlayer === 'X' ? PLAYER_X_WON : PLAYER_O_WON);
        isGameActive = false;
        return;
    }

    if (!board.includes('')) announce(TIE);
}



const updateBoard = (index) => {
    board[index] = currentPlayer;
 };

 /**
  * handle change player 
  */

const changePlayer = () => {
    playerDisplay.classList.remove(`player${currentPlayer}`);
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    playerDisplay.innerText = currentPlayer;
    playerDisplay.classList.add(`player${currentPlayer}`);
};


/**
 * handle the player action
 * @param  cell 
 * @param {number} index 
 */

const playerAction = (cell, index) => {
    if (isValidAction(cell) && isGameActive) {
        cell.innerText = currentPlayer;
        cell.classList.add(`player${currentPlayer}`);
        updateBoard(index);
        handleResultValidation();
        changePlayer();
    }
};

/**
 * reset the board 
 */

const resetBoard = () => {
    board = ['', '', '', '', '', '', '', '', ''];
    isGameActive = true;
    announcer.classList.add('hide');

    if (currentPlayer === 'O') {
        changePlayer();
    }

    cells.forEach((cell) => {
        cell.innerText = '';
        cell.classList.remove('playerX');
        cell.classList.remove('playerO');
    });
};



// add event listener to each cell 

cells.forEach((cell, index) => {
    cell.addEventListener('click', () => playerAction(cell, index));
});

// add event listener to the restart restart button

restartButton.addEventListener('click', resetBoard);



 
