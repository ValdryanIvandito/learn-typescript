"use strict";
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair = new KeyValuePair("1", "a");
console.log(pair.key);
console.log(pair.value);
function wrapInArray(value) {
    return [value];
}
let numbers = wrapInArray(1);
console.log(numbers);
class ArrayUtils {
    static wrapInArray(value) {
        return [value];
    }
}
let numbers_ = ArrayUtils.wrapInArray(2);
console.log(numbers_);
function fetch(url) {
    if (url === "" || url === null || url === undefined) {
        return { data: null, error: "Error" };
    }
    else {
        return { data: null, error: "No Error" };
    }
}
let result = fetch("url");
console.log(result.data);
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Customer extends Person {
}
function echo(value) {
    return value;
}
echo(new Person("a"));
echo(new Customer("a"));
class Store {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
    find(property, value) {
        return this._objects.find((obj) => obj[property] == value);
    }
}
let store = new Store();
store.add({ name: "a", price: 1 });
store.find("name", "a");
store.find("price", 1);
class CompressibleStore extends Store {
    compress() { }
}
let store_ = new CompressibleStore();
store_.compress();
class SearchableStore extends Store {
    find(property, value) {
        return this._objects.find((obj) => obj[property] === value);
    }
}
class ProductStore extends Store {
    filterByCategory(category) {
        if (category === "" || category === null || category === undefined) {
            return null;
        }
        else {
            return [];
        }
    }
}
//# sourceMappingURL=index.js.map