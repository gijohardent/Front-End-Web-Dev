//Exercise 4

//Array Exercises
let people = ["Greg","Mary","Devon","James"]

//1. for-loop
for (let i = 0; i < people.length; i++){
    console.log(people[i])
}

//2. forEach()
people.forEach(function (item){
    console.log(item)
})

//3. Remove Greg
people.shift()


//4. Remove James
people.pop()


//5. Add Matt
people.unshift("Matt")

//6. Add "Your Name"
people.push("Ardent")


//7. Exit from Loop after Mary
for (let i = 0; i < people.length; i++){
    if (i == 2) {break;}
    console.log(people[i])
}

//8. Copy of "People" array (not include Mary&Matt)
let orang = people.slice(2)
console.log(orang)

//9. Redefine variable
people.splice(2,1,"Elizabeth","Artie")
console.log(people)

//10.withBob Variable
let withBob = people.concat("Bob")
console.log(withBob)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Object Exercises
let programming = {
    languages: ["JavaScript","Python","Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

//1. Add "Go" language
programming.languages.push("Go")

//2. Change difficulty to 7
console.log(programming["difficulty"]=7)

//3. Remove jokes
delete programming.jokes

//4. Programming is Fun
programming.isFun = true
console.log(programming)

//5. Map Languages

let output = programming.languages.map(function (item, index) {
    return `${index} - ${item}`
})
console.log(output);
