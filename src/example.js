// let arr = [
//   ['X', 'X', 'O'],
//   ['X', 'O', 'X'],
//   ['O', 'X', 'O']
// ];

// let arr = [
//   ['X', 'X', 'O'],
//   ['O', 'X', 'X'],
//   ['X', 'X', 'O']
// ];

// console.log(findWin(arr));

 export function findWin(arr) {

  let isIngame = false;

  for (let i = 0; i < 3; i++) {
    if ((arr[i][0] === arr[i][1] && arr[i][0] === arr[i][2]) && arr[i][2] ==='X' && arr[i][2] ==='O') {
      return arr[i][0] + ' Win';
    }

    if ((arr[0][i] === arr[1][i] && arr[0][i] === arr[2][i] && arr[i][2] ==='X' && arr[i][2] ==='O')) {
      return arr[0][i] + ' Win';
    }

    for(let j = 0 ; j < 3 ; j++) {
      if(arr[i][j] === ' ')
      isIngame = true;
    }
  }

  
  if ((arr[0][0] === arr[1][1] && arr[0][0] === arr[2][2]) || (arr[0][2] === arr[1][1] && arr[0][2] === arr[2][0])) {
    return arr[1][1] + ' Win';
  }

  return isIngame ? 'In Game' : 'Draw';
}