class Money {
  protected amount = 1;
  protected currency;
  constructor(amount?: number, currency?: string) {
    this.amount = amount || this.amount;
    this.currency = currency || '';
  }
  static dollar(amount?: number): Money {
    return new Money(amount, 'USD');
  }
  static franc(amount?: number): Money {
    return new Money(amount, 'CHF');
  }
  public getAmount(): number {
    return this.amount;
  }
  public times(multiplier: number, currency: string): Money {
    return new Money(this.amount * multiplier, currency);
  }
  public getCurrency(): string {
    return this.currency;
  }
  public equals(money: Money): boolean {
    return (
      this.amount === money.getAmount() && money.getCurrency() === this.currency
    );
  }
  public toString(): string {
    return this.amount + ' ' + this.currency;
  }
}

describe('dollar test', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('', () => {
    it('', () => {
      expect(new Money().getAmount()).toBe(1);
    });
  });

  context('', () => {
    it('', () => {
      expect(new Money(3).getAmount()).toBe(3);
    });
  });
  // ✔️ d
  context('when compare', () => {
    it('should return correct boolean', () => {
      expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
      expect(Money.dollar(5).equals(Money.franc(5))).toBe(false);
      expect(Money.franc(5).equals(Money.dollar(6))).toBe(false);
      expect(Money.franc(6).equals(Money.dollar(5))).toBe(false);
    });
  });
  context('when compare currency', () => {
    it('should return correct boolean', () => {
      expect('USD').toEqual(Money.dollar(1).getCurrency());
      expect('CHF').toEqual(Money.franc(1).getCurrency());
    });
  });
});
