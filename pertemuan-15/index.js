//ASYNCHRONOUS JS

//ES5

//Synchronous -> Single Thread -> Blocking
// console.log("Proses 1")
// console.log("Proses 2")
// console.log("Proses 3")
// console.log("Proses 4")

//Asynchronous -> Multi Thread -> Non-Blocking
//1. Parallel
// setTimeout(() => {
//     console.log("Proses 1")
// }, 5000)

// console.log("Proses 2")

// setTimeout(() => {
//     console.log("Proses 3")
// }, 5000)

// console.log("Proses 4")

//2. Concurrent
// setTimeout(() => {
//     console.log("Proses 1")
//     setTimeout(() => {
//         console.log("Proses 2")
//         setTimeout(() => {
//             console.log("Proses 3")
//             setTimeout(() => {
//                 console.log("Proses 4")
//             }, 3000)
//         }, 3000)
//     }, 3000)
// }, 3000)

//ES6

//3. Promise
// let condition = true
// const newPromise = new Promise((resolve, reject) => {
//     if (condition == true){
//         resolve ("Berhasil")
//     } else {
//         reject ("Gagal")
//     }
// })

//Pakai Promise
//1. Then -> Catch
// newPromise.then((result) => {
//     return result
// })
// .then((result2) => {
//     console.log(result2)
// }).catch((error) => {console.log(error)})


//2. Async-Await (selalu digunakan pada fungsi) //ES7

// const consumePromise = async()=>{
//     try{
//         let result = await newPromise
//         console.log(result)
//     }catch(error){
//         console.log(error)
//     }
// }

// consumePromise()

//Menggunakan Promise Patch
