export class OX {
  checkGame(input) {      
    let result = null;  
    for (let pos=0; pos<3; pos++) {
      const rowpoint = input[pos];  
      result = ((rowpoint[0] === rowpoint[1]) === (rowpoint[0] === rowpoint[2])) ? rowpoint[0] : result;
      result = ((input[0][pos] === input[1][pos]) === (input[0][pos] === input[2][pos])) ? input[0][pos] : result;
    }

    // / \
    let row = input[0][0];
    result = ((row === input[1][1])  === (row === input[2][2])) ? row : result;
    row = input[2][0];
    result =((row === input[1][1]) === (row === input[0][2])) ? row : result;
    return result;
  }
  play(input) {
    let data = this.checkGame(input);
    return (!data) ? input.filter((val) => (val[0] === ''  || val[1] === '' || val[2] === '')).length > 0 ? 'In Game' : 'Draw' : `Winner: ${data}`;
  }
}

// let input = [
//   ['x', 'O', 'O'],
//   ['X', 'X', 'O'],
//   ['O', 'O', 'X'],
// ]

// let input = [
//   ['O', 'X', 'O'],
//   ['X', 'X', 'O'],
//   ['X', 'O', 'X'],
// ]

let input = [
      ['X', 'X', 'X'],
        ['O', 'O', 'O'],
        [' ', ' ', ' '],
]

let input = [
  ['', '', ''],
  ['', '', ' '],
  ['', ' ', ''],
]

const xton = new OX();
let g = xton.play(input);
console.log(g);


