import { describe, it } from 'mocha';
import { expect } from 'chai';

import { calculate } from '../src/example';

describe('example.js', () => {
  describe('calculate()', () => {
    it('should Draw', () => {
      let input = [
        ['x', 'x', 'o'],
        ['o', 'o', 'x'],
        ['x', 'x', 'o']
      ];
      let result = calculate(input);
      expect(result).equal('Draw');
    });

    it('should x win', () => {
      let input = [
        ['x', 'x', 'x'],
        ['o', 'o', 'x'],
        ['x', 'x', 'o']
      ];
      let result = calculate(input);
      expect(result).equal('x win');
    });

    it('should x win', () => {
      let input = [
        ['x', 'x', 'o'],
        ['x', 'o', 'x'],
        ['x', 'x', 'o']
      ];
      let result = calculate(input);
      expect(result).equal('x win');
    });

    it('should x win', () => {
      let input = [
        ['x', 'x', 'o'],
        ['x', '', 'o'],
        ['o', 'x', 'x']
      ];
      let result = calculate(input);
      expect(result).equal('x win');
    });
  });
});
