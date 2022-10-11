let computerGuess;
let guessNum = [];
let userGuessUpdate = document.getElementById('alert');
let userNumUpdate = document.getElementById('inputBox');
// console.log('hi');


const init =()=>{
    computerGuess = Math.floor(Math.random()*100);
    // console.log(computerGuess);
    document.getElementById('newGameBtn').style.display = 'none';
    document.getElementById('gameArea').style.display = 'none';
}

const startGame = () =>{
    document.getElementById('welcomeScreen').style.display = 'none';
    document.getElementById('gameArea').style.display = 'block';
}
 
// Reload the page

const newGameBegin = () =>{
    window.location.reload();
}



const startNewGame = () =>{
    document.getElementById('newGameBtn').style.display = 'inline';
    userNumUpdate.setAttribute('disabled',true);
}

const compareGuees = () =>{
    const userNum = Number(document.getElementById('inputBox').value);
    guessNum = [...guessNum,userNum]   
    document.getElementById('guess').innerHTML = guessNum;
                    

    if(guessNum.length < maxGuess){
        if(userNum > computerGuess){
        userGuessUpdate.innerHTML = `Your Guess ${userNum} is High`
        userNumUpdate.value = ''
    }
    else if(userNum < computerGuess){
        userGuessUpdate.innerHTML =   `your Guess ${userNum} is Low`
        userNumUpdate.value = ''
    }
    else{
        userGuessUpdate.innerHTML =   `your Guess is correct ${computerGuess}`
        userNumUpdate.value = ''
        startNewGame();
    }
}
else{
    if(userNum > computerGuess){
        userGuessUpdate.innerHTML = `You loss!!! your correct guess is ${computerGuess}`
        userNumUpdate.value = ''
        startNewGame();
    }
    else if(userNum < computerGuess){
        userGuessUpdate.innerHTML =   `You loss!!! your correct guess is ${computerGuess}`
        userNumUpdate.value = ''
        startNewGame();
    }
    else{
        userGuessUpdate.innerHTML =   `your Guess is correct ${computerGuess}`
        userNumUpdate.value = ''
        startNewGame();
    }
}

    document.getElementById('attempts').innerHTML = guessNum.length;
}
const easyMode = () =>{
    maxGuess = 5;
    startGame();
}

const hardMode = () =>{
    maxGuess = 10;
    startGame();
}
