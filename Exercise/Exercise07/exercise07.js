//Exercise-07 
//Destructuring

// const phi = 3.14;
// let power = 2;
// let radius = 0;

// const calculateArea = (obj) => {phi * Math.pow(obj.radius, obj.power)}

// radius = 21;
// let area21 = calculateArea({radius: radius, power: 2 });

// radius = 7;
// let area7 = calculateArea({radius: radius, power: 2 });

// console.log(`area with 21 radius: ${area21}, and area with 7 radius:  ${area7}`);

//after
// const phi = 3.14;
// const calculateArea = ({ radius, power }) => phi * Math.pow(radius, power);

// let area21 = calculateArea({ radius: 21, power: 2 });
// let area7 = calculateArea({ radius: 7, power: 2 });

// console.log(`Area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);