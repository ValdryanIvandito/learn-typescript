// Type Aliases //
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "Mosh",
  retire: (date: Date) => {
    console.log(date);
  },
};

// Union Types //
function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}

console.log(kgToLbs(10));
console.log(kgToLbs("10kg"));

// Intersection Types //
// Example-1
type _Person = {
  name: string;
  age: number;
};

type _Employee = {
  employeeId: number;
  role: string;
};

type EmployeePerson = _Person & _Employee;

const employeePerson: EmployeePerson = {
  name: "John",
  age: 30,
  employeeId: 1122,
  role: "Manager",
};

// Example-2
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// Literal Types //
// Example-1
type FibonacciSeries10 = 1 | 2 | 3 | 5 | 8 | 13 | 21;
let fibonacciSeries: FibonacciSeries10 = 21;

// Example-2
type Metric = "cm" | "inch";

// Nullable Types //
function greet(name: string | null | undefined) {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log("What is your name ?");
  }
}
greet(undefined);
greet("Mosh");

// Optional Chaining //
type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);
// Optional property access operator
console.log(customer?.birthday?.getFullYear());

// Optional element access operator
// customer?.[0]

// Optional Call
let log: any = null;
log?.("a");

// The Nullish Coaelscing Operator //
let speed: number | null = null;
let ride = {
  // Falsy value (undefined, null, '', false, 0)

  // Without Nullish coaelescing operator
  // speed: speed !== null ? speed : 30,

  // With Nullish coaelescing operator
  speed: speed ?? 30,
};
console.log(ride.speed);

// Type Assertions //
/*
let phone = <HTMLInputElement>document.getElementById("phone");
// HTMLElement
// HTMLInputElement
phone.value;
*/

// The Unknown Type //
/*
const render = (document: unknown) => {
  // Narrowing
  if (document instanceof WordDocument) {
    document.toUpperCase();
  }
  document.move();
  document.fly();
  document.whateverWeWant();
}
*/

// The Never Type //
function reject(message: string): never {
  throw new Error(message);
}

function processEvents(): never {
  while (true) {
    // Read a message from a queue
  }
}

// processEvents();
reject("...");
// console.log("HelloWorld!"); // unreacable code detected
