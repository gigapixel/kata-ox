import _ from "lodash";

let dataVertical = [[], [], []];
let print = 'in game';

export function main(input) {
  let isValid = validateInput(input);
  if (!isValid) {
    return 'Invalid Input';
  }

  for(let i = 0; i < 3; i++ ){

    // ver
    const valV = check([
      input[i][0],
      input[i][1],
      input[i][2]
    ]);
    if(valV.length === 1) return valV[0] + ' WIN'; 
   
    // ho
    const valH = [
      input[0][i],
      input[1][i],
      input[2][i]].filter(onlyUnique);
    if(valH.length === 1) return valH[0] + ' WIN';
    // console.log(i);
  }


  // ty 1
  const valT1 =
    [input[0][0],
    input[1][1],
    input[2][2]].filter(onlyUnique);
  if(valT1.length === 1) return valT1[0] + ' WIN';


  // ty 2
  const valT2 = [input[2][0],
    input[1][1],
    input[0][2]].filter(onlyUnique);
  if(valT2.length === 1) return valT2[0] + ' WIN';

  return print;
}

function validateInput(input) {
  let xCount = 0;
  let oCount = 0;
  for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 2; j++) {
      xCount = (input[i][j] === 'X') ? xCount+1 : xCount;
      oCount = (input[i][j] === 'O') ? oCount+1 : oCount;
    }
  }
  let diff = xCount - oCount;
  let sumInput = (diff > 0) ? xCount - oCount : oCount - xCount;
  return (sumInput > 1) ? false : true;
}

function check(data) {
  return data.filter(onlyUnique);
  // const res = data.filter(onlyUnique);
  // if(res.length === 1){
  //   return res[0];
  // } else {
  //   return;
  // }
}

function onlyUnique(value, index, self) { 
  return self.indexOf(value) === index;
}

// usage example:
var a = ['a', 1, 'a', 2, '1'];
var unique = a.filter( onlyUnique ); 

console.log(main([
  ["X", "X", "O"],
  ["O", "O", "O"],
  ["X", "O", "X"]
]));