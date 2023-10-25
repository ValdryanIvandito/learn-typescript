"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Invalid amount!");
        }
        else {
            this.balance += amount;
        }
    }
}
let account = new Account(1, "Mosh", 0);
account.deposit(100);
console.log(account.balance);
console.log(account);
console.log(typeof account);
console.log(account instanceof Account);
class Account_ {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Invalid amount!");
        }
        else {
            this._balance += amount;
        }
    }
    getBalance() {
        return this._balance;
    }
}
let account_ = new Account_(1, "Mosh", 77);
console.log(account_.getBalance());
class _Account_ {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Invalid amount!");
        }
        else {
            this._balance += amount;
        }
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value < 0) {
            throw new Error("Invalid value");
        }
        else {
            this._balance = value;
        }
    }
}
let _account_ = new _Account_(1, "Mosh", 0);
console.log(_account_.balance);
_account_.balance = 777;
console.log(_account_.balance);
class SeatAssignment {
}
let seats = new SeatAssignment();
seats.A1 = "Mosh";
seats.A2 = "Valdryan";
console.log(seats);
class Ride {
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
Ride._activeRides = 0;
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
console.log(Ride.activeRides);
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
    walk() {
        return "Walking";
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    takeTest() {
        return "Taking a test";
    }
}
let student = new Student(1, "Valdryan", "Ivandito");
console.log(student);
console.log(student.takeTest());
console.log(student.walk());
class Teacher extends Person {
    get fullName() {
        return "Professor " + super.fullName;
    }
}
let teacher = new Teacher("John", "Smith");
console.log(teacher.fullName);
class Principal extends Person {
    get fullName() {
        return "Principal " + super.fullName;
    }
}
printNames([
    new Student(1, "Valdryan", "Ivandito"),
    new Teacher("Mosh", "Hamedani"),
    new Principal("Mary", "Smith"),
]);
function printNames(people) {
    for (let person of people) {
        console.log(person.fullName);
    }
}
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    render() {
        console.log("Rendering a circle");
    }
}
let shape = new Circle(7, "red");
shape.render();
class Calendar {
    constructor(name) {
        this.name = name;
    }
}
//# sourceMappingURL=index.js.map