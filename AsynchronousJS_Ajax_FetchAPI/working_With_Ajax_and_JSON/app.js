document.getElementById('btn1').addEventListener('click', loadEmployee);

document.getElementById('btn2').addEventListener('click', loadEmployees);

// load employee function single 
function loadEmployee(e){
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

// load employees function multi employee
function loadEmployees(e){
    console.log("hey");
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'employees.json', true);

    xhr.onload = function(){
        if(this.status == 200){
            const employees = JSON.parse(this.response);
            let output = '';
            employees.forEach(function(employee){
                output += `
                <ul>
                    <li>ID: ${employee.id}</li>
                    <li>Name: ${employee.name}</li>
                    <li>Company: ${employee.company}</li>
                </ul>
            `;
            });
            document.getElementById('employees').innerHTML = output;
        }
    }
    
    xhr.send();
}