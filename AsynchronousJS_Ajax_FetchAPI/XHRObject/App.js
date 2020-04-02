document.getElementById('button').addEventListener('click', loadData);

// load data function
function loadData() {
    // Create XHR data
    const xhr = new XMLHttpRequest();
    
    // Open
    xhr.open('GET', 'data.txt', true);

    xhr.onload = function(){
        if(this.status == 200){
            document.getElementById('data').innerHTML = `
                <h1>${this.responseText}<h1/>
            `;
        }
    }
    xhr.send(); 
}