//Ubahlah syntax ES5 berikut ke dalam ES6

//1
const calculateAge = (birthYear) => { 2019 - birthYear;}

const yearUntilRetirement = (object) => {
	let age = calculateAge(object.year);
	let retirement = 60 - age;

	if(retirement > 0){
    	console.log(`${object.firstName}' retires in '${retirement}' years'`);
	} else {
    	console.log(`${object.firstName}' is already retired.`);
	}
}

yearUntilRetirement({year: 1987, firstName: 'John'});

//2.
const addNumber = (...numbers) => {
 	var numbers = [...numbers];
 	var sum = 0;
    //Change to map function
 	return numbers.map((item) => (sum += item))
 }

console.log(addNumber(1,2,3,4,5,6,7));

//3.

let phi = 3.14;
let power = 2;
let radius = 0;

const calculateArea = (obj) => {phi * Math.pow(obj.radius, obj.power)}

radius = 21;
let area21 = calculateArea({radius: radius, power: 2 });

radius = 7;
let area7 = calculateArea({radius: radius, power: 2 });

console.log(`area with 21 radius: ${area21}, and area with 7 radius:  ${area7}`);

// 4.
const makeAjaxRequest = (url, method = "Get") => {
    console.log(url, method);
}

makeAjaxRequest('www.google.com')