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

// Brackets [] character sets
re = /gr[ae]y/i; // must be a or e
re = /[GF]ray/; // must be G or F
re = /[^GF]ray/; // Match except G or F
re = /[A-Z]ray/; // Match any uppercase character between A-Z  
re = /[a-zA-Z]ray/; // Match any character between a-z or A-Z
re = /[0-9]ray/; // Match any digit between

// Braces {} -Quantifier
re = /hel{2}o/i; // must occur exactly {m} times
re = /hel{2,4}o/i; // must occur exactly between {n,m} times
re = /hel{2,}o/i; // must occur atleast between {m,} times

// parethesis () -grouping
re = /([0-9]x){3}/; // Grouping [0-9]x 

// shorthand character classes
re = /\w/; // Word character - alphanumeric
re = /\w+/; // + 1 or more character
re = /\W/; // non-word character
re = /\d/; // match any digit 
re = /\d+/; // match any digit 0 or more times
re = /\D/; // match any non-digit
re = /\s/; // match white space character
re = /\S/; // match white non-space character
re = /hell\b/i; // world boundary

// assertion
re = /x(?=y)/; // match x only if its followed by y
re = /x(?!y)/; // match x only if its not-followed by y


// strring to match
const str = 'xsdksdk';
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