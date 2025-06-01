document.addEventListener('DOMContentLoaded', () => {
    
    const expenseName = document.getElementById('expense-name')
    const expenseAmount = document.getElementById('expense-amount')
    const addExpenseButton = document.getElementById('add-expense')
    const expensesList = document.getElementById('expenses-list')
    let expenses = JSON.parse(localStorage.getItem('expenses')) || []
    console.log(expenses)
    render()

    setTimeout(() => {
        localStorage.clear()
    }, 10000);

    addExpenseButton.addEventListener('click', (e) => {
        addExpense()   
    })
    expenseAmount.addEventListener('keypress', (e) => {
        if(e.key === 'Enter'){
            addExpense()
        }
           
    })

    expenseName.addEventListener('keypress', (e) => {
        if(e.key === 'Enter'){
            addExpense()
        }
           
    })

    function addExpense(){
        if(expenseAmount.value === '' || expenseName.value === ''){

            const noValueError = document.createElement('span')
            noValueError.innerHTML = 'Please enter expense details'
            noValueError.setAttribute('class', 'errors')
            expensesList.appendChild(noValueError)
            setTimeout(() => {noValueError.remove()},2000)
            expenseAmount.value = ''
            expenseName.value = ''

        }else if(isNaN(expenseAmount.value)){

            const validInputError = document.createElement('span')
            validInputError.innerHTML = 'Please enter a valid amount'
            validInputError.setAttribute('class', 'errors')
            expensesList.appendChild(validInputError)
            setTimeout(() => {validInputError.remove()},2000)
            expenseAmount.value = ''
            expenseName.value = ''

        }else{
            
            updateExpenses()
            render()
            console.log(expenses)
            expenseAmount.value = ''
            expenseName.value = ''
        }
    }

    function updateExpenses(){

        id = Date.now();
        name = expenseName.value;
        amount = expenseAmount.value;

        expenses.push({
            id : `${id}`,
            name : name,
            amount : amount
        })

        localStorage.setItem('expenses', JSON.stringify(expenses))
    }

    function render(){

        expenses.forEach(element => {
            const expenseItem = document.createElement('div')
            expenseItem.innerHTML = `<span> ${element.name} - $${element.amount}</span>
                                <button class="delete">Delete</button>`
            expenseItem.setAttribute('class', 'expense-items')
            expenseItem.setAttribute('data-expense-id',`${element.id}`)

            expensesList.appendChild(expenseItem)
        });
        displayTotal()

            
    }

    function displayTotal(){
        let totalExpense = expenses.reduce((accu, currentValue) => {
            return accu + parseFloat(currentValue.amount)
        },0)

        const totalExpenseMsg = document.querySelector('h2')
        totalExpenseMsg.innerHTML = `Total : $${totalExpense}`
        totalExpenseMsg.classList.remove('hidden')
        
    }

    expensesList.addEventListener('click', (e) => {
        if(e.target.tagName === 'BUTTON'){
            e.target.parentElement.remove()

            //updating the expenses
            expenses = expenses.filter( value => value.id !== e.target.parentElement.getAttribute('data-expense-id'))
            displayTotal()
            console.log(expenses)
        }
    })
})