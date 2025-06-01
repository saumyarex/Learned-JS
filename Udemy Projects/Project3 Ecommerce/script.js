document.addEventListener('DOMContentLoaded',() => {
    const products = [
        {id : 1, name : 'Prodcut1', cost : '10.99'},
        {id : 2, name : 'Prodcut2', cost : '20.99'},
        {id : 3, name : 'Prodcut3', cost : '30.99'},
        {id : 4, name : 'Prodcut4', cost : '40.99'},
    ]
    

    //Add products to render
    const prodcutList = document.querySelector('#prodcut-list')
    
    products.forEach(product => {
        const item = document.createElement('div')
        item.classList.add('product')
        item.innerHTML = `${product.name} - $${product.cost} <button data-id="${product.id}">Add to Cart </button>`
        prodcutList.appendChild(item)
    })

    //Products gets added to shopping cart as user clicks
    const cartItems = document.querySelector('#cart-items')
    const totalDiv = document.querySelector('.hidden')
    const totalCost = document.querySelector('span')
    const empytCartMessage = document.querySelector('p')

    const cart = []
    prodcutList.addEventListener('click',(e)=>{
        if(e.target.tagName === 'BUTTON'){
            products.forEach((product) => {
                if(product.id === parseInt(e.target.getAttribute('data-id'))){
                    console.log('click')
                    const item = document.createElement('div')
                    item.setAttribute('id',`${product.name}`)
                    item.setAttribute('data-cost',`${product.cost}`)
                    item.innerHTML = `${product.name} - $${product.cost} <button>Remove</button>`
                    cartItems.appendChild(item)
                    cart.push(parseFloat(product.cost))
                }
            })

            console.log(cart)
            total()
            
        }
    })
    

    function total(){
        const total = cart.reduce((accumulator, currentValue) => accumulator + currentValue,0) - newCart.reduce((accumulator, currentValue) => accumulator + currentValue,0);
        totalBill(total)
    }

    function totalBill(total){

        if(isNaN(total)){
            empytCartMessage.setAttribute('class','visible')
            totalDiv.setAttribute('class','hidden')
        }

            console.log(total)

            totalDiv.setAttribute('class','total')

            totalCost.innerHTML = `Total : $${total.toFixed(2)}`

            empytCartMessage.setAttribute('class','hidden')
    }
    
    const checkout = document.querySelector('#checkout')

    checkout.addEventListener('click', (e)=>{
        alert('Payment successful, Thank you for shopping here')
    
    })


    const newCart = []
    cartItems.addEventListener('click', (e)=>{
        if(e.target.tagName === 'BUTTON'){
            console.log(`${e.target.parentElement.getAttribute('id')}`)
            document.querySelector(`#${e.target.parentElement.getAttribute('id')}`).remove();
            const removeCost = e.target.parentElement.getAttribute('data-cost')
            console.log(removeCost)
            newCart.push(`${e.target.parentElement.getAttribute('data-cost')}`)
            total()

        }
    })

}
)




