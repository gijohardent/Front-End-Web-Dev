//1
//ES5 Code
// function calculateAge(birthYear){
// 	return 2019 - birthYear;
// }

// function yearUntilRetirement(object){
// 	var age = calculateAge(object.year);
// 	var retirement = 60 - age;

// 	if(retirement > 0){
//     	console.log(object.firstName + ' retires in '+ retirement + ' years');
// 	} else {
//     	console.log(object.firstName + ' is already retired.');
// 	}
// }

//ES6 Code
// const calculateAge = (birthYear) => new Date().getFullYear() - birthYear;

// const yearUntilRetirement = (object) => {
//     const age = calculateAge(object.year);
//     const retirement = 60 - age;

//     if (retirement > 0) {
//         console.log(`${object.firstName} retires in ${retirement} years`);
//     } else {
//         console.log(`${object.firstName} is already retired.`);
//     }
// };


// yearUntilRetirement({year: 1987, firstName: 'John'});

//2. 
//ES5 Code
// const addNumber = (a, b, c, d, e, f, g) => {
//  	var numbers = [a, b, c, d, e, f, g];
//  	var sum = 0;
//     //Change to map function
//  	for(var i=0;i<numbers.length;i++){
//      		sum += numbers[i];
//  	}
//  	return sum;
//  }

// console.log(addNumber(1,2,3,4,5,6,7));

//ES6 Code
// const addNumber = (a, b, c, d, e, f, g) => {
//     const numbers = [a, b, c, d, e, f, g];
//     return numbers.reduce((acc, curr) => acc + curr, 0);
// };

// console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

//3.
//ES5
// var phi = 3.14;
// var power = 2;
// var radius = 0;

// var calculateArea = function (obj) {
//   return phi * Math.pow(obj.radius, obj.power);
// };

// radius = 21;
// var area21 = calculateArea({radius: radius, power: 2 });

// radius = 7;
// var area7 = calculateArea({radius: radius, power: 2 });

// console.log('area with 21 radius: ' + area21 + ', and area with 7 radius: ' + area7);

//ES6
// const phi = 3.14;

// const calculateArea = ({ radius, power }) => phi * Math.pow(radius, power);

// const area21 = calculateArea({ radius: 21, power: 2 });
// const area7 = calculateArea({ radius: 7, power: 2 });

// console.log(`Area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

// 4.
//ES5
// const makeAjaxRequest = (url, method) => {
// if(!method){
//    	method = 'GET'
// }
// console.log(url, method);
// }

// makeAjaxRequest('www.google.com');

//ES6
// const makeAjaxRequest = (url, method = 'GET') => {
//     console.log(url, method);
// };

// makeAjaxRequest('www.google.com');