// Creating Class //
class Account {
  id: number;
  owner: string;
  balance: number;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Invalid amount!");
    } else {
      this.balance += amount;
    }
  }
}

// Creating Objects //
let account = new Account(1, "Mosh", 0);
account.deposit(100);
console.log(account.balance);
console.log(account);
console.log(typeof account);
console.log(account instanceof Account);

// Union
// if (typeof someObj === "number") {}

// Read-Only, Optional Properties, and Access Control Keywords
class Account_ {
  readonly id: number; // This is Read-Only
  owner: string;
  private _balance: number;
  nickname?: string; // This is optional property

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this._balance = balance;
  }

  deposit(amount: number): void {
    // this.id = 0; // cannot assign this value because it's read-only property
    if (amount <= 0) {
      throw new Error("Invalid amount!");
    } else {
      // Record a transaction
      this._balance += amount;
    }
  }

  getBalance(): number {
    return this._balance;
  }
}

let account_ = new Account_(1, "Mosh", 77);
// account_.id = 0; // cannot assign this value because it's read-only property
console.log(account_.getBalance()); // This method is to get _balance value which is private parameter

// Parameter Properties, getters, and setters //
class _Account_ {
  nickname?: string; // This is optional property

  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {}

  deposit(amount: number): void {
    // this.id = 0; // cannot assign this value because it's read-only property
    if (amount <= 0) {
      throw new Error("Invalid amount!");
    } else {
      // Record a transaction
      this._balance += amount;
    }
  }

  // getters
  get balance(): number {
    return this._balance;
  }

  // setters
  set balance(value: number) {
    if (value < 0) {
      throw new Error("Invalid value");
    } else {
      this._balance = value;
    }
  }
}

let _account_ = new _Account_(1, "Mosh", 0);
console.log(_account_.balance);

_account_.balance = 777;
console.log(_account_.balance);

// Index Signatures //
class SeatAssignment {
  [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats.A1 = "Mosh";
seats.A2 = "Valdryan";

console.log(seats);

// Static Members //
class Ride {
  private static _activeRides: number = 0;

  start() {
    Ride._activeRides++;
  }
  stop() {
    Ride._activeRides--;
  }

  static get activeRides() {
    return Ride._activeRides;
  }
}

let ride1 = new Ride();
ride1.start();

let ride2 = new Ride();
ride2.start();

console.log(Ride.activeRides);

// Inheritance //
class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  walk(): string {
    return "Walking";
  }
}

class Student extends Person {
  constructor(
    public studentId: number,
    override firstName: string,
    override lastName: string
  ) {
    super(firstName, lastName);
  }

  takeTest(): string {
    return "Taking a test";
  }
}

let student = new Student(1, "Valdryan", "Ivandito");
console.log(student);
console.log(student.takeTest());
console.log(student.walk());

// Method Overriding //
class Teacher extends Person {
  override get fullName() {
    return "Professor " + super.fullName;
  }
}

let teacher = new Teacher("John", "Smith");
console.log(teacher.fullName);

// Polymorphism //

class Principal extends Person {
  override get fullName() {
    return "Principal " + super.fullName;
  }
}

printNames([
  new Student(1, "Valdryan", "Ivandito"),
  new Teacher("Mosh", "Hamedani"),
  new Principal("Mary", "Smith"),
]);

function printNames(people: Person[]) {
  for (let person of people) {
    console.log(person.fullName);
  }
}

// Abstract Classes and Methods
abstract class Shape {
  constructor(public color: string) {}

  abstract render(): void;
}

class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }

  override render(): void {
    console.log("Rendering a circle");
  }
}

let shape = new Circle(7, "red");
shape.render();

// Interfaces //

// Class Method
// abstract class Calendar {
//   constructor(public name: string) {}

//   abstract addEvent(): void;
//   abstract removeEvent(): void;
// }

// Instead of using the class method above, it is better to use the interfaces method
interface Calendar {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}

// Inheritance at Interface Method
interface CloudCalendar extends Calendar {
  sync(): void;
}

class GoogleCalendar implements Calendar {
  constructor(public name: string) {}

  addEvent(): void {
    throw new Error("Method no implemented.");
  }

  removeEvent(): void {
    throw new Error("Method no implemented.");
  }
}
