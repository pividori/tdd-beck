import { Dollar } from './dollar';

describe('Currency multiplication', () => {

  describe('when performing a scalar integer multiplication', () => {

    it('should return the correct result', () => {
      const fiveDollars: Dollar = new Dollar(5);

      fiveDollars.times(2)

      expect(fiveDollars.amount).toEqual(10);
    });
  });
});
