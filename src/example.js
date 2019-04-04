import * as _ from 'lodash';

export function calculate(input) {

  let result = check(input);

  // let val1 = _.uniq([input[0][0], input[1][1], input[2][2]]);
  // result = val1.length === 1 ? input[0][0] + ' win' : result;

  // let val2 = _.uniq([input[0][2], input[1][1], input[2][0]]);
  // result = val2.length === 1 ? input[0][2] + ' win' : result;
  result = !((input[0][0] !== input[1][1]) || (input[1][1] !== input[2][2])) ? input[0][0] + ' win' : result;
  result = !((input[0][2] !== input[1][1]) || (input[1][1] !== input[2][0])) ? input[0][2] + ' win' : result;

  input = transpose(input);
  result = check(input) ? check(input) : result;

  result = validate(input) ? result : 'invalid input';

  return result ? result : 'Draw';
}

function validate(input) {
  let player = { o: 0, x: 0 };
  _.compact(_.flatten(input)).map((p) => {
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

function check(input) {
  for (let i = 0; i <= 2; i++) {
    let row = _.compact(input[i]);
    switch(row.length) {
      case 0:
        return 'in game'; 
      case 1:
        return 'in game';
      default:
        break;
    }
    
    row = _.uniq(input[i]);
    switch(row.length) {
      case 1:
        return row[0] + ' win'; 
      default:
        break;
    }
  };
}
