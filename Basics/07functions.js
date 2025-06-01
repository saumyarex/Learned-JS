// function addTwoNumbers(num1, num2){
//     return num1 + num2
// }

// console.log(addTwoNumbers(1,2));

// greetings("Saumya")

// const multiplication = (num1, num2) => {
//     return num1 * num2
// }

// console.log(multiplication(3,2));

/*Ojects as arguments in Functions */

// const obj = {
//     name : "Saumya",
//     age : '23',
//     email : "saumyo224@gmail.com",
//     'full name' : "Saumya Nayak"
// }

// function greetings(user) {
//     console.log(`The name of the user is ${user.name}, full name: ${user['full name']}, age: ${user.age} and Email: ${user.email}`);
    
// }

// greetings(obj)

/*Arracy as arguments in Functions */
// Function that takes an array as an argument
// function processArray(arr) {
//     console.log("Array length:", arr.length);
//     console.log("First element:", arr[0]);
//     console.log("Last element:", arr[arr.length - 1]);
    
//     // Sum all elements in the array
//     const sum = arr.reduce((total, current) => total + current, 0);
//     console.log("Sum of all elements:", sum);
// }

// // Example usage
// const numbers = [1, 2, 3, 4, 5];
// processArray(numbers);


// // Another example with different data
// const fruits = ["apple", "banana", "orange", "grape"];
// processArray(fruits);


// function cart(...items){
//     console.log(items);
// }

// cart("apple", "banana");


const array = [1,2,3,4,5,6,7,8,9,10]

const bigNum = (num1,num2) => (num1 + num2)

console.log(bigNum(1,2));

