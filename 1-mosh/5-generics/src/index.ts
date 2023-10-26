// Generic Classes //
class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

let pair = new KeyValuePair("1", "a");
console.log(pair.key);
console.log(pair.value);

// Generic Functions //
function wrapInArray<T>(value: T) {
  return [value];
}

let numbers = wrapInArray(1);
console.log(numbers);

class ArrayUtils {
  static wrapInArray<T>(value: T) {
    return [value];
  }
}

let numbers_ = ArrayUtils.wrapInArray(2);
console.log(numbers_);

// Generic Interfaces //
// http://mywebsite.com/users
// http://mywebsite.com/products

interface Result<T> {
  data: T | null;
  error: string | null;
}

function fetch<T>(url: string): Result<T> {
  if (url === "" || url === null || url === undefined) {
    return { data: null, error: "Error" };
  } else {
    return { data: null, error: "No Error" };
  }
}

interface User {
  username: string;
}

interface Products {
  title: string;
}

let result = fetch<Products>("url");
console.log(result.data);

// Generic Constraints //
class Person {
  constructor(public name: string) {}
}

class Customer extends Person {}

function echo<T extends Person>(value: T): T {
  return value;
}

echo(new Person("a"));
echo(new Customer("a"));

// Extending Generic Classes //
interface Product {
  name: string;
  price: number;
}

class Store<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }

  // The key of Operator //
  // T is Product
  // Keyof T => "name" | "price"
  find(property: keyof T, value: unknown): T | undefined {
    return this._objects.find((obj) => obj[property] == value);
  }
}

let store = new Store<Product>();
store.add({ name: "a", price: 1 });
store.find("name", "a");
store.find("price", 1);
// store.find("nonExistingProperty", 1) // It's gonna be an error because does not match with keyof T

// Pass on the generic type parameter
class CompressibleStore<T> extends Store<T> {
  compress() {}
}

let store_ = new CompressibleStore<Products>();
store_.compress();

// Restrict the generic type parameter
class SearchableStore<T extends { name: string }> extends Store<T> {
  override find(property: keyof T, value: unknown): T | undefined {
    return this._objects.find((obj) => obj[property] === value);
  }
}

// Fix the generic type parameter
class ProductStore extends Store<Product> {
  filterByCategory(category: string): Product[] {
    if (category === "" || category === null || category === undefined) {
      return null;
    } else {
      return [];
    }
  }
}

// Type Mapping //
interface Product_ {
  name: string;
  price: number;
}

type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

type Optional<T> = {
  [K in keyof T]?: T[K];
};

type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

let product: ReadOnly<Product> = {
  name: "a",
  price: 1,
};

// product.name = "a"; // Can't assign because it's read only property

