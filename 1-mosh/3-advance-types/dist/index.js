"use strict";
let sales = 123456789;
let course = "Typescript";
let is_published = true;
let _sales = 123456789;
let _course = "Typescript";
let _is_published = true;
let level;
const message = (text) => {
    console.log(text);
};
message("HelloWord!");
let numbers = [1, 2, 3];
let _number = [];
_number[0] = 1;
_number[1] = 2;
let user = [1, "Mosh"];
let mySize = "M";
console.log(mySize);
const myIncome = (income) => {
    console.log(`My income is ${income}`);
};
const calculateTax = (income, taxyear = 2022) => {
    if (taxyear <= 2022) {
        return income * 1.2;
    }
    else {
        return income * 1.3;
    }
};
console.log("My tax is", calculateTax(10000));
console.log("My tax is", calculateTax(10000, 2023));
//# sourceMappingURL=index.js.map