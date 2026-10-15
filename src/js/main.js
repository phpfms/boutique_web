// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
// import * as bootstrap from 'bootstrap'

const buttonBasket = document.getElementById('basket-button')
const listBasket = document.getElementById('list-basket')

listBasket.style.display = 'none'

buttonBasket.addEventListener('click', (event) => {
	event.stopPropagation()
	listBasket.style.display = listBasket.style.display === 'none' ? 'block' : 'none'
})

document.addEventListener('click', () => {
	listBasket.style.display = 'none'
})
