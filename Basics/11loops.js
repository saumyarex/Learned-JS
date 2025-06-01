// for (let i = 1; i<=10; i++){
//     console.log(`Current value: ${i}`)
// }

//Table from 1 to 20

// for ( let i = 1; i<=20; i++){
//     console.log(`Multiplication table of ${i}:`)
//     let j = 1;
//     while(j <=10){
//         console.log(`${i} * ${j} = ${i*j}`)
//         j++
//     }
// }

let i = 1;

do {
    if(i ===7){
        console.log("7 Detected loop break")
        break
    }
    console.log("Current value " + i)
    i++
}while(i<=10)