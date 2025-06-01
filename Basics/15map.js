const array1 = [1,2,3,4,5,6,7,8,9,10]

//Maps

let array2 = array1.map((value) => (value**2))

console.log(array1)
console.log(array2)

array2 = array1.map((value) => (value**2)).map( (value) => (value + 1)).filter((value) => value>40)

console.log(array2)


const total = array1.reduce((acc, currentValue) => {
    return acc + currentValue
},0)

console.log(total);
