import { ICommand } from "./interface";
import { Receiver } from "./receiver";
import { Invoker } from "./invoker";

class ConcreteCommand1 implements ICommand {
  private receiver: Receiver;
  constructor(receiver: Receiver) {
      this.receiver = receiver;
  }
  public execute(): void {
      console.log("`execute` method of ConcreteCommand1 is being called!");
      this.receiver.action();
  }
}

class ConcreteCommand2 implements ICommand {
  private receiver: Receiver;
  constructor(receiver: Receiver) {
      this.receiver = receiver;
  }
  public execute(): void {
      console.log("`execute` method of ConcreteCommand2 is being called!");
      this.receiver.action();
  }
}

const receiver: Receiver = new Receiver();
const command1: ICommand  = new ConcreteCommand1(receiver);
const command2: ICommand  = new ConcreteCommand2(receiver);
const invoker : Invoker  = new Invoker();

invoker.storeAndExecute(command1);
invoker.storeAndExecute(command2);
