"use strict";
var _a;
let employee = {
    id: 1,
    name: "Mosh",
    retire: (date) => {
        console.log(date);
    },
};
function kgToLbs(weight) {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
console.log(kgToLbs(10));
console.log(kgToLbs("10kg"));
const employeePerson = {
    name: "John",
    age: 30,
    employeeId: 1122,
    role: "Manager",
};
let textBox = {
    drag: () => { },
    resize: () => { },
};
let fibonacciSeries = 21;
function greet(name) {
    if (name) {
        console.log(name.toUpperCase());
    }
    else {
        console.log("What is your name ?");
    }
}
greet(undefined);
greet("Mosh");
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let log = null;
log === null || log === void 0 ? void 0 : log("a");
let speed = null;
let ride = {
    speed: speed !== null && speed !== void 0 ? speed : 30,
};
console.log(ride.speed);
function reject(message) {
    throw new Error(message);
}
function processEvents() {
    while (true) {
    }
}
reject("...");
//# sourceMappingURL=index.js.map