document.getElementById('btn1').addEventListener('click', getText);
document.getElementById('btn2').addEventListener('click', getJSON);
document.getElementById('btn3').addEventListener('click', getApiData);

// get local Text function
function getText(){
    fetch('test.txt')
    .then(response => response.text()) 
    .then(data =>{
        document.getElementById('output').innerHTML = data;
    })
}

// get local JSON function
function getJSON(){
    fetch('post.json')
    .then(response => response.json()) 
    .then(data => {
        let output = '';
        data.forEach(function(post){
            output +=`
            <li>${post.title}</li>
            `;
        });
        document.getElementById('output').innerHTML = output; 
    })
}

// get from external API
function getApiData(){
    fetch('https://api.github.com/users')
    .then(response => response.json()) 
    .then(data => {
        let output = '';
        data.forEach(function(user){
            output +=`
            <li>${user.login}</li>
            `;
        });
        document.getElementById('output').innerHTML = output; 
    })
}
