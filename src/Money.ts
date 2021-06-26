import { ValueObject } from "./ValueObject";

export enum Currency {
  BRL = "R$",
  USD = "$",
  EUR = "€",
  GBP = "£",
}

interface MoneyProps {
  amount: number;
  currency: Currency;
}

export class Money extends ValueObject<MoneyProps> {
  private amount: number;
  private currency: Currency;

  constructor(props: MoneyProps) {
    super(props);
    this.amount = props.amount;
    this.currency = props.currency;
  }
}
