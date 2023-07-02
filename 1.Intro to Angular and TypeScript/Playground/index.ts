class User {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHello() {
    return `${this.name} says hi!`;
  }
}

const user = new User('pesho');

console.log(user.sayHello());
