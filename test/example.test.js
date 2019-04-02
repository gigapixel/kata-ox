import { describe, it } from 'mocha';
import { expect } from 'chai';

import { main } from '../src/example';

describe('example.js', () => {
  describe('main()', () => {
    it('should return in game', () => {
      const input = [
        ["X", "O", "O"],
        ["X", "", "X"],
        ["O", "O", ""]
      ];
      let result = main(input);
      expect(result).equal('in game');
    });

    it('should return O WIN vertical 1', () => {
      const input = [
        ["O", "O", "O"],
        ["X", "X", "O"],
        ["X", "O", "X"],
      ];
      let result = main(input);
      expect(result).equal('O WIN');
    });

    it('should return O WIN vertical 2', () => {
      const input = [
        ["X", "X", "O"],
        ["O", "O", "O"],
        ["X", "O", "X"],
      ];
      let result = main(input);
      expect(result).equal('O WIN');
    });

    it('should return O WIN vertical 3', () => {
      const input = [
        ["X", "X", "O"],
        ["X", "O", "X"],
        ["O", "O", "O"],
      ];
      let result = main(input);
      expect(result).equal('O WIN');
    });

    it('should return O WIN diagonal 1', () => {
      const input = [
        ["O", "O", "X"],
        ["X", "O", "O"],
        ["X", "X", "O"]
      ];
      let result = main(input);
      expect(result).equal('O WIN');
    });

    it('should return O WIN diagonal 2', () => {
      const input = [
        ["X", "O", "O"],
        ["X", "O", "O"],
        ["O", "X", "X"]
      ];
      let result = main(input);
      expect(result).equal('O WIN');
    });


    it('should return O WIN horizontal 1', () => {
      const input = [
        ["O", "X", "X"],
        ["O", "X", "O"],
        ["O", "O", "X"]
      ];
      let result = main(input);
      expect(result).equal('O WIN');
    });

    it('should return O WIN horizontal 2', () => {
      const input = [
        ["X", "O", "X"],
        ["X", "O", "O"],
        ["O", "O", "X"]
      ];
      let result = main(input);
      expect(result).equal('O WIN');
    });

    it('should return O WIN horizontal 3', () => {
      const input = [
        ["X", "O", "O"],
        ["O", "X", "O"],
        ["X", "X", "O"]
      ];
      let result = main(input);
      expect(result).equal('O WIN');
    });


    it('should return X WIN vertical 1', () => {
      const input = [
        ["X", "X", "X"],
        ["X", "O", "O"],
        ["O", "O", "X"]
      ];
      let result = main(input);
      expect(result).equal('X WIN');
    });

    it('should return X WIN vertical 2', () => {
      const input = [
        ["X", "O", "O"],
        ["X", "X", "X"],
        ["O", "O", "X"]
      ];
      let result = main(input);
      expect(result).equal('X WIN');
    });

    it('should return X WIN vertical 3', () => {
      const input = [
        ["X", "O", "O"],
        ["O", "O", "X"]
        ["X", "X", "X"],
      ];
      let result = main(input);
      expect(result).equal('X WIN');
    });

    it('should return X WIN diagonal 1', () => {
      const input = [
        ["X", "O", "O"],
        ["O", "X", "X"],
        ["O", "X", "X"]
      ];
      let result = main(input);
      expect(result).equal('X WIN');
    });

    it('should return X WIN diagonal 2', () => {
      const input = [
        ["O", "O", "X"],
        ["O", "X", "X"],
        ["X", "X", "O"]
      ];
      let result = main(input);
      expect(result).equal('X WIN');
    });

    it('should return X WIN horizontal 1', () => {
      const input = [
        ["X", "O", "X"],
        ["X", "X", "O"],
        ["X", "O", "X"]
      ];
      let result = main(input);
      expect(result).equal('X WIN');
    });

    it('should return X WIN horizontal 2', () => {
      const input = [
        ["O", "X", "X"],
        ["O", "X", "O"],
        ["X", "X", "O"]
      ];
      let result = main(input);
      expect(result).equal('X WIN');
    });

    it('should return X WIN horizontal 3', () => {
      const input = [
        ["O", "X", "X"],
        ["O", "O", "X"],
        ["X", "O", "X"]
      ];
      let result = main(input);
      expect(result).equal('X WIN');
    });

    // it('should return deals', () => {
    //   const input = [
    //     ["X", "O", "O"],
    //     ["O", "O", "X"],
    //     ["O", "X", "X"]
    //   ];
    //   let result = main(input);
    //   expect(result).equal('deals');
    // });
  });
});