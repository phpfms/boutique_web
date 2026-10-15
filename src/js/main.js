// Import our custom CSS
import '../scss/styles.scss'
import Products from './Products'

// Import all of Bootstrap's JS
// import * as bootstrap from 'bootstrap'

const main = document.getElementById('liste-produits')
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

const products = new Products()
products.getProducts().forEach((product) => {
	const element = document.createElement('p')
	element.textContent =
		'Titre: ' +
		product.titre +
		', Prix: ' +
		product.prix +
		' €, ' +
		'Catégorie: ' +
		product.categorie +
		', Description: ' +
		product.description
	main.appendChild(element)
})
