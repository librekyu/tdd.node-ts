class Dollar {
  private amount = 1;
  constructor(amount?: number) {
    this.amount = amount || this.amount;
  }
  public getAmount(): number {
    return this.amount;
  }
  public multiply(multiplier: number): void {
    this.amount *= multiplier;
  }
  public equals(dollar: Dollar): boolean {
    return this.amount === dollar.amount;
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
      expect(dollar.getAmount()).toEqual(10);
    });
  });
  context('', () => {
    it('', () => {
      const dollar = new Dollar(5);
    });
  });
});
