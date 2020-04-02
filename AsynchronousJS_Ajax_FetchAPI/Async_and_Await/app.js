// async function Async(){
    
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('hello'), 1000);
//     });
    
//     err = true;
//     if (!err) {
//         // Wait until promise is resolve
//         const res = await promise; 
//         return res;
//     } else {
//         await Promise.reject(new Error('Something Wrong'));
//     }
//     // Wait until promise is resolve
//     const res = await promise; 
//     return res;         
// }

// Async()
//     .then(res => console.log(res))
//     .catch(err => console.log(err));

async function getUser(){
    // await response of the fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users')

    // Only procced once its resolve
    const data = await response.json();

    //  Only procced once second  promise is resolved
    return data;
}

getUser()
    .then(user => console.log(user));
