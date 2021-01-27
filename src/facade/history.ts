export class History {
  private operations: string[];

  constructor() {
    this.operations = [];
  }

  public getHistory(email: string):string[] {
    return this.operations;
  }

  public addHistory(email: string, operation: string){
    console.log(`We have added "${operation}" operation into history`)
    this.operations.push(operation); 
  }
}