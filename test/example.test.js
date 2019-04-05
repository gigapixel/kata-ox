import { describe, it } from 'mocha';
import { expect } from 'chai';

import { findWin } from '../src/example';
describe('example.js', () => {
  describe('find win', () => {
    it('should return Draw', () => {
      let result = findWin([
        ['X', 'X', 'O'],
        ['O', 'X', 'X'],
        ['X', 'O', 'O']
      ]);
      expect(result).equal('Draw');
    });

    it('should return In Game', () => {
      let result = findWin([
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
      ]);
      expect(result).equal('In Game');
    });


    it('should return In Game2', () => {
      let result = findWin([
        [' ', 'O', 'O'],
        ['X', 'X', ' '],
        [' ', 'X', ' ']
      ]);
      expect(result).equal('In Game');
    });


    it('should return X win row 1', () => {
      let result = findWin([
        ['X', 'X', 'X'],
        ['O', 'O', 'X'],
        ['X', 'O', 'O']
      ]);
      expect(result).equal('X Win');
    });

    it('should return X win row 2', () => {
      let result = findWin([
        ['O', 'O', 'X'],
        ['X', 'X', 'X'],
        ['O', 'X', 'O']
      ]);
      expect(result).equal('X Win');
    });

    it('should return X win row 3', () => {
      let result = findWin([
        ['O', 'O', 'X'],
        ['O', 'X', 'O'],
        ['X', 'X', 'X']
      ]);
      expect(result).equal('X Win');
    });

    it('should return X win column 1', () => {
      let result = findWin([
        ['X', 'O', 'X'],
        ['X', 'O', 'O'],
        ['X', 'X', 'O']
      ]);
      expect(result).equal('X Win');
    });

    it('should return X win column 2', () => {
      let result = findWin([
        ['O', 'X', 'O'],
        ['O', 'X', 'X'],
        ['X', 'X', 'O']
      ]);
      expect(result).equal('X Win');
    });

    it('should return X win column 3', () => {
      let result = findWin([
        ['X', 'O', 'X'],
        ['O', 'O', 'X'],
        ['O', 'X', 'X']
      ]);
      expect(result).equal('X Win');
    });

    it('should return X win TY 1', () => {
      let result = findWin([
        ['X', 'O', 'O'],
        ['O', 'X', 'X'],
        ['O', 'X', 'X']
      ]);
      expect(result).equal('X Win');
    });

    it('should return X win TY 2', () => {
      let result = findWin([
        ['X', 'O', 'X'],
        ['O', 'X', 'O'],
        ['X', 'X', 'O']
      ]);
      expect(result).equal('X Win');
    });


    it('should return O win row 1', () => {
      let result = findWin([
        ['O', 'O', 'O'],
        ['O', 'X', 'X'],
        ['X', 'X', 'O']
      ]);
      expect(result).equal('O Win');
    });

    it('should return O win row 2', () => {
      let result = findWin([
        ['X', 'O', 'X'],
        ['O', 'O', 'O'],
        ['X', 'X', 'O']
      ]);
      expect(result).equal('O Win');
    });

    it('should return X win row 3', () => {
      let result = findWin([
        ['X', 'O', 'X'],
        ['X', 'X', 'O'],
        ['O', 'O', 'O']
      ]);
      expect(result).equal('O Win');
    });

    it('should return X win column 1', () => {
      let result = findWin([
        ['O', 'O', 'X'],
        ['O', 'X', 'O'],
        ['O', 'X', 'X']
      ]);
      expect(result).equal('O Win');
    });

    it('should return O win column 2', () => {
      let result = findWin([
        ['O', 'O', 'X'],
        ['X', 'O', 'O'],
        ['X', 'O', 'X']
      ]);
      expect(result).equal('O Win');
    });

    it('should return O win column 3', () => {
      let result = findWin([
        ['X', 'O', 'O'],
        ['O', 'X', 'O'],
        ['X', 'X', 'O']
      ]);
      expect(result).equal('O Win');
    });

    it('should return O win TY 1', () => {
      let result = findWin([
        ['O', 'O', 'X'],
        ['O', 'O', 'X'],
        ['X', 'X', 'O']
      ]);
      expect(result).equal('O Win');
    });

    it('should return O win TY 2', () => {
      let result = findWin([
        ['X', 'O', 'O'],
        ['X', 'O', 'X'],
        ['O', 'X', 'O']
      ]);
      expect(result).equal('O Win');
    });
    it('should return Invalid input', () => {
      let result = findWin([
        ['X', 'X', 'O'],
        ['X', 'O', 'X'],
        ['O', 'X', 'X']
      ]);
      expect(result).equal('Invalid input');
    });

    it('should return Invalid input', () => {
      let result = findWin([
        [' ', ' ', ' '],
        ['X', 'X', 'X'],
        ['O', 'O', 'O']
      ]);
      expect(result).equal('Invalid input');
    });

    it('should return Invalid input', () => {
      let result = findWin([
        ['X', 'X', 'O'],
        ['X', 'X', 'O'],
        ['X', 'X', 'O']
      ]);
      expect(result).equal('Invalid input');
    });

    it('should return Invalid input', () => {
      let result = findWin([
        ['X', 'X', 'X'],
        ['X', 'X', 'X'],
        ['X', 'X', 'X']
      ]);
      expect(result).equal('Invalid input');
    });



  });
});
