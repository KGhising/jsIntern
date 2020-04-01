// This call back didn't work to vscode live server  

const posts = [
    {title: 'Post one', body: 'This is post one'},
    {title: 'Post two', body: 'This is post teo'}
];

// creating post
function createPost(post, callback){
    setTimeout(function(){
        posts.push(post);
        callback();
    }, 2000);
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
createPost({title: 'Post three', body: 'This is post three'}, getPost);