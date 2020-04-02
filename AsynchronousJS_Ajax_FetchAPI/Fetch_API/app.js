document.getElementById('btn1').addEventListener('click', getText);
document.getElementById('btn2').addEventListener('click', getJSON);
document.getElementById('btn2')

// get local Text function
function getText(){
    fetch('test.txt')
    .then(function(response){
        return response.text();  
    }) 
    .then(function(data){
        document.getElementById('output').innerHTML = data;
    });
}

// get local JSON function
function getJSON(){
    fetch('post.json')
    .then(function(response){
        return response.json();  
    }) 
    .then(function(data){
        let output = '';
        data.forEach(function(post){
            output +=`
            <li>${post.title}</li>
            `;
        });
        document.getElementById('output').innerHTML = output; 
    });
}