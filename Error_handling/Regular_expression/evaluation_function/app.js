let re;
re = /hello/i;
re = /hello/i; // `i` makes case insensitive
//  

console.log(re);
console.log(re.source);

// exec() function will return result in array if there is matchor null
// const result = re.exec('WOwo, hello world');
// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// test() function return true or false
// const result = re.test('Hello');
// console.log(result);

// match() function will return result array or null
// const str = 'hello world';
// const result = str.match(re);
// console.log(result);

// search() function return index of first match if not found return -1
// const str = 'hello worlds';
// const result = str.search(re);
// console.log(result);

// replace() will return new string with some or all matches of a pattern
const str = 'hello worlds';
const newStr = str.replace(re, 'hi');
console.log(newStr);