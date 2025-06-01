function User (username, age){
    this.username = username;
    this.age = age



    this.greet = function(){
        console.log(`hello ${username}`)
    }
}

const userOne = new User('ram', 23)

console.log(userOne)
userOne.greet()