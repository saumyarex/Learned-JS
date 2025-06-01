const weight = document.querySelector('#weight')
const height = document.querySelector('#height')

function bmi(){

    let bmi = weight.value / (height.value**2)

    console.log(bmi)

    const result = document.createElement("h2")
    result.setAttribute('id','result')
    result.innerText = `BMI = ${bmi}`
    document.querySelector('#inputData').append(result)
    
}

function reset(){
    weight.value = ''
    height.value = ''
    document.querySelector('#result').remove()
}