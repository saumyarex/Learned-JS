// class Student {
//     constructor(name,password){
//         this.name = name;
//         //this._password = password
//     }

//     get password() {
//         return `Password is not accessible`
//     }

//     set password(_password){
//         this.password = _password
//     }

// }

// const studentOne = new Student('Ram','1223')

// console.log(studentOne.password)

//Behind the scene

// function Student(name,password){
//     this.name = name

//     Object.defineProperty(this,'password',{
//         get: function(){
//             return `Password is not accessible`
//         },

//         set: function(password){
//             this.password = password
//         }
//     })
// }

// const studentOne = new Student('Ram','1223')

// console.log(studentOne)
// console.log(studentOne.password)


//Object based get set 

const Student = {
    name : 'Ram',
    _password : 'abc',

    get password(){
        return `Password is not accessible`
    },

    // set password(value){
    //     this._password
    // },
    pass: function(){
        console.log(`Password is ${this._password}`)
    }
}

console.log(Student.password)
Student.pass()