
export function findWin(arr) {
  let result = '';
  let countWinner = 0;
  const arrFlatten = [].concat.apply([], arr);
  const countValue = {};
  for (var i = 0, l = arrFlatten.length; i < l; i++) {
    countValue[arrFlatten[i]] = !countValue[arrFlatten[i]] ? 1 : countValue[arrFlatten[i]] + 1;
  }

  const diff = Math.abs(countValue.X - countValue.O);
  let validInput = diff === 1 || diff === 0 || isNaN(diff);

  result = (!countValue[' ']) ? 'Draw' : 'In Game';
  for (let i = 0; i < 3; i++) {


    result = (arr[i][0] !== arr[i][1] || arr[i][0] !== arr[i][2]) ? result : arr[i][0] + ' Win';
    result = (arr[0][i] !== arr[1][i] || arr[0][i] !== arr[2][i]) ? result : arr[0][i] + ' Win';


    countWinner = (arr[i][0] !== arr[i][1] || arr[i][0] !== arr[i][2]) ? countWinner : countWinner + 1;
    countWinner = (arr[0][i] !== arr[1][i] || arr[0][i] !== arr[2][i]) ? countWinner : countWinner + 1;

  }
  result = (arr[0][0] !== arr[1][1] || arr[0][0] !== arr[2][2]) ? result : arr[1][1] + ' Win';
  result = (arr[0][2] !== arr[1][1] || arr[0][2] !== arr[2][0]) ? result : arr[1][1] + ' Win';

  validInput = countWinner > 1 ? false : validInput;
  result = (validInput) ? result : 'Invalid input'
  return (countValue[' '] === 9) ? 'In Game' : result;
}