let counter = 0

function addTask () {

    console.log();

    let taskName = document.querySelector('#taskName')
    
    counter += 1
    const td1 = document.createElement("td") 
               td1.innerText = `${counter}`  

    const td2 = document.createElement("td") 
               td2.innerText = `${taskName.value}`

    const td3 = document.createElement("td") 
                 td3.innerHTML = '<input type="checkbox">' 

    let task = document.createElement('tr')
    task.setAttribute("class", "tasks")
    task.append(td1,td2,td3)

    let taskList = document.querySelector('tbody')
    taskList.append(task) 

    taskName.value = ""
}

function restTask() {
    const taskList = document.querySelectorAll(".tasks")

    for (let index=0; index<taskList.length; index++ ){
        taskList[index].remove()
    }
    counter = 0
    console.log(counter)
}