class User {
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    greet(){
        console.log(`Hello ${this.username}`)
    }

}

const userOne = new User('Raj','raj@on.com', '123')

console.log(userOne)
userOne.greet()

//Behind the scene

// function User(username,email,password){
//     this.username = username;
//     this.email = email;
//     this.password = password;
// }

// User.prototype.greet = function(){
//     console.log(`Hello ${this.username}`)
// }

// const userOne = new User('Raj','raj@on.com', '123')


// console.log(userOne)
// userOne.greet()

