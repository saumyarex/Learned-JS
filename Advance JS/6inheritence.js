// class student {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     log(){
//         console.log('hello')
//     }
// }

// class sInfo extends student {
//     constructor(name,age,email,phone){
//         super(name,age)
//         this.email = email;
//         this.phone = phone;
//     }
// }

// const userOne = new student('Sam', '23')
// const userTwo = new sInfo('Ram', '24', 'ram@gmail.com', '123324342')

// console.log(userOne)
// console.log(userTwo)

// userTwo.log()


//Behind the scene

function student(username,age){
    this.username = username;
    this.age = age;
}

student.prototype.log = function() {
    console.log(`Hello ${this.username}`)
}
sInfo.prototype.log = function() {
    console.log(`Hello ${this.username}`)
}

function sInfo(username,age,email,phone){
    student.call(this,username,age)
    this.email = email;
    this.phone = phone
}

const userOne = new student('Sam', '23')
const userTwo = new sInfo('Ram', '24', 'ram@gmail.com', '123324342')

console.log(userOne)
console.log(userTwo)

userTwo.log()