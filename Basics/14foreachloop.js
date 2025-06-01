// const array = ["Ken", "Ben", "Gwen", "Kevin", "Max"]

// const print = (element) => {
//     //console.log(element)
// }

// array.forEach(print);

// const array2 = [
//     {
//         Name : "Saumya",
//         Age : 24
//     },
//     {
//         Name : "Kevin",
//         Age : 25,
//     },
//     {
//         Name : "Ben",
//         Age : 24,
//     },
//     {
//         Name : "Gwen",
//         Age : 24,
//     }
// ]

// const values = array2.forEach( element => {
//     console.log(`Name : ${element.Name} and Age : ${element.Age}`)
// })

// console.log(values)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const userbooks = books.filter( (bk) => { return bk.genre === 'History' && bk.edition > 2000})
console.log(userbooks)