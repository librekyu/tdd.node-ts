class Dollar {
  private amount = 1;
  constructor(amount?: number) {
    this.amount = amount || this.amount;
  }
  public multiply(multiplier: number): void {
    this.amount *= multiplier;
  }
  public getAmount(): number {
    return this.amount;
  }
}

describe('dollar test', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('', () => {
    it('', () => {
      expect(new Dollar().getAmount()).toEqual(1);
    });
  });

  context('', () => {
    it('', () => {
      expect(new Dollar(3).getAmount()).toEqual(3);
    });
  });

  context("when execute dollar(5)'s multiply(2) method", () => {
    it('should return 10', () => {
      const dollar = new Dollar(5);
      dollar.multiply(2);
      expect(dollar.getAmount()).toEqual(10);
    });
  });
});
