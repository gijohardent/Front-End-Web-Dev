//Modified Exercise 1 to IIFE & Call Back

//1. IIFE
let bmi = (function(berat, tinggi){
    return berat/(tinggi*tinggi)
})(65,1.7)
console.log(bmi)

//2. Call Back
function bmi(hitung){
    let hasil = hitung(65,1.7)
    return hasil
}

let hitungBmi = bmi(function(berat, tinggi){
    return berat/(tinggi*tinggi)
})
console.log(hitungBmi)

