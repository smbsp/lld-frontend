class Person {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 2) {
            throw new Error('Name is too short');
        }
        this._name = value;
    }
}

class Male extends Person {
    get name() {
        return `Mr. ${this._name.toUpperCase()}`;
    }
}

// In JavaScript, when you have both a getter and a setter for a property, they work together as a pair. 
// If you override only one of them in a subclass (in this case, we only overrode the getter in the Male class), 
// the overridden part will not automatically use the inherited part (the setter from the Person class) for 
// its operations. So, even though the Male class inherits the setter from the Person class, the custom getter 
// we defined in the Male class does not use this inherited setter to update the _name property. Instead, it 
// directly accesses the _name property, bypassing the setter logic.

let male = new Male('John');
console.log(male.name); // Mr. JOHN (uses the getter from Male class)

male.name = 'Mike'; // Uses the setter from Person class
console.log(male.name); // Mr. MIKE (uses the getter from Male class)


// let val = 0;

// class A {
//     set foo(_val) {
//         val = _val;
//     }
//     get foo() {
//         return val;
//     }
// }

// class B extends A {}

// class C extends A {
//     get foo() {
//         return val;
//     }
// }

// const b = new B();
// console.log(b.foo); // Should log 0
// b.foo = 1;
// console.log(b.foo); // Should log 1

// const c = new C();
// console.log(c.foo); // Should log 1
// c.foo = 2;
// console.log(c.foo); // Issue - Should log 2
// console.log(b.foo); // Issue - Should log 2
