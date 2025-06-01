// const pi = Math.ceil(Math.PI)

// Object.defineProperty(Math,'PI',{
//     writable:true,
//     enumerable:true
// })

// console.log(Object.getOwnPropertyDescriptor(Math,'PI'))

// Math.PI = 5;
// console.log(Math.PI)



const universalConst = {
    g : 9.8,
    ab : 6.11,
    dark : 4.9,
    c : 3 * 10^8
}

// Object.defineProperties(universalConst, {
//     g: {writable:false, enumerable:false},
//     ab: {writable:false,enumerable:false}
// })

Object.defineProperty(universalConst,'g',{
    writable:false,
})


console.log(Object.getOwnPropertyDescriptors(universalConst))


const array = ['spiderman', 'ironman', 'captain america', 'hulk','thor']

// for (const i in universalConst) {
//     console.log(i,':',universalConst[i])
// }

// for (const i in array) {
//     console.log(i)
// }



for (const [element,value] of Object.entries(universalConst)) {
    // console.log(element,value)
}


// for (const  element of array) {
//     console.log(element)
// }

