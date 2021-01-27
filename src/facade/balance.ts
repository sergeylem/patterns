import { IAdd, IRemove } from "./interfaces";

export class Balance implements IAdd, IRemove {
  private balance: number = 0;

  constructor() { }

  // constructor(balance: number) {
  //   this.balance = balance;
  // }

  public add(email: string, m: number): number {
    console.log(`Here is implementation of add operation`);
    return this.balance += m;
  }

  public remove(email: string, m: number): number {
    console.log(`Here is implementation of remove operation`);
    return this.balance -= m;
  }

}