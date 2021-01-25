export class Invoker {
  private commands: ICommand[];
  constructor() {
      this.commands = [];
  }
  public storeAndExecute(cmd: ICommand) {
      this.commands.push(cmd);
//      console.log(this.commands)
      cmd.execute();
  }
}
