// variables for game

let min = 1,
    max = 10,
    winningNum = 2,
    guessLeft = 3;

// UI element
const guess = document.getElementById('guess'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessSubmit = document.getElementById('guess-submit'),
      guessInput = document.getElementById('guess-input');
      message = document.querySelector('.message');

// assign min and max number
minNum.textContent = min;
maxNum.textContent = max;

// event listener
guessSubmit.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);

    // validate input
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    // check if guess is winning number
    if (guess === winningNum) {
        // disable input
        guessInput.disabled = true;  
        // border green
        guessInput.style.borderColor = 'green';
        // set message
        setMessage(`${winningNum} is correct guess!`, 'green');
    } else{

    }
});

// setMessage
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}