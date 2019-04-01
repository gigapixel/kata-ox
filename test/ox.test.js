import { describe, it } from 'mocha';
import { expect } from 'chai';

import { OX } from '../src/ox';

describe('ox.js', () => {
  describe('alwaysReturn1()', () => {
    it('row 1', () => {
      const ox = new OX();
      let result = ox.playOX([
        ['O', 'O', 'O'],
        ['X', 'X', ''],
        ['', '', ''],
      ])
      
      expect(result).equal('Winner: O');
    });
  });
});
