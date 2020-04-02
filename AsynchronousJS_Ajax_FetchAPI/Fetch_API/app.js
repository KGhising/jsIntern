document.getElementById('btn1').addEventListener('click', getText);
document.getElementById('btn2')
document.getElementById('btn2')

// get Text function
function getText(){
    fetch('test.txt')
    .then(function(response){
        return response.text();  
    }) 
    .then(function(data){
        document.getElementById('output').innerHTML = data;
    });
}