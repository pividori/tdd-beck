import { Dollar } from './dollar';

describe('Dollar', () => {

  it('should be equal with another dollar with the same amount', () => {
    expect(new Dollar(5)).toEqual(new Dollar(5));
    expect(new Dollar(5)).not.toEqual(new Dollar(6));
  });
});
