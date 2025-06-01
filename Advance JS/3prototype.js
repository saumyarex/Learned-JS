const heros = ['spiderman', 'ironman']

const herospower = {
    spiderman : 'web',
    ironman : 'intelligence',

    greeting : function () {
        console.log(`ironman power ${this.ironman} is supirior`)
    }
}


Array.prototype.hello = () => {
    console.log(`Hello`)
}

Object.prototype.greetings = function () {
    console.log("hi")
}


// console.log(typeof heros)


herospower.greetings()
heros.greetings()


//Inheritence

// const contact = {
//     email : 'saumy224@gmail.com',
//     phone_no : 1234567890
// }

// const user = {
//     Name : "Saumay",
//     age : 23,
// }



// const skills = {
//     soft : 'speaking',
//     hard : 'coding'
// }

// // user.__proto__ = contact

// //Modern syntax

// // Object.setPrototypeOf(user,contact)

// // console.log(user.email)

// const name1 = 'Saumya'
// const name2 = 'Sam     '

// String.prototype.truelenght = function () {
//     console.log(this.trim().length)
// }

// name1.truelenght()
// name2.truelenght

// "samjk".truelenght()