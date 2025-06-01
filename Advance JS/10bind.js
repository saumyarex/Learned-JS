const person = {
    name: 'Alice',
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

const greetFn = person.greet;  // this loses the context of 'person'
greetFn();  // Output: "Hello, my name is undefined"



// Using bind to explicitly set 'this'
const boundGreetFn = person.greet.bind(person);
boundGreetFn();  // Output: "Hello, my name is Alice"
