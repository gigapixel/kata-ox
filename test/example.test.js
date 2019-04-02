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

    it('should x win row 1', () => {
      let input = [
        ['x', 'x', 'x'],
        ['o', 'o', 'x'],
        ['x', 'x', 'o']
      ];
      let result = calculate(input);
      expect(result).equal('x win');
    });

    it('should x win row 2', () => {
      let input = [
        ['x', 'o', 'o'],
        ['x', 'x', 'x'],
        ['o', 'x', 'o']
      ];
      let result = calculate(input);
      expect(result).equal('x win');
    });

    it('should x win row 3', () => {
      let input = [
        ['x', 'o', 'o'],
        ['o', 'x', 'o'],
        ['x', 'x', 'x']
      ];
      let result = calculate(input);
      expect(result).equal('x win');
    });

    it('should x win cell 1', () => {
      let input = [
        ['x', 'x', 'o'],
        ['x', 'o', 'o'],
        ['x', 'o', 'x']
      ];
      let result = calculate(input);
      expect(result).equal('x win');
    });

    it('should x win cell 2', () => {
      let input = [
        ['x', 'x', 'o'],
        ['x', 'x', 'o'],
        ['o', 'x', 'x']
      ];
      let result = calculate(input);
      expect(result).equal('x win');
    });

    it('should x win cell 3', () => {
      let input = [
        ['x', 'x', 'x'],
        ['x', 'o', 'x'],
        ['o', 'x', 'x']
      ];
      let result = calculate(input);
      expect(result).equal('x win');
    });

    it('should x win TY left to right', () => {
      let input = [
        ['x', 'x', 'o'],
        ['x', 'x', 'o'],
        ['o', 'o', 'x']
      ];
      let result = calculate(input);
      expect(result).equal('x win');
    });

    it('should x win TY right to left', () => {
      let input = [
        ['o', 'x', 'x'],
        ['o', 'x', 'o'],
        ['x', 'o', 'x']
      ];
      let result = calculate(input);
      expect(result).equal('x win');
    });

    ///////////
    it('should o win row 1', () => {
      let input = [
        ['o', 'o', 'o'],
        ['o', 'o', 'x'],
        ['x', 'x', 'o']
      ];
      let result = calculate(input);
      expect(result).equal('o win');
    });

    it('should o win row 2', () => {
      let input = [
        ['x', 'o', 'o'],
        ['o', 'o', 'o'],
        ['o', 'x', 'x']
      ];
      let result = calculate(input);
      expect(result).equal('o win');
    });

    it('should o win row 3', () => {
      let input = [
        ['x', 'o', 'x'],
        ['o', 'x', 'o'],
        ['o', 'o', 'o']
      ];
      let result = calculate(input);
      expect(result).equal('o win');
    });

    it('should o win cell 1', () => {
      let input = [
        ['o', 'x', 'o'],
        ['o', 'x', 'o'],
        ['o', 'o', 'x']
      ];
      let result = calculate(input);
      expect(result).equal('o win');
    });

    it('should o win cell 2', () => {
      let input = [
        ['x', 'o', 'x'],
        ['x', 'o', 'o'],
        ['o', 'o', 'x']
      ];
      let result = calculate(input);
      expect(result).equal('o win');
    });

    it('should o win cell 3', () => {
      let input = [
        ['o', 'x', 'o'],
        ['x', 'o', 'o'],
        ['x', 'x', 'o']
      ];
      let result = calculate(input);
      expect(result).equal('o win');
    });

    it('should o win TY left to right', () => {
      let input = [
        ['o', 'x', 'x'],
        ['x', 'o', 'o'],
        ['o', 'x', 'o']
      ];
      let result = calculate(input);
      expect(result).equal('o win');
    });

    it('should o win TY right to left', () => {
      let input = [
        ['o', 'x', 'o'],
        ['x', 'o', 'x'],
        ['o', 'o', 'x']
      ];
      let result = calculate(input);
      expect(result).equal('o win');
    });

    it('should in game', () => {
      let input = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ];
      let result = calculate(input);
      expect(result).equal('in game');
    });
  });
});
