const message1 = document.getElementById("message1");
const message2 = document.getElementById("message2");
const message3 = document.getElementById("message3");

const answer = Math.floor(Math.random()*100) +1;
let numberOfGuesses = 0;
let guessedNumber = [];

let guess = () => {
    const userGuess = document.getElementById("guess").value;
    if(userGuess < 1 || userGuess > 100 || isNaN(userGuess)){
        alert("Please enter a *number* between 1 and 100.");
    }
    else{
        guessedNumber.push(userGuess + " ");
        numberOfGuesses += 1;

        if(userGuess == answer){
            message1.textContent = "Yeah~~~ You Win!";
            message2.textContent = "The number was: " + answer;
            message3.textContent = "You guessed it in " + numberOfGuesses + " guesses";
            document.getElementById("guessBtn").disabled = true;
            
        }
        else if(userGuess < answer){
            message1.textContent = "No. of Guesses: " + numberOfGuesses;
            message2.textContent = "Guessed Numbers are: " + guessedNumber;
            message3.textContent = "Your guess is too low";
            
        }
        else if(userGuess > answer){
            message1.textContent = "No. of Guesses: " + numberOfGuesses;
            message2.textContent = "Guessed Numbers are: " + guessedNumber;
            message3.textContent = "Your guess is too high";
        }
    }
    
}

let reset = () => location.reload();