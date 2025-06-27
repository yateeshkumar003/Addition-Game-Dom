let firstNumberElement = document.getElementById("firstNumber");
let secondNumberElement = document.getElementById("secondNumber");
let userInputElement = document.getElementById("userInput");
let gameResultElement = document.getElementById("gameResult");
let successElement = "Congratulations! You got it right.";
let number1;
let number2;

function generateNums() {
    number1 = Math.ceil(Math.random() * 100);
    firstNumberElement.textContent = number1;
    number2 = Math.ceil(Math.random() * 100);
    secondNumberElement.textContent = number2;
    console.log(number2);
}

function restartGame() {
    gameResultElement.textContent = "";
    userInputElement.value = "";
    generateNums();
}
restartGame();

function checkResult() {

    let ans = parseInt(userInputElement.value);
    console.log(ans);
    if (ans === (number1 + number2)) {
        document.getElementById("gameResult").textContent = successElement;
        gameResultElement.style.backgroundColor = "#028a0f";
    } else {
        gameResultElement.textContent = "Please Try Again!";
        gameResultElement.style.backgroundColor = "#1e217c";
    }
}