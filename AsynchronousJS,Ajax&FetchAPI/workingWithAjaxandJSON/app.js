document.getElementById('btn1').addEventListener('click', loadEmployee);

// load customer function
function loadEmployee(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'employee.json', true);

    xhr.onload = function(){
        if(this.status == 200){
            const employee = JSON.parse(this.response);
            const output = `
                <ul>
                    <li>ID: ${employee.id}</li>
                    <li>Name: ${employee.name}</li>
                    <li>Company: ${employee.company}</li>
                </ul>
            `;
            document.getElementById('employee').innerHTML = output;
        }
    }
    
    xhr.send();
}