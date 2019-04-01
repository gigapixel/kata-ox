import * as _ from 'lodash';

export function calculate(input) {

  let result = check(input);
  if (result) return result;

  if(input[0, 0] === input[1, 1] === input[2, 2]) return input[0, 0] + ' win';
  if(input[0, 2] === input[1, 1] === input[2, 0]) return input[0, 2] + ' win';

  input = transpose(input);
  result = check(input);
  if (result) return result;

  return 'Draw';
}

function transpose(a) {
  return Object.keys(a[0]).map(function (c) {
    return a.map(function (r) { return r[c]; });
  });
}

function check(input) {
  for (let i = 0; i <= 2; i++) {
    let row = _.uniq(input[i]);
    if (row.length === 1) {
      return row[0] + ' win';
    }
  };
}