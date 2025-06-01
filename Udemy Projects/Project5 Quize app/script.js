const questions = [
    {
        question : 'What is the capital of France?',
        options : ['Berlin','Madrid','Paris','Rome'],
        answer : "Paris",
        marks : 2
    },
    {
        question : 'Which planet is known as the Red Planet?',
        options : ['Earth','Mars',"Jupiter","Venus"],
        answer : "Mars",
        marks : 5
    },
    {
        question : 'Who wrote the play "Romeo and Juliet"?',
        options : ['Charles Dickens','Mark Twain','William Shakespeare','Jane Austen'],
        answer : "William Shakespeare",
        marks : 3
    },
    {
        question : 'What is the largest mammal in the world?',
        options : ['African Elephant','Blue Whale','Cow','White Shark'],
        answer : "Blue Whale",
        marks : 2
    },
    {
        question : `Which element has the chemical symbol 'O'?`,
        options : ['Gold','Oxygen','Osmium','Silver'],
        answer : "Oxygen",
        marks : 6
    }
]

let currentQuestion = 0
let score = 0
let selectedOptionResult = []

// let totalMarks = questions.reduce((accumulator,currentValue) => (accumulator + currentValue.marks),0)
// console.log(totalMarks)

//Grab all the necessary components
const startBtn = document.getElementById('start-btn')
const questionBox = document.querySelector('#questions')
const questionText = document.querySelector('#question-text')
const options = document.querySelector('#options')
const nextBtn = document.querySelector('#next-btn')
const resultBox = document.querySelector('.result-box')
const totalScore = document.querySelector('#score')
const restartBtn = document.querySelector('#restart-btn')
const scoreCard = document.querySelector('#score-card')

startBtn.addEventListener('click', displayQuestions)

function displayQuestions(){
    startBtn.classList.add('hidden')
    loadQuestions()
}

function loadQuestions(){
    questionBox.classList.add('visible')
    questionBox.classList.remove('hidden');
    questionText.textContent = `${questions[currentQuestion].question}`
    options.innerHTML = ''
    let num = 1
    questions[currentQuestion].options.forEach(element => {
        let option = document.createElement('li')
        option.textContent = element;
        option.setAttribute('id',`${num}`)
        option.addEventListener('click', (e) =>{
            document.querySelectorAll('li').forEach(option => {option.style.background = '#3f3f3f'})
            option.style.background = '#6600a9'
            selectedOption = String(element)
            selectAnswer()
        }) 
        options.appendChild(option)
        num++
    });
}

function selectAnswer(){
    
    nextBtn.classList.remove('hidden')
}

nextBtn.addEventListener('click', () => {

    if(selectedOption === questions[currentQuestion].answer){
        score += questions[currentQuestion].marks
        console.log(score)
        selectedOptionResult.push(true)
    }else{
        selectedOptionResult.push(false)
    }
    currentQuestion ++;
    if(currentQuestion < questions.length){
        nextBtn.classList.add('hidden')
        loadQuestions()
    }else{
        questionBox.classList.remove('visible')
        questionBox.classList.add('hidden');
        resultBox.classList.remove('hidden')
        resultBox.classList.add('visible')
        totalScore.textContent = `${score} out of ${questions.reduce((accumulator,currentValue) => (accumulator + currentValue.marks),0)}`
        console.log(selectedOptionResult)

        selectedOptionResult.forEach( (value,index) => {
            console.log(value)
            const answer = document.createElement('div')
            answer.innerHTML = ` Q${index+1} is ${value}`
            scoreCard.appendChild(answer)
        })
    }
})

restartBtn.addEventListener('click', () => {
    score = 0;
    currentQuestion = 0;
    resultBox.classList.add('hidden')
    resultBox.classList.remove('visible')
    startBtn.classList.remove('hidden')
})