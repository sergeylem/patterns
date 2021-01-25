// https://refactoring.guru/ru/design-patterns/command/typescript/example

interface ICommand {
  execute(): void;
}

class SimpleCommand implements ICommand {
  private payload: string;

  constructor(payload: string) {
      this.payload = payload;
  }

  public execute(): void {
      console.log(`SimpleCommand: See, I can do simple things like printing (${this.payload})`);
  }
}

// Some commands can delegate more complex operations to other objects, called "receivers

class ComplexCommand implements ICommand {
  private receiver: Receiver;

// Context data, required for launching the receiver's methods.
  private a: string;
  private b: string;

// Complex commands can accept one or several receiver objects along with
// any context data via the constructor.

   constructor(receiver: Receiver, a: string, b: string) {
      this.receiver = receiver;
      this.a = a;
      this.b = b;
  }

// Commands can delegate to any methods of a receiver.

  public execute(): void {
      console.log('ComplexCommand: Complex stuff should be done by a receiver object.');
      this.receiver.doSomething(this.a);
      this.receiver.doSomethingElse(this.b);
  }
}

/**
* The Receiver classes contain some important business logic. They know how to
* perform all kinds of operations, associated with carrying out a request. In
* fact, any class may serve as a Receiver.
*/
class Receiver {
  public doSomething(a: string): void {
      console.log(`Receiver: Working on (${a}.)`);
  }

  public doSomethingElse(b: string): void {
      console.log(`Receiver: Also working on (${b}.)`);
  }
}

// The Invoker is associated with one or several commands. It sends a request to the command.

class Invoker {
  private onStart: ICommand;
  private onFinish: ICommand;

  constructor(onStart: ICommand, onFinish: ICommand) {
    this.onStart = onStart;
    this.onFinish = onFinish
  }

  public setOnStart(command: ICommand): void {
      this.onStart = command;
  }

  public setOnFinish(command: ICommand): void {
      this.onFinish = command;
  }

// The Invoker does not depend on concrete command or receiver classes. The
// Invoker passes a request to a receiver indirectly, by executing a command.

  public doSomethingImportant(): void {
      console.log('Invoker: Does anybody want something done before I begin?');
        this.onStart.execute();

      console.log('Invoker: ...doing something really important...');

      console.log('Invoker: Does anybody want something done after I finish?');
        this.onFinish.execute();
  }
}

// The client code can parameterize an invoker with any commands.
// The line below with 2 new SimpleCommand('') is nessasary because of --strictPropertyInitialization in tsconfig.json 
// In the original version was const invoker = new Invoker()
const invoker = new Invoker(new SimpleCommand(''), new SimpleCommand(''));
invoker.setOnStart(new SimpleCommand('Say Hi!'));
const receiver = new Receiver();
invoker.setOnFinish(new ComplexCommand(receiver, 'Send email', 'Save report'));

invoker.doSomethingImportant();