//Rest Parameter, Spread Operator & Destructuring

//1. Rest Parameter

//tanpa Rest Parameter
const func1 = (param1, param2, param3) => {
    console.log(param1, param2, param3)
}
func1("A","B","C")

//dengan Rest Parameter
const func2 = (...params) => {
    console.log(params)
}
func2("a","b","c")

const func3 = (params1, params2,...params) => {
    console.log(params1,params2)
    console.log(params)
}
func3("a","b","c","d","e",)

// NOTE : Rest Parameter harus berada di parameter paling akhir

//Mini Exercise
//Ubah ke Rest Parameter

// Tanpa Rest Parameter
const penjumlahan = (a,b,c,d,e) => {
    let arr = [a,b,c,d,e]
    let hasil = 0
    arr.forEach((item) => (hasil += item))
    return hasil
}
console.log(penjumlahan(1,2,3,4,5))

// Dengan Rest Parameter
const sum = (...params) => {
    let arr = [...params]
    let hasil = 0
    arr.forEach((item) => (hasil += item))
    return hasil
}
console.log(sum(1,2,3,4,5,6,7))

//2. Spread Operator
//Spread Operator berfungsi untuk memecahkan array menjadi nilai individu
let numbers = [1,2,3,4,5,6]
console.log(numbers)
console.log(...numbers)

//When to use it??
//a. Saat Duplikasi Array
let numbers2 = [...numbers]
console.log(numbers2)

//b. Menggabungkan Array
let array1 = [1,2,3]
let array2 = [4,5,6]
let array3 = [7,8,9]

let numbers3 =  array1.concat(array2, array3)//ES5 (tanpa Spread Operator)
let numbers4 = [...array1, ...array2, ...array3] //ES6 (dengan Spread Operator)

//c. Duplikasi Object
const john = {
    fullName: "John Doe",
    age: 30
}

const john2 = {...john, address: "Manado"}

//d. Menggabungkan Object
let obj1 = {a: "1", b: "2"}
let obj2 = {a: "3", b: "4"}
let combindedObj = {...obj1, ...obj2}

console.log(combindedObj)


