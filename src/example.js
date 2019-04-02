import _ from "lodash";

let dataVertical = [[],[],[]];
let print = 'in game';

export function main(input) {
  checkData(input,'Horizontal');
  if(print === 'in game'){
    checkData(dataVertical,'Vertical');
    print = ((input[0][0] === input[1][1] && input[2][2] === input[1][1]) && input[1][1] !== "" ) || ((input[0][2] === input[1][1] && input[2][0] === input[1][1])&& input[1][1] !== "" ) ? `${input[1][1]} WIN` : 'in game'
  }
  return print;
}

function checkData(input,task){
  input.some((res,key)=>{
    if(task === 'Horizontal'){
      res.forEach((value,keyin)=>{
        dataVertical[keyin].push(value);
      })
    }
    return _.countBy(res, x => x === 'O').true === 3 ? print = 'O WIN' : 
    _.countBy(res, x => x === 'X').true === 3 ? print = 'X WIN' : false;
  });
}

console.log(main([
  ["", "O", "O"],
  ["X", "", "X"],
  ["O", "O", ""]
]));
