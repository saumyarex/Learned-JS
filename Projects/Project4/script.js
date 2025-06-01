//Random number generation

let randomNumber = Math.round(Math.random()*100 +1)
console.log(randomNumber)

//Selecting the elements from pages

let userGuess = document.querySelector('#uservalue');

const submitButton = document.querySelector('#submitbutton')
const guesses = document.querySelector('#guesses')
const chances = document.querySelector('#chancesreamaining')
const gameBox = document.querySelector('.gamebox')

//Creating a new element to add in the result later
const result = document.createElement('h3')

//Array and variable for game status
let noOfTry = 10;
let guessList = []
let playGame = true

//Fucntions to handle various tasks

if(playGame){
    submitButton.addEventListener( 'click', (e)=>{
        e.preventDefault()
        console.log(parseInt(userGuess.value,10))
        submit(parseInt(userGuess.value))
    })
}

function submit(userGuess){
    inputValidation(userGuess)
}

function inputValidation(userGuess){
    if(isNaN(userGuess)){
        resultMsg("Please type a valid number")
    }else if(userGuess > 100){
        resultMsg('Please give number less than 100')
    }else if(userGuess < 1){
        resultMsg(`Please give number more than 0`)
    }else{
        check(userGuess)
    }
}

function check(userGuess){
    if(noOfTry === 1){
        gameEnd()
        resultMsg(`Play again your's turn over`)
    }else{
        if(userGuess === randomNumber){
            resultMsg(`You have guess the right number ${randomNumber}`)
            gameEnd()
        }else if(userGuess < randomNumber){
            resultMsg(`Your guess is less than right number`)
        }else {
            resultMsg('Your guess is more than right number')
        }
    
    } 
    guessList.push(userGuess)
    noOfTry -= 1
    guesses.innerText = `${guessList}`
    chances.innerText = `${noOfTry}`
    userGuess.value = ''
}

function resultMsg(msg){
    result.innerHTML = `<h3>${msg}</h3>`
    gameBox.appendChild(result)
}

    const startButton = document.createElement('button')
    startButton.innerText = 'Play again'
    startButton.addEventListener('click',()=>{
        gameStart()
    })


function gameEnd(){
    playGame = false
    submitButton.disabled = true
    gameBox.appendChild(startButton)
}



function gameStart(){
    playGame = true
    noOfTry = 10
    guessList = []
    userGuess.value = ''
    submitButton.disabled = false
    startButton.remove()
    result.remove()
    guesses.innerText = ``
    chances.innerText = `${noOfTry}`
}

