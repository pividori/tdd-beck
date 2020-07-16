import { Currency } from './currency';

export class Euro extends Currency {

  constructor(amount: number) {
    super(amount)
  }

  times(multiplier: number): Euro {
    return new Euro(this.amount * multiplier);
  }
}
