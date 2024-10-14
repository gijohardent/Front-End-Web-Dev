///IIFE & Call Back Function

//1. IIFE Immediately Invoke Function Expression
//a. No Parameter & argument & return value
// (function (){
//     //Kode
//     console.log("helloWorld")
// })()

// //b. With Param & args & return value
let output = (function (fullName){
    //Kode
    return "Hello " + fullName
})("John Doe")

console.log(output)

//2. Call Back Function
//a. No Params & args & return value
// function sayHello(callBack){
//     callBack()
// }

// sayHello(function (){
//     console.log("HelloDunia")
// })

//b. With Params & args & return value
function sayHello(callBack){
    let output = callBack("John Doe")
    return output
}

let hasil = sayHello(function (fUllName){
    return "Hello " + fUllName
})

console.log(output)

