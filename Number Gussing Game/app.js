// Generate random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

const guessInput = document.getElementById("guess_number");
const submitBtn = document.getElementById("submite_btn");
const guesses = document.getElementById("guesses");
const lastResult = document.getElementById("last_result");
const lowOrHi = document.querySelector("#low_or_hi");

console.log(submitBtn)

let guessCount = 10;
let previousGuesses = [];

// Button click event
submitBtn.addEventListener("click",  ()=> {
        console.log("button was click")
    const userGuess = Number(guessInput.value);

    // Validation
    if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
        lowOrHi.textContent = "❌ Please enter a number between 1 and 100";
        lowOrHi.style.color = "red";
        return;
    }

    previousGuesses.push(userGuess);
    guesses.textContent = "Previous Guesses: " + previousGuesses.join(", ");

    guessCount--;
    lastResult.textContent = guessCount;

    // Check result
    if (userGuess === randomNumber) {
        lowOrHi.textContent = "🎉 Congratulations! You guessed it right!";
        lowOrHi.style.color = "green";
        endGame();
    } else if (guessCount === 0) {
        lowOrHi.textContent = `😢 Game Over! Number was ${randomNumber}`;
        lowOrHi.style.color = "red";
        endGame();
    } else if (userGuess < randomNumber) {
        lowOrHi.textContent = "⬆️ Too Low! Try again";
        lowOrHi.style.color = "orange";
    } else {
        lowOrHi.textContent = "⬇️ Too High! Try again";
        lowOrHi.style.color = "orange";
    }

    guessInput.value = "";
    guessInput.focus();
});

// End game
function endGame() {
    guessInput.disabled = true;
    submitBtn.disabled = true;

    const restartBtn = document.createElement("button");
    restartBtn.textContent = "Restart Game";
    restartBtn.className = "btn btn-success mt-3";
    restartBtn.addEventListener("click", resetGame);

    document.querySelector(".w-75").appendChild(restartBtn);
}

// Reset game
function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    guessCount = 10;
    previousGuesses = [];

    guesses.textContent = "Previous Guesses";
    lastResult.textContent = guessCount;
    lowOrHi.textContent = "";

    guessInput.disabled = false;
    submitBtn.disabled = false;
    guessInput.value = "";
    guessInput.focus();

    document.querySelector(".btn-success").remove();
}


