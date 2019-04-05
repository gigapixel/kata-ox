
export function calculate(input) {

  let result = check(input);

  result = !((input[0][0] !== input[1][1]) || (input[1][1] !== input[2][2])) ? input[0][0] + ' win' : result;
  result = !((input[0][2] !== input[1][1]) || (input[1][1] !== input[2][0])) ? input[0][2] + ' win' : result;

  input = transpose(input);
  result = check(input) ? check(input) : result;

  result = validate(input) ? result : 'invalid input';

  result = validate2(input, result);

  return result ? result : 'Draw';
}

function validate(input) {
  let player = { o: 0, x: 0 };

  let flat = flatten(input);
  let compact = flat.filter((val) => {
    return val != '';
  });
  compact.map((p) => {
    p === 'o' ? player.o++ : player.x++;
  });
  // console.log(player, player.o - player.x);
  return ((player.o - player.x) > 1 || (player.o - player.x) < -1) ? false : true;
}

function transpose(a) {
  return Object.keys(a[0]).map(function (c) {
    return a.map(function (r) { return r[c]; });
  });
}

function validate2(input, oldResult) {
  let haveWinner = oldResult ? oldResult.includes('win') ? true : false : false;
  let numO =  flatten(input).filter((val) => {
    return val === 'o';
  }).length;

  let numX = flatten(input).filter((val) => {
    return val === 'x';
  }).length; 

  let newResult = !(!haveWinner || (numX !== numO)) ? 'invalid input' : undefined;
  return newResult ? newResult : oldResult;
}

function check(input) {
  for (let i = 0; i <= 2; i++) {
    let row = input[i].filter(val => {
      return val !== '';
    });
    switch (row.length) {
      case 0:
        return 'in game';
      case 1:
        return 'in game';
      default:
        break;
    }

    row = input[i].filter((elem, pos) => {
      return input[i].indexOf(elem) === pos;
    })
    switch (row.length) {
      case 1:
        return row[0] + ' win';
      default:
        break;
    }
  };
}

function flatten(input) {
  let result = [];
  input.map((i) => {
    result.push(...i);
  });
  return result;
}
