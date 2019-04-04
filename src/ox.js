export class OX {

  And(a, b) {   
   return !(!a || !b);   
  }
  
  validateInput(input) {
    let cO = 0, cX = 0;
    for (let row=0; row <= 2; row++) {
      for (let col=0; col <= 2; col++) {
        cO += (input[row][col] === 'O' ? 1 : 0);
        cX += (input[row][col] === 'X' ? 1 : 0);
      }
    }

    return Math.abs(cO - cX) >= 2 ? 'Invalid Input' : null;
  }
 
  checkGame(input) {        
    let winResult = null;
    for (let pos=0; pos<3; pos++) {
      const rowData = input[pos];              

      winResult = this.And(!winResult , this.And(rowData[0] === rowData[1], rowData[0] === rowData[2])) ? rowData[0] : winResult;
      winResult = this.And(!winResult , this.And(input[0][pos] === input[1][pos], input[0][pos] === input[2][pos])) ? input[0][pos] : winResult;
                    
    }

    // Check Diag
    let cell1 = input[0][0];
    winResult = this.And(!winResult,  this.And(cell1 === input[1][1], cell1 === input[2][2])) ? cell1 : winResult;

    let cell2 = input[2][0];
    winResult = this.And(!winResult,  this.And(cell2 === input[1][1], cell2 === input[0][2])) ? cell2 : winResult;

    return winResult;
  }

  playOX(input) {
    let checkInput = this.validateInput(input);
    let result = (checkInput) ? checkInput : this.checkGame(input);
                
    const filter = input.filter((val) => {
        return (val[0] === ' '  || val[1] === ' ' || val[2] === ' ')            
    });      
    

    const txtResult = (filter.length > 0) ? "In Game" : "Draw";          

    return this.And(result, result != ' ') ? ((checkInput) ? '' : 'Winner: ') + result : txtResult;    
  }
}

const ox = new OX();


let input = [  
  ['X', 'X', 'X'],
  ['O', 'O', 'O'],
  [' ', ' ', ' '],
]

//console.log('validate: ', ox.validateInput(input));
let g = ox.playOX(input);
console.log(g);