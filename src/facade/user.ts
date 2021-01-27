export class User {
  private name: string = "";
  private email: string = "";
  private age: number = 0;

  constructor() {
  }
  
  // constructor(name: string, email: string, age: number) {
  //   this.name = name;
  //   this.email = email;
  //   this.age = age;
  // }
  
  public getUserByEmail(email: string):string {
// Suppose we have found User and return info of the user
    console.log(`The operation of the user: ${email}`);
    return `user: ${this.name} email:${this.email} age:${this.age}`;
  }

}