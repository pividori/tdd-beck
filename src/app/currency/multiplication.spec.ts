import { Dollar } from './dollar';

describe('Currency multiplication', () => {

  describe('when performing a scalar integer multiplication', () => {

    it('should return the correct result', () => {
      const fiveDollars: Dollar = new Dollar(5);

      expect(fiveDollars.times(2)).toEqual(new Dollar(10));
      expect(fiveDollars.times(3)).toEqual(new Dollar(15));
    });
  });
});
