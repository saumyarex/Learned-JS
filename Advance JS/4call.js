function setusername(username) {
    this.username = username
    console.log('called')
}

function userRegisteration(username,email,password){
    setusername.call(this,username)
    this.email = email
    this.password = password
}

const user1 = new userRegisteration('Ram', 'ram@on.com', 123)

console.log(user1)