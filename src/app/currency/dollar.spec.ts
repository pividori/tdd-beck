import { Dollar } from './dollar';
import { Euro } from './euro';

describe('Dollar', () => {

  it('should be equal with another currency with the same amount', () => {
    expect(new Dollar(5)).toEqual(new Dollar(5));
    expect(new Dollar(5)).not.toEqual(new Dollar(6));
    expect(new Euro(5)).toEqual(new Euro(5));
    expect(new Euro(5)).not.toEqual(new Euro(6));
  });
});
