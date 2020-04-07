// const sym1 = Symbol();
// const sym2 = Symbol('sym2');

// console.log(typeof sym2);

// unique object key
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const obj = {};

obj[KEY1] = 'prop1';
obj[KEY2] = 'prop2';
obj.key3 = 'prop3';
obj.key4 = 'prop4';

// console.log(obj[KEY1]);
// symbols are not counted in for....in
for(let i in obj){
    console.log(`${i}: ${obj[i]}`);
}

// Symbol are ignored by JSON.stringify()
console.log(JSON.stringify({key: 'prop'}));
console.log(JSON.stringify({[Symbol('sym')]: 'prop'}));