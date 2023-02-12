import { expect } from "chai";
import { Money, Currency } from "../src/Money";
import "mocha";

describe("Money", function () {
  it("should instantiate with correct values", function () {
    const amount = 100.0;
    const currency = Currency.BRL;

    const money = new Money({ amount: amount, currency: currency });

    expect(money.amount).to.equal(amount);
    expect(money.currency).to.equal(currency);
  });
  it("should return formatted value with correct locale and two decimal digits", function () {
    const amount = 1000;
    const currencies = [Currency.EUR, Currency.GBP];
    currencies.forEach((currency) => {
      const locale = Currency.locale(currency);
      const formatter = new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      const expectedFormat = formatter.format(amount).normalize("NFKD");

      const money = new Money({ amount, currency });

      expect(money.formattedValue).to.equal(expectedFormat);
    });
  });
  it("should return formatted value with two decimal digits without rounding", function () {
    const amount = 100.012345;
    const currency = Currency.BRL;
    const expectedAmount = "R$ 100,01";

    const money = new Money({ amount: amount, currency: currency });

    expect(money.formattedValue).to.equal(expectedAmount);
  });
});
