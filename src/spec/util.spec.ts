/**
 * TDD
 *  1.
 *  2.
 *  3.
 *  4.
 *
 * */

/**
 * todo
 *
 * */

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
  multiply(multiplier: number): void {
    this.amount *= multiplier;
  }
}

class Dollar extends Money {
  public equals(dollar: Money): boolean {
    return this.amount === dollar.getAmount() && typeof this === typeof dollar;
  }
}

class Franc extends Money {
  public equals(franc: Franc): boolean {
    return this.amount === franc.amount && typeof this === typeof franc;
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
  context("when execute dollar(5)'s multiply(2) method", () => {
    it('should return 10', () => {
      const dollar = new Dollar(5);
      dollar.multiply(2);
      expect(dollar.getAmount()).toBe(10);
    });
  });
  context("when execute franc(5)'s multiply(2) method", () => {
    it('should return 10', () => {
      const franc = new Franc(5);
      franc.multiply(2);
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
      expect(Money.dollar(5).equals(Money.franc(5))).toBe(true);
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
