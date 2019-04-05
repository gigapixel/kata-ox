import { describe, it } from 'mocha';
import { expect } from 'chai';

import { ox } from '../src/ox';

const _ = '_';
const o = 'o';
const x = 'x';

describe('ox.js', () => {
  describe('ox()', () => {
    it('should say Winner is o at row 1', () => {
      let result = ox([
        [ o, o, o ],
        [ x, x, _ ],
        [ _, _, _ ],
      ]);
      expect(result).equal('Winner is o');
    });
    it('should say Winner is o at row 2', () => {
      let result = ox([
        [ x, x, _ ],
        [ o, o, o ],
        [ _, _, _ ],
      ]);
      expect(result).equal('Winner is o');
    });
    it('should say Winner is o at row 3', () => {
      let result = ox([
        [ _, _, _ ],
        [ x, x, _ ],
        [ o, o, o ],
      ]);
      expect(result).equal('Winner is o');
    });

    it('should say Winner is o at col 1', () => {
      let result = ox([
        [ o, _, _ ],
        [ o, x, _ ],
        [ o, x, _ ],
      ]);
      expect(result).equal('Winner is o');
    });
    it('should say Winner is o at col 2', () => {
      let result = ox([
        [ _, o, _ ],
        [ x, o, _ ],
        [ x, o, _ ],
      ]);
      expect(result).equal('Winner is o');
    });
    it('should say Winner is o at col 3', () => {
      let result = ox([
        [ _, _, o ],
        [ _, x, o ],
        [ _, x, o ],
      ]);
      expect(result).equal('Winner is o');
    });

    it('should say Winner is o on ty 1', () => {
      let result = ox([
        [ _, _, o ],
        [ _, o, x ],
        [ o, x, x ],
      ]);
      expect(result).equal('Winner is o');
    });
    it('should say Winner is o on ty 2', () => {
      let result = ox([
        [ o, _, o ],
        [ x, o, x ],
        [ x, x, o ],
      ]);
      expect(result).equal('Winner is o');
    });

    it('should say Winner is x at row 1', () => {
      let result = ox([
        [ x, x, x ],
        [ o, o, _ ],
        [ _, _, _ ],
      ]);
      expect(result).equal('Winner is x');
    });
    it('should say Winner is x at row 2', () => {
      let result = ox([
        [ o, o, _ ],
        [ x, x, x ],
        [ _, _, _ ],
      ]);
      expect(result).equal('Winner is x');
    });
    it('should say Winner is x at row 3', () => {
      let result = ox([
        [ _, _, _ ],
        [ o, o, _ ],
        [ x, x, x ],
      ]);
      expect(result).equal('Winner is x');
    });

    it('should say Winner is x at col 1', () => {
      let result = ox([
        [ x, _, _ ],
        [ x, o, _ ],
        [ x, o, _ ],
      ]);
      expect(result).equal('Winner is x');
    });
    it('should say Winner is x at col 2', () => {
      let result = ox([
        [ o, x, _ ],
        [ o, x, _ ],
        [ _, x, _ ],
      ]);
      expect(result).equal('Winner is x');
    });
    it('should say Winner is x at col 3', () => {
      let result = ox([
        [ _, _, x ],
        [ _, o, x ],
        [ _, o, x ],
      ]);
      expect(result).equal('Winner is x');
    });

    it('should say Winner is x at ty 1', () => {
      let result = ox([
        [ _, _, x ],
        [ _, x, o ],
        [ x, o, o ],
      ]);
      expect(result).equal('Winner is x');
    });
    it('should say Winner is x at ty 1', () => {
      let result = ox([
        [ x, _, x ],
        [ o, x, o ],
        [ o, o, x ],
      ]);
      expect(result).equal('Winner is x');
    });

    it('should say In game with some filled', () => {
      let result = ox([
        [ x, _, x ],
        [ o, o, _ ],
        [ o, o, x ],
      ]);
      expect(result).equal('In game');
    });
    it('should say In game without any filled', () => {
      let result = ox([
        [ _, _, _ ],
        [ _, _, _ ],
        [ _, _, _ ],
      ]);
      expect(result).equal('In game');
    });

    it('should say Draw when no winner', () => {
      let result = ox([
        [ x, o, x ],
        [ o, x, o ],
        [ o, x, o ],
      ]);
      expect(result).equal('Draw');
    });

    it('should say Invalid input when x/o diff > 1', () => {
      let result = ox([
        [ x, _, _ ],
        [ o, o, o ],
        [ _, _, _ ],
      ]);
      expect(result).equal('Invalid input');
    });
    it('should say Invalid input when winner > 1', () => {
      let result = ox([
        [ x, x, x ],
        [ o, o, o ],
        [ _, _, _ ],
      ]);
      expect(result).equal('Invalid input');
    });
    it('should say Invalid input when winner count < looser count', () => {
      let result = ox([
        [ x, x, x ],
        [ o, o, _ ],
        [ o, o, _ ],
      ]);
      expect(result).equal('Invalid input');
    });
  });
});
