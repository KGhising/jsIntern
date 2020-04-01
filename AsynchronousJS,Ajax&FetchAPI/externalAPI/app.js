document.querySelector('.getJokes').addEventListener('click', getjokes);

// get jokes function
function getjokes(e){

    const number = document.querySelector('input[type="number"]').value;
    
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function(){
        if(this.status === 200){
             const response = JSON.parse(this.responseText);
             console.log(response);

             let output = '';
             if (response.type === 'success') {
                
                response.value.forEach(function(joke){
                    output += `<li>${joke.joke}</li>`
                });

             }else{
                 output += '<li>Someting went wrong</li>';
             }

             document.querySelector('.joke').innerHTML = output;
        }

    }
    
    xhr.send();
    // prevent default action
    e.preventDefault();
}