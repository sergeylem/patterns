import { User } from "./user";
import { Balans } from "./balans";
import { History } from "./history";

class Facade {
  protected user: User;
  protected balans: Balans;
  protected history: History;

  constructor(user: User, balans: Balans, history: History) {
    this.user = user;
    this.balans = balans;
    this.history = history;
  }

  public addPayment(email: string, money: number, operation: string): void {
    this.user.getUserByEmail(email);
    this.balans.add(email, money);
    this.history.addHistory(email, operation);
  }

  public removePayment(email: string, money: number, operation: string): void {
    this.user.getUserByEmail(email);
    this.balans.remove(email, money);
    this.history.addHistory(email, operation);
  }
}

function clientCode(facade: Facade) {
  facade.addPayment("max@gmail.com", 100, "add");
  facade.removePayment("max@gmail.com", 20, "remove");
}

const user = new User();
const balans = new Balans();
const history = new History();

const facade = new Facade(user, balans, history);

clientCode(facade);