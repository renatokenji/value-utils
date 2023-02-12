import { ValueObject } from "./ValueObject";

export class Currency {
  public static readonly BRL = "BRL";
  public static readonly USD = "USD";
  public static readonly EUR = "EUR";
  public static readonly GBP = "GBP";

  public static locale(currency: string): string {
    switch (currency) {
      case this.BRL:
        return "pt-BR";
      case this.USD:
        return "en-US";
      case this.EUR:
        return "de-DE";
      case this.GBP:
        return "en-GB";
      default:
        return "";
    }
  }
}

interface MoneyProps {
  amount: number;
  currency: string;
}

export class Money extends ValueObject<MoneyProps> {
  public readonly amount: number;
  public readonly currency: string;

  constructor(props: MoneyProps) {
    super(props);
    this.amount = props.amount;
    this.currency = props.currency;
  }

  public get formattedValue(): string {
    const formatted = new Intl.NumberFormat(Currency.locale(this.currency), {
      style: "currency",
      currency: this.currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(this.amount);
    return formatted.normalize("NFKD");
  }
}
