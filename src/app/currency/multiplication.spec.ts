import { Dollar } from './dollar';

describe('Currency multiplication', () => {

  describe('when performing a scalar integer multiplication', () => {

    it('should return the correct result', () => {
      const fiveDollars: Dollar = new Dollar(5);

      let product: Dollar = fiveDollars.times(2)

      expect(product.amount).toEqual(10);

      product = fiveDollars.times(3)

      expect(product.amount).toEqual(15);
    });
  });
});
