export class OX {
 
  checkGame(input) {        
    let winResult = null;
    for (let pos=0; pos<3; pos++) {
      const rowData = input[pos];      

      winResult = (!winResult && (
                       (rowData[0] === rowData[1] && rowData[0] === rowData[2])
                    || (input[0][pos] === input[1][pos] && input[0][pos] === input[2][pos]))
                  ) 
                  ? rowData[0] 
                  : winResult;    
    }

    // Check Diag
    let cell1 = input[0][0];
    winResult = (!winResult && (cell1 === input[1][1]  && cell1 === input[2][2])) ? cell1 : winResult;

    let cell2 = input[2][0];
    winResult = (!winResult && (cell2 === input[1][1] && cell2 === input[0][2])) ? cell2 : winResult;

    return winResult;
  }

  playOX(input) {
    let result = this.checkGame(input);
            
    const filter = input.filter((val) => {
        return (val[0] === ' '  || val[1] === ' ' || val[2] === ' ')            
    });      

    const txtResult = (filter.length > 0) ? "In Game" : "Draw";      
    

    return (result) ? 'Winner: ' + result : txtResult;    
  }
}

const ox = new OX();


let input = [
  ['O', 'X', 'X'],
  ['X', 'X', 'X'],
  ['X', 'O', 'O'],
]

let g = ox.playOX(input);
console.log(g);