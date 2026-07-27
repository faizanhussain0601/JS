let randomNumber = parseInt(Math.random()*100+1)

const submit = document.querySelector('#subt')

const userInput = document.querySelector('#guessfield')

const guessSlot = document.querySelector('.guesses')

const reamaining = document.querySelector('.lastresult')

const lowOrHi = document.querySelector('.lowOrHi')

const StartOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []

let numGuess = 1

let playGame = true

if(playGame){
     submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
     })
}


function validateGuess(guess){
     if(isNaN(guess)){
        alert('Please enter a valid Number')
     }
     else if(guess < 1){
        alert('Please enter a Number More than 1')
     }
     else if(guess >100){
        alert('Please enter a Number less than 100')
     }
     else{
        prevGuess.push(guess);
        if(numGuess>10){
            // displayGuess(guess)
            displayMessage(`Game Over. Random Number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)

        }

     }
}

function checkGuess(guess){
     if(guess === randomNumber){
        displayMessage(`You Guessed it Right`)
        endGame()
     }
     else if(guess<randomNumber){
        displayMessage(`Number is Too low`)
     }
     else if(guess>randomNumber){
        displayMessage(`Number is Too High`)
     }
}

function displayGuess(guess){
    userInput.value = ""
    guessSlot.innerHTML += `${guess} `

    numGuess++;
    reamaining.innerHTML  =  `${11-numGuess}`
        
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`
    StartOver.appendChild(p)
    playGame = false
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        
    randomNumber = parseInt(Math.random()*100+1)
    prevGuess = []
    numGuess = 1
    
    guessSlot.innerHTML = ''
    reamaining.innerHTML  =  `${11-numGuess}`
    userInput.removeAttribute('disabled')
    StartOver.removeChild(p)

    playGame = true
    })
}





