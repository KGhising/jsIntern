const user = {email: 'bhfty99@gmial.com'};
try{
    // reference error
    // myFunction();

    // type error
    // null.myFunction();

    // syntax error
    // eval('Hello World');

    // URI error
    // decodeURIComponent('%');

    if(!user.name){
        // throw 'User has no name';
        throw new SyntaxError('User has no name');
    }

}
catch(e){
    // console error
    console.log(e);

    // console error name
    console.log(e.name);

    // console error messsage
    console.log(e.message);

    // console to check if its this error
    console.log(e instanceof ReferenceError);
}
finally{
    console.log('Finally run regardless of result.')
}
console.log('Program will continue from here...');