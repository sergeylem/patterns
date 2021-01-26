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
    console.log(`We are finding user by email:${email}`);
    // Suppose we found User
    return `user: ${this.name} email:${this.email} age:${this.age}`;
  }

}