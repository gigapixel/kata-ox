export class OX {
 
  checkGame(input) {        
    for (let pos=0; pos<3; pos++) {
      const rowData = input[pos];      

      // Check Row
      if (rowData[0] === rowData[1] && rowData[0] === rowData[2])      
        return rowData[0];

      // Check Column
      if (input[0][pos] === input[1][pos] && input[0][pos] === input[2][pos])      
        return input[0][pos];    
    }

    // Check Diag
    let cell = input[0][0];
    if (cell === input[1][1]  && cell === input[2][2]) return cell;

    cell = input[2][0];
    if (cell === input[1][1] && cell === input[0][2]) return cell;

    return null;
  }

  playOX(input) {
    let result = this.checkGame(input);
    

    if (!result) {
      const filter = input.filter((val) => {
          return (val[0] === ' '  || val[1] === ' ' || val[2] === ' ')            
      });      

      return (filter.length > 0) ? "In Game" : "Draw";      
    }

    return 'Winner: ' + result;
  }
}

const ox = new OX();
// let input = [
//   ['O', 'O', 'X'],
//   ['X', 'X', 'O'],
//   ['O', 'O', 'X'],
// ]

let input = [
  ['O', 'X', 'X'],
  ['X', 'O', ' '],
  ['O', 'X', 'O'],
]

let g = ox.playOX(input);
console.log(g);