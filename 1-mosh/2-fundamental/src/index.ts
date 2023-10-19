// With Annotate
let sales: number = 123_456_789;
let course: string = "Typescript";
let is_published: boolean = true;

// Without Annotate
let _sales = 123_456_789;
let _course = "Typescript";
let _is_published = true;

// Any Type
let level;
const message = (text: any) => {
  console.log(text);
};
message("HelloWord!");

// Array
let numbers: number[] = [1, 2, 3];
let _number: number[] = [];
_number[0] = 1;
_number[1] = 2;

// Tuples
// Notes: Tuples is useful when it has only two values
let user: [number, string] = [1, "Mosh"];

// Enum
// Notes: Must uses PascalCase
const enum Size {
  SmallSize = "S",
  MediumSize = "M",
  LargeSize = "L",
}
let mySize: Size = Size.MediumSize;
console.log(mySize);


// Notes: In order to annotate at function we must activate noUnusedLocals, noUnusedParameters, and noImplicitReturns at tsconfig.json
// Function Without Return Value
const myIncome = (income: number): void => {
  console.log(`My income is ${income}`);
};
// Function With Return Value
const calculateTax = (income: number, taxyear = 2022): number => {
  if (taxyear <= 2022) {
    return income * 1.2;
  } else {
    return income * 1.3;
  }
};
console.log("My tax is", calculateTax(10_000));
console.log("My tax is", calculateTax(10_000, 2023));

// Object
let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Mosh",
  retire: (date: Date) => {
    console.log(date);
  },
};
