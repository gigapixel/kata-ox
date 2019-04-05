export const ox = (input) => {
  let lines = [
    input[0],
    input[1],
    input[2],
    [ input[0][0], input[1][0], input[2][0] ],
    [ input[0][1], input[1][1], input[2][1] ],
    [ input[0][2], input[1][2], input[2][2] ],
    [ input[0][0], input[1][1], input[2][2] ],
    [ input[2][0], input[1][1], input[0][2] ],
  ];

  let winner = lines
    .map(line => line.join() === 'x,x,x' || line.join() === 'o,o,o' ? line[0] : '')
    .filter(char => char);

  let array = [...input[0], ...input[1], ...input[2]];
  let count = array.reduce((counter, char) => {
    counter[char] += 1;
    return counter;
  }, { x: 0, o: 0 });

  let diff = Math.abs(count.x - count.o);

  switch (true) {
    case diff > 1:
    case winner.length > 1:
    case count[winner[0]] < count[winner[0] === 'x' ? 'o' : 'x']:
      return 'Invalid input';
    
    case winner.length === 1:
      return `Winner is ${winner[0]}`;

    case count.x + count.o === 9:
      return 'Draw';

    default:
      return 'In game';
  }
}
