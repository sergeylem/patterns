export class History {
  private operations: string[];

  constructor() {
    this.operations = [];
  }

  public getHistory(email: string):string[] {
    return this.operations;
  }

  public addHistory(email: string, opeation: string){
    this.operations.push(opeation); 
  }
}