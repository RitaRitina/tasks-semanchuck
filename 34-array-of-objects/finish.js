/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const myArray = [
	{
		carBrand: 'audi',
		price: 2521655, 
		isAvailableForSale: true
	}, 
	{
		carBrand: 'bmw', 
		price: 2356987, 
		isAvailableForSale: false
	},
	{
		carBrand: 'volvo', 
		price: 654685,
		isAvailableForSale: true
	}
]

myArray.push({carBrand: 'lada', price: 50000, isAvailableForSale: true})

console.log(myArray)

const auto = {
	carBrand: 'honda',
	price: 554875,
	isAvailableForSale: false
}

myArray.push(auto)

console.log(myArray)