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
        //win game
        gameOver(true , `${winningNum} is correct guess!`);
    } else{
        // Wrong number
        guessLeft -=1;

        if (guessLeft === 0) {
            // loss game
            gameOver(false , `Game over! Correct number was ${winningNum}`);
        } else{
            // Wrong answer
            // border red
            guessInput.style.borderColor = 'red';
            // clear input
            guessInput.value = '';
            setMessage(`${guess} is not correct, ${guessLeft} guess left`, 'red');
        }
    }
});
// Game over
function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';
    // disable input
    guessInput.disabled = true;  
    // border color and text color for message
    guessInput.style.borderColor = color;
    message.style.color = color;
    
    // set message
    setMessage(msg);
}

// setMessage
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}