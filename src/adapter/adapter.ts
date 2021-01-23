//target (our payment object interface)
interface IPayment {
  id: string;
  total: number;
  SubmitPayment: Function;
}
//our payment class
class Payment implements IPayment {
  constructor(public id: string, public total: number){
  }
  public SubmitPayment() {
      console.log(`Proprietary Payment Amount: ${this.total} - ID: ${this.id}`);
  }
}
//adaptee (3rd party lib)
interface IThirdPartyPayment {
  id: number; //abstract away the type in the adapter
  amount: number; //abstract away the field name in the adapter
  SendPayment: Function; //abstract away in the adapter
}

class ThirdPartyPayment implements IThirdPartyPayment {
  constructor(public id: number, public amount: number){
  }
  public SendPayment() {
      console.log(`3rd Party Payment Amount: ${this.amount} - ID: ${this.id}`);
  }
}
enum PaymentType {
  ThirdParty,
  Proprietary
}
//adapter
class PaymentAdapter implements IPayment {
//As I see constructor takes attributes which have in the both components 
  constructor(public id: string, public total: number, public type: PaymentType) {
  }

  public SubmitPayment() {
      if (this.type === PaymentType.ThirdParty) {
          const amount = this.total;
          const id = parseInt(this.id);
          const payment = new ThirdPartyPayment(id, amount);
          payment.SendPayment();
      } else if (this.type === PaymentType.Proprietary) {
          const id = this.id.toString();
          const payment = new Payment(id, this.total);
          payment.SubmitPayment();
      } else {
          throw new Error("Invalid Payment Type");
      }
  }
}
//client

const payment:IPayment = new PaymentAdapter("012", 120, PaymentType.Proprietary);
payment.SubmitPayment();

const payment2:IPayment = new PaymentAdapter("013", 180, PaymentType.ThirdParty);
payment2.SubmitPayment();


/*
In the bottom is the origin version of adapter
So in the above we use minimization of code of the class with constructor
But we need to add modificators (public, private or protected)

https://gist.github.com/joelpalmer/2baa8d3f2312be80fc074eeeb53b1ce7

//target (our payment object interface)
interface IPayment {
    id: string;
    total: number;
    SubmitPayment: Function;
}
//our payment class
class Payment implements IPayment {
    public id: string;
    public total: number;
    constructor(id: string, total: number){
        this.id = id;
        this.total = total;
    }
    public SubmitPayment() {
        console.log(`Proprietary Payment Amount: ${this.total} - ID: ${this.id}`);
    }
}
//adaptee (3rd party lib)
interface IThirdPartyPayment {
    id: number; //abstract away the type in the adapter
    amount: number; //abstract away the field name in the adapter
    SendPayment: Function; //abstract away in the adapter
}
class ThirdPartyPayment implements IThirdPartyPayment {
    public id: number; 
    public amount: number; 
    constructor(id: number, amount: number){
        this.id = id;
        this.amount = amount;
    }
    public SendPayment() {
        console.log(`3rd Party Payment Amount: ${this.amount} - ID: ${this.id}`);
    }
}
enum PaymentType {
    ThirdParty,
    Proprietary
}
//adapter
class PaymentAdapter implements IPayment {
    public id: string; 
    public total: number;
    public type: PaymentType;
    constructor(id: string, total: number, type: PaymentType) {
        this.type = type;
        this.id = id;
        this.total = total;
    }
    public SubmitPayment() {
        if (this.type === PaymentType.ThirdParty) {
            const amount = this.total;
            const id = parseInt(this.id);
            const payment = new ThirdPartyPayment(id, amount);
            payment.SendPayment();
        } else if (this.type === PaymentType.Proprietary) {
            const id = this.id.toString();
            const payment = new Payment(id, this.total);
            payment.SubmitPayment();
        } else {
            throw new Error("Invalid Payment Type");
        }
    }
}
//client

const payment:IPayment = new PaymentAdapter("123", 47.99, PaymentType.Proprietary);
payment.SubmitPayment();

const payment2:IPayment = new PaymentAdapter("543", 99.99, PaymentType.ThirdParty);
payment2.SubmitPayment();
*/