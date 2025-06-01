function Student(name, age, email) {
  this.name = name;
  this.age = age;
  this.email = email;
  return this;
}

console.log(typeof Student)

Student.prototype.greet = function() {
  console.log(`Hello ${this.name} and welcome on board`)
}

// //const name = "hello";
const student1 = new Student("Rahul", 33, "rahul@gmail.com");

// const student2 = new Student("Priya", 23, "priya@gmail.com");
console.log(student1);
// console.log(student2);
student1.greet()
// student2.greet()


// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// // Adding a method to the prototype
// Person.prototype.greet = function() {
//   console.log(`Hello, my name is ${this.name}`);
// };

// const person1 = new Person("John", 30);
// const person2 = new Person("Jane", 25);

// person1.greet();  // Output: Hello, my name is John
// person2.greet();  // Output: Hello, my name is Jane

// const name = 'saum'
// const obj1 = {
//   name : 'saumay',
//   age : '13',
//   greet : function () {
//     console.log(`Hello ${this.name}`)
//   }
// }

// obj1.greet()