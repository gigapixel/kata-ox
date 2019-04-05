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
    let results = [];          
    for (let pos=0; pos<3; pos++) {
      const rowData = input[pos];              

      // Check row winner
      let rowResult = this.And(rowData[0] !== ' ', this.And(rowData[0] === rowData[1], rowData[0] === rowData[2])) ? [rowData[0]] : [];
      results.push(...rowResult);

      // Check column winner
      let colResult = this.And(input[0][pos] !== ' ', this.And(input[0][pos] === input[1][pos], input[0][pos] === input[2][pos])) ? [input[0][pos]] : [];
      results.push(...colResult);

                    
    }

    // Check Diag1
    let cell1 = input[0][0];    
    let diag1Result = this.And(cell1 !== ' ', this.And(cell1 === input[1][1], cell1 === input[2][2])) ? [cell1] : [];
    results.push(...diag1Result);

    // Check diag2
    let cell2 = input[2][0];    
    let diag2Result = this.And(cell2 !== ' ', this.And(cell2 === input[1][1], cell2 === input[0][2])) ? [cell2] : [];
    results.push(...diag2Result);

    //return winResult;
    return results;
  }

  playOX(input) {
    let checkInput = this.validateInput(input);    
    let result = this.checkGame(input);
                
    const filter = input.filter((val) => {
        return (val[0] === ' '  || val[1] === ' ' || val[2] === ' ')            
    });      
    
    const txtResult = (filter.length > 0) ? "In Game" : "Draw";              

    // Check Winner, Invalid, In Game, Draw
    return (checkInput || (this.And(Array.isArray(result), result.length > 1))) ? "Invalid Input"
      : (this.And(Array.isArray(result), result.length === 1) ? 'Winner: ' + result[0] : txtResult);
    
  }
}

const ox = new OX();


let input = [  
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' '],
]

//console.log('validate: ', ox.validateInput(input));
console.log(ox.checkGame(input));
let g = ox.playOX(input);
console.log(g);