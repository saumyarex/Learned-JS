const obj1 = {
    name : 'Saumya',
    age : 24,
    city : "Bilaspur"
}

for (const key in obj1) {
    //console.log(`${key} : ${obj1[key]}`)
}

const map1 = new(Map)

map1.set("IN", "India")
map1.set("UK","United Kingdom")
map1.set("FR", "France")

const array1 = ["India","China","Russia","South Africa"]

for (const key in array1) {
    console.log(array1[key])
}