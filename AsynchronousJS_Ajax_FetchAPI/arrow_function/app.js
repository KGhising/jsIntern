// single line function doesn't need braces, one line return
// const sayHello = () => console.log('hello');
// const sayHello = () => 'Hello';

// return object
// const sayHello = () => ({msg: 'Hello'});

// Single parameter doesnot need parenthisis
// const sayHello = name => console.log(`Hello ${name}`);
// sayHello('Ghising');

// array example
const user = ['Kishor', 'Ghising',]
// const nameLength = user.map(function(name){
//     return name.length;
// });

// Using arrow function
// const nameLength = user.map((name) => {
//     return name.length;
// });

// Using arrow in shorter
const nameLength = user.map(name => name.length);

console.log(nameLength);