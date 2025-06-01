const obj1 = {
    'name':"Saumya",
    'Full Name' : "Saumya Ranjan",
    'Age' : 23,
    'Phone no.' :"8319868056", 
    'Email' : "Saumya224@gmail.com",
    'Greeting': function() {
        console.log("Hello user")
    }
}

console.log(obj1["Full Name"])
console.log(obj1.Greeting())

obj1.GreetingTwo = function () {
    console.log(`Hello user ${this["Full Name"]}`)
}

console.log(obj1.GreetingTwo())