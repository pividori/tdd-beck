import { Dollar } from './dollar';

describe('Dollar', () => {

  it('should be equal with another dollar with the same amount', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
    expect(new Dollar(10).equals(new Dollar(10))).toBe(true);
    expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
  });
});
