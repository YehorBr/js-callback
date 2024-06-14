const quantityOfClicks = document.querySelector('.quantity-of-clicks')

let quantity = 0; 

document.addEventListener('click', onClick =>{
    quantity += 1

    quantityOfClicks.textContent = `Кількість кліків: ${quantity}`
})