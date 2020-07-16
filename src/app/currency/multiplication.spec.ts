import { Dollar } from './dollar';
import { Euro } from './euro';

describe('Currency multiplication', () => {

  describe('when performing a scalar integer multiplication', () => {

    it('should return the correct result', () => {
      const fiveDollars: Dollar = new Dollar(5);

      expect(fiveDollars.times(2)).toEqual(new Dollar(10));
      expect(fiveDollars.times(3)).toEqual(new Dollar(15));
    });

    it('should return the correct result with francs', () => {
      const fiveFranc: Euro = new Euro(5);

      expect(fiveFranc.times(2)).toEqual(new Euro(10));
      expect(fiveFranc.times(3)).toEqual(new Euro(15));
    });
  });
});
