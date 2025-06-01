const backgroung = document.querySelector('body')
const buttons = document.querySelectorAll('.button')

buttons.forEach( (button) => {

    button.addEventListener("click" , (e) =>{
        console.log(e.target)
        backgroung.style.backgroundColor = e.target.id
    })
})
