import { IAdd, IRemove } from "./interfaces";

export class Balans implements IAdd, IRemove {
  private balans: number = 0;

  constructor() { }

  // constructor(balans: number) {
  //   this.balans = balans;
  // }

  public add(email: string, m: number): number {
    console.log(`Here is implementation of add operation`);
    return this.balans += m;
  }

  public remove(email: string, m: number): number {
    console.log(`Here is implementation of remove operation`);
    return this.balans -= m;
  }

}