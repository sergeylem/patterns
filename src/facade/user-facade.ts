import { User } from "./user";
import { Balance } from "./balance";
import { History } from "./history";

class UserFacade {
  protected user: User;
  protected balance: Balance;
  protected history: History;

  constructor(user: User, balance: Balance, history: History) {
    this.user = user;
    this.balance = balance;
    this.history = history;
  }

  public addPayment(email: string, money: number, operation: string): void {
    this.user.getUserByEmail(email);  //Get user info 
    this.balance.add(email, money);   //Add money to balance
    this.history.addHistory(email, operation); //Add type of the operation
  }

  public removePayment(email: string, money: number, operation: string): void {
    this.user.getUserByEmail(email);   //Get user info 
    this.balance.remove(email, money);  //Remove money from balance
    this.history.addHistory(email, operation); //Add type of the operation
  }
}


const user = new User();
const balance = new Balance();
const history = new History();

const userFacade = new UserFacade(user, balance, history);

userFacade.addPayment("max@gmail.com", 100, "add");
userFacade.removePayment("max@gmail.com", 20, "remove");

