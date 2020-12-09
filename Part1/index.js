let board = ['','','','','','','','','',];

function play(square) {
    let player = document.getElementById("player");    
    let box = document.getElementById(square);
    if(box.innerText !== '') {
        alert('CHEATER ALERT WEEWOOWEEWOO')
        return;
    }

    if (player.innerText === 'x') {
        player.innerText = 'o';
        box.innerText = 'x'
    } else {
        player.innerText = 'x';
        box.innerText = 'o';
    }
    board[square] = box.innerText;

    checkWinner();
}

function checkWinner() {
    if(board.slice(0,3) === ['x','x','x'] || 
    board.slice(3,3) === ['x','x','x'] ||
    board.slice(6,3) === ['x','x','x'] ||
    board[0]+board[3]+board[6] === 'xxx' ||
    board[1]+board[4]+board[7] === 'xxx' ||
    board[2]+board[5]+board[8] === 'xxx' ||
    board[0]+board[4]+board[8] === 'xxx' ||
    board[2]+board[4]+board[6] === 'xxx' ) {
        alert('O LOSES!');
        resetBoard();
    }
    
    if(board.slice(0,3) === ['o','o','o'] || 
    board.slice(3,3) === ['o','o','o'] ||
    board.slice(6,3) === ['o','o','o'] ||
    board[0]+board[3]+board[6] === 'ooo' ||
    board[1]+board[4]+board[7] === 'ooo' ||
    board[2]+board[5]+board[8] === 'ooo' ||
    board[0]+board[4]+board[8] === 'ooo' ||
    board[2]+board[4]+board[6] === 'ooo' ) {
        alert('X LOSES!');
        resetBoard();
    }
}

function resetBoard() {
    board = ['','','','','','','','','',];
    document.getElementById('player').innerText = 'x';
    let boxes = document.getElementsByTagName('td');
    for( x in boxes) {
        boxes[x].innerText = '';
        console.log(boxes[x].innerText)
    }
}