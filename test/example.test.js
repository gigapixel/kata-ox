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
    it('should return O WIN Horizontal', () => {
      const input = [
        ["O", "O", "O"],
        ["X", "X", "O"],
        ["X", "O", "X"]
      ];
      let result = main(input);
      expect(result).equal('O WIN');
    });
    it('should return O WIN Vertical', () => {
      const input = [
        ["O", "O", "X"],
        ["O", "X", "O"],
        ["O", "O", "X"]
      ];
      let result = main(input);
      expect(result).equal('O WIN');
    });

    it('should return O WIN Diagonal', () => {
      const input = [
        ["O", "X", "X"],
        ["X", "O", "O"],
        ["O", "X", "O"]
      ];
      let result = main(input);
      expect(result).equal('O WIN');
    });



    it('should return X WIN Horizontal', () => {
      const input = [
        ["X", "O", "O"],
        ["X", "X", "X"],
        ["O", "O", "O"]
      ];
      let result = main(input);
      expect(result).equal('X WIN');
    });
    it('should return X WIN Vertical', () => {
      const input = [
        ["X", "O", "O"],
        ["X", "X", "O"],
        ["X", "O", "X"]
      ];
      let result = main(input);
      expect(result).equal('X WIN');
    });
    it('should return X WIN Diagonal', () => {
      const input = [
        ["X", "O", "O"],
        ["X", "X", "X"],
        ["O", "O", "X"]
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