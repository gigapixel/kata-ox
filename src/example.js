import _ from "lodash";

let dataVertical = [[], [], []];
let print = 'in game';

export function main(input) {
  let isValid = validateInput(input);
  if (!isValid) {
    return 'Invalid Input';
  }
  checkData(input, 'Horizontal');
  if (print === 'in game') {
    checkData(dataVertical, 'Vertical');
    print = ((input[0][0] === input[1][1] && input[2][2] === input[1][1]) && input[1][1] !== "")
      || ((input[0][2] === input[1][1] && input[2][0] === input[1][1]) && input[1][1] !== "") ? `${input[1][1]} WIN` : 'in game'
  }
  return print;
}

function checkData(input, task) {
  input.some((res, key) => {
    if (task === 'Horizontal') {
      res.forEach((value, keyin) => {
        dataVertical[keyin].push(value);
      })
    }
    return _.countBy(res, x => x === 'O').true === 3 ? print = 'O WIN' :
      _.countBy(res, x => x === 'X').true === 3 ? print = 'X WIN' : false;
  });
}

function validateInput(input) {
  let xCount = 0;
  let oCount = 0;
  for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 2; j++) {
      if (input[i][j] === 'X') {
        xCount++;
      } else if (input[i][j] === 'O') {
        oCount++;
      }
    }
  }
  let sumInput = 0;
  if (xCount > oCount) {
    sumInput = xCount - oCount;
  } else if (oCount > xCount) {
    sumInput = oCount - xCount;
  }

  if (sumInput > 1) {
    return false;
  }

  return true;
}

console.log(main([
  ["X", "X", "X"],
  ["X", "O", "O"],
  ["O", "O", "X"]
]));