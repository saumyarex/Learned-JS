const taskButton = document.querySelector('button')
const task = document.querySelector('input')

taskButton.addEventListener('click', () => {
    if(task.value === ""){
        const noValue = document.createElement('p')
        noValue.innerText = 'Please write a task'
        noValue.style.color = 'red'
        noValue.style.fontSize = 'small'
        noValue.style.marginLeft = '0px'
        document.querySelector('#erros').appendChild(noValue)
        setTimeout(()=>{
            noValue.remove()
        },1000)
    }else{
            taskCreation(task.value)
             task.value = ""
    }
})

task.addEventListener('keydown',(e) => {
    if(e.key === 'Enter'){
        if(task.value === ""){
            const noValue = document.createElement('p')
            noValue.innerText = 'Please write a task'
            noValue.style.color = 'red'
            noValue.style.fontSize = 'small'
            noValue.style.marginLeft = '0px'
            document.querySelector('#erros').appendChild(noValue)
            setTimeout(()=>{
                noValue.remove()
            },1000)
        }else{
                taskCreation(task.value)
                 task.value = ""
                }
    }

})

const taskListBox = document.querySelector('#tasklist')

function taskCreation(task){
    let taskElement = document.createElement('div')
    taskElement.setAttribute('class','taskelement')
    taskElement.innerHTML = `<p>${task}</p>`
    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'Delete'
    deleteButton.addEventListener('click',(e)=>{
        deleteItem(e)
    })
    taskElement.appendChild(deleteButton)
    taskElement.addEventListener('click',(e)=>{
        taskCheck(e)
    })
    taskListBox.append(taskElement)
}

function taskCheck(e){
    console.log(e.target.tagName)
    if(!checked){
        if(e.target.tagName === 'P' ){
            e.target.style.textDecoration = "line-through"
            e.target.nextElementSibling.style.textDecoration = "line-through"
            e.target.parentNode.style.backgroundColor = 'rgb(44, 44, 44)'
        }
        checked = true
    }else{
        if(e.target.tagName === 'P'){
            e.target.style.textDecoration = "none"
            e.target.nextElementSibling.style.textDecoration = "none"
            e.target.parentNode.style.backgroundColor = 'rgb(66, 66, 66)'
        }
        checked = false
    }
}

function deleteItem(e){
    e.target.parentNode.remove()
}


let checked = false
