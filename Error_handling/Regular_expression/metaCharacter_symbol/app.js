let re;
// literal character
re = /hello/;
re = /hello/i;

// meta character symbol
re = /^h/i; // ^ must start with
re = /d$/i; // $ must ends with
re = /^hello$/i; // must start and end with hello
re = /h.llo/i; // . match any one character
re = /h*llo/i; // * match any character 0 or more times
re = /gre?a?y/i; // ? optionalcharacter a and e
re = /gre?a?y\?/i; // \ escape character character


// strring to match
const str = 'grey?';
const result = re.exec(str);
console.log(result);

// log result
function reTest(re, str){
    if(re.test(str)){
        console.log(`${str} matched ${re.source}`); 
    }else{
        console.log(`${str} does not matched ${re.source}`);
    }
}
reTest(re, str);