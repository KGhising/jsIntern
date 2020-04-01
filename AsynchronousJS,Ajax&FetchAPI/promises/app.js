// This call back didn't work to vscode live server  

const posts = [
    {title: 'Post one', body: 'This is post one'},
    {title: 'Post two', body: 'This is post teo'}
];

// creating post/ promise
function createPost(post, ){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            posts.push(post);

            const err = true;
            if(!err){
                resolve();
            }else{
                reject('Error: something wrong');
            }
        }, 2000);
    });
}
 
//  getting post
function getPost() {
    setTimeout(function(){
        let output = '';
        posts.forEach(function(post){
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

// callback funtion
createPost({title: 'Post three', body: 'This is post three'})
.then(getPost)
.catch(function(err){
    console.log(err);
});