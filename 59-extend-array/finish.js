/** ЗАДАЧА 59 - Расширение массивов
 *
 * 1. Создайте новый класс "ExtendedArray", который должен расширять встроенный "Array"
 *
 * 2. Добавьте в новый класс два пользовательских метода:
 *  - "sum" - он должен возвращать сумму всех элементов массива
 *  - "onlyNumbers" - должен возвращать новый массив,
 * который будет содержать только числа из исходного массива
 *
 * 3. Создайте несколько экземпляров нового класса "ExtendedArray"
 * и протестируйте оба метода "sum" и "onlyNumbers".
 *
 * 4. Убедитесь, что остальные методы массивов такие,
 * как "forEach", "map" также доступны
 */


// class ExtendedArray {
// 	constructor (array) {
// 		this.array = array
// 	}

// 	sum() {
// 		return this.array.reduce((acc, el) => acc + el, 0)
// 	}

// 	sum2() {
// 		return this.array.map((el) => el + 10)
// 	}

// 	onlyNumbers() {
// 		return this.array.filter(el =>  typeof el === 'number')
// 	}
	
// 	onlyNumbers2() {
// 		return this.array.forEach(el => console.log(el))
// 	}
// }

class ExtendedArray extends Array {

	sum() {
		return this.reduce((acc, el) => acc + el, 0)
	}

	onlyNumbers() {
		return this.filter(el =>  typeof el === 'number')
	}
}

// const sumArray = new ExtendedArray([5, 15, 10, 2, 4])
// const onlyNumbersArray = new ExtendedArray([5, true, 15, 'an', 10, '555', 2, 4])

const sumArray = new ExtendedArray(5, 15, 10, 2, 4)
const onlyNumbersArray = new ExtendedArray(5, true, 15, 'an', 10, '555')

onlyNumbersArray.forEach(el => console.log(el))

console.log(sumArray)
console.log(sumArray.sum())
// console.log(sumArray.sum2())


console.log(onlyNumbersArray)
console.log(onlyNumbersArray.onlyNumbers())
// console.log(onlyNumbersArray.onlyNumbers2())

