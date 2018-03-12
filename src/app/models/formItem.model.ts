import { Decimal } from "decimal.js";

export class FormItem {
  defaultValue: Decimal;
  value: Decimal;

  constructor(public id: string, public description: string,
    defaultValue: Decimal.Value, value?: Decimal.Value) {
    this.defaultValue = new Decimal(defaultValue)
    if (value) {
      this.value = new Decimal(value)
    } else {
      this.value = new Decimal(defaultValue)
    }
  }

  public modify(value: Decimal.Value) {
    return new FormItem(this.id, this.description, this.defaultValue,new Decimal(value));
  }
}