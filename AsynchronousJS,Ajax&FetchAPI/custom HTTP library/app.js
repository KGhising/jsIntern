const http = new HTTP;

// GET post
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts){
//     if(err){
//         console.log(err);
//     }    
//     else{
//         console.log(posts);
//     }
// });

// Create data
const data = {
    title: 'Custom post',
    body: 'Custom body'
};

//create POST
http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, posts){
    if(err){
        console.log(err);
    }    
    else{
        console.log(posts);
    }
});