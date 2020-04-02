// Listen for submit
document.getElementById('submit').addEventListener('click', function(e){
    // hide result
    document.getElementById('results').style.display = 'none';

    // loading
    document.getElementById('loading').style.display = 'block';

    setTimeout(calculateResult, 2000);

    e.preventDefault();
});

function calculateResult(e){
    // input section
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const year = document.getElementById('years');

    // display result section
    const monthlyPayment = document.getElementById('monthlyPayment');
    const totalPayment = document.getElementById('totalPayment');
    const totalInterest = document.getElementById('totalInterest');

    // calculation
    const principle = parseFloat(amount.value);
    const calculatePayment = parseFloat(year.value) * 12;
    const calculateInterest = parseFloat(interest.value) / 100 / 12;

    const x = Math.pow(1 + calculateInterest, calculatePayment);
    const monthly = (principle * x * calculateInterest) / (x-1);

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatePayment).toFixed(2);
        totalInterest.value = ((monthly * calculatePayment) - principle).toFixed(2);

         // show result
        document.getElementById('results').style.display = 'block';

        // hide loading
        document.getElementById('loading').style.display = 'none';

    } else {
        showError('Make sure you input correctly.');
    }
}

// show input error
function showError(error){
    // hide result
    document.getElementById('results').style.display = 'none';

    // hide loading
    document.getElementById('loading').style.display = 'none';

    const errorDiv = document.createElement('div'); 
    // getting div element
    const heading = document.querySelector('h3');
    const container = document.querySelector('.container');


    errorDiv.className = 'alert';
    errorDiv.appendChild(document.createTextNode(error));

    // insert error
    container.insertBefore(errorDiv, heading);

    // set timeout
    setTimeout(clearError, 3000);
} 

// claer error
function clearError(){
    document.querySelector('.alert').remove();
}