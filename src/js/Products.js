import productsData from './../json/list_product.json'
import Product from './Product'

export default class Products {
	constructor() {
		this.products = productsData.map((data) => Object.assign(new Product(), data))
	}

	getProducts() {
		return this.products
	}
}
