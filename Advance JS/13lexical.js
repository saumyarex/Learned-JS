// function User(username,email,password){
//     this.username = username;
//     this.email = email;
//     this.password = password;

//     this.greet = function(){
//         console.log(`hello ${this.username}`)
//     }
    
// }

// const userOne = new User('Sam', 'sam@.com','123')

// userOne.greet()

// User.prototype.greet = function(){
//     console.log(`Hello ${this.username}`)
// }

// const array = [89,33,123,9]

// for (var index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element)
    
// }



function outer(){
    let name = 'saumaya'

    function inner(){
        console.log(`Inner fucntion ${name}`)
    }

    return inner
}

const user = outer()

user()
