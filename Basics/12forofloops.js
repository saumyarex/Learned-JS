const obj1 = {
    name : "Saumya",
    age : 23,
    city : "Bilaspur"
}

const array1 = [1,2,3,4]

for (const element of array1) {
    // console.log(element);
    
}

const map1 = new(Map)

map1.set("IN", "India")
map1.set("UK","United Kingdom")
map1.set("JPN","Japan")

for (const [key, value] of map1) {
    console.log(key,":",value);
    
}