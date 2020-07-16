import { Currency } from './currency';

export class Dollar extends Currency {

  constructor(amount: number) {
    super(amount)
  }

  times(multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier);
  }
}
