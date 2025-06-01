

const newDate = new Date()
// console.log(newDate.toDateString());
// console.log(newDate.toTimeString())
// console.log(newDate.toString())
// console.log(newDate.toTimeString())
// console.log(newDate.toISOString())
// console.log(newDate.toJSON())
console.log(newDate.toLocaleString('en-US',{
    // day:'numeric',
    // weekday:'long',
    dateStyle:'full'
}))
// console.log(newDate.toLocaleDateString())
// console.log(newDate.toLocaleTimeString())
