import { describe, it } from 'mocha';
import { expect } from 'chai';
import { OX } from '../src/example';
// import { alwaysReturn1 } from '../src/example';

describe('example.js', () => {
  describe('alwaysReturn1()', () => {
    it('Winner  O', () => {
      const ox = new OX();
      let result = ox.play([
        ['O', 'O', 'O'],
        ['X', 'X', 'O'],
        ['O', 'O', 'X'],
      ]);
      expect(result).equal('Winner: O');
    });

    it('Winner: x', () => {
      const ox = new OX();
      let result = ox.play([
        ['x', 'O', 'O'],
        ['X', 'X', 'O'],
        ['x', 'O', 'X'],
      ]);
      expect(result).equal('Winner: x');
    });
    it('Winner x  ', () => {
      const ox = new OX();
      let result = ox.play([
        ['x', 'O', 'O'],
        ['X', 'X', 'O'],
        ['O', 'O', 'X'],
      ])

      expect(result).equal('Winner: x');
    });
    it('Winner O  ', () => {
      const ox = new OX();
      let result = ox.play([
        ['x', 'O', 'O'],
        ['X', 'O', 'O'],
        ['O', 'O', 'X'],
      ])

      expect(result).equal('Winner: O');
    });

     it('In Game all blank', () => {
      const ox = new OX();
      let result = ox.play([
        ['', '', ''],
        ['', '', ' '],
        ['', ' ', ''],
      ])
      expect(result).equal('In Game');
    });

    // it('Test Winner > 1)', () => {
    //   const ox = new OX();
    //   let result = ox.play([
    //     ['X', 'X', 'X'],
    //     ['O', 'O', 'O'],
    //     [' ', ' ', ' '],
    //   ])
    //   expect(result).equal('In Game');
    // });
  });
});
