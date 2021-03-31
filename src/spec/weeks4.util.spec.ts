class Money {
  protected amount = 1;
  constructor(amount?: number) {
    this.amount = amount || this.amount;
  }
  static dollar(amount: number): Dollar {
    return new Dollar(amount);
  }
  static franc(amount: number): Franc {
    return new Franc(amount);
  }
  getAmount(): number {
    return this.amount;
  }
  times(multiplier: number): void {
    this.amount *= multiplier;
  }
}

class Dollar extends Money {
  public equals(dollar: Money): boolean {
    return (
      this.amount === dollar.getAmount() && this instanceof dollar.constructor
    );
  }
}

class Franc extends Money {
  public equals(franc: any): boolean {
    return (
      this.amount === (franc as Money).getAmount() &&
      this.constructor === franc.constructor
    );
  }
}

describe('dollar test', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('', () => {
    it('', () => {
      expect(new Dollar().getAmount()).toBe(1);
    });
  });

  context('', () => {
    it('', () => {
      expect(new Dollar(3).getAmount()).toBe(3);
    });
  });
  // ✔️ d
  context("when execute dollar(5)'s times(2) method", () => {
    it('should return 10', () => {
      const dollar = new Dollar(5);
      dollar.times(2);
      expect(dollar.getAmount()).toBe(10);
    });
  });
  context("when execute franc(5)'s times(2) method", () => {
    it('should return 10', () => {
      const franc = new Franc(5);
      franc.times(2);
      expect(franc.getAmount()).toBe(10);
    });
  });
  context('when execute dollar(5) compare with dollar(5)', () => {
    it('should return true', () => {
      expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
    });
  });
  context('when execute dollar(5) compare with franc(5)', () => {
    it('should return true', () => {
      expect(Money.dollar(5).equals(Money.franc(5))).toBe(false);
    });
  });
  context('when execute franc(5) compare with dollar(6)', () => {
    it('should return false', () => {
      expect(Money.franc(5).equals(Money.dollar(6))).toBe(false);
    });
  });
  context('when execute franc(6) compare with dollar(5)', () => {
    it('should return false', () => {
      expect(Money.franc(6).equals(Money.dollar(5))).toBe(false);
    });
  });
});
