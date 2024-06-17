/** ЗАДАЧА 42 - Проверка сортировки массива
 *
 * 1. Создайте функцию "arraySortInfo" с одним параметром - "inputArray"
 *
 * 2. Если хотя бы один элемент в массиве не является числом - вернуть "Некоторые элементы не являются числами"
 *
 * 3. Если числа в массиве отсортированы по возрастанию - вернуть "Массив отсортирован по возрастанию"
 *
 * 4. Если числа в массиве отсортированы по убыванию - вернуть "Массив отсортирован по убыванию".
 *
 * 5. Если массив не отсортирован - вернуть "Массив не отсортирован"
 */

const a = [5, 'abc', 10, 1]
const b = [4, 10, 14, 25, 25, 50]
const c = [150, 132, 80, 40]
const d = [15, 26, 10, 23, 85]

const arraySortInfo = (inputArray) => {
	// 1) проверка евери на число
	// 2) если евери = false, то выведем в коносль
	const isAllNumber = inputArray.every((el) => typeof el === 'number')
	if (!isAllNumber) {
		return 'Некоторые элементы не являются числами';
	}
	
	const isAllIncrease = inputArray.every((el, index, array) => index > 0 ? el >= array[index - 1] : true)
	if (isAllIncrease) {
		return 'Массив отсортирован по возрастанию'
	}

	const isAllDecrease = inputArray.every((el, index, array) => index > 0 ? el <= array[index - 1] : true)
	if (isAllDecrease) {
		return 'Массив отсортирован по убыванию'
	}

	if (!isAllIncrease && !isAllDecrease) {
		return 'Массив не отсортирован'
	}
}

console.log(arraySortInfo(a)) // Некоторые элементы не являются числами
console.log(arraySortInfo(b)) // Массив отсортирован по возрастанию
console.log(arraySortInfo(c)) // Массив отсортирован по убыванию
console.log(arraySortInfo(d)) // Массив не отсортирован

/**
 * ПОДСКАЗКИ
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * Подсказка 1: Используйте метод массивов "every"
 * Подсказка 2: Вы должны использовать два параметра в колбэк функции "element", "index"
 * Подсказка 3: Каждый элемент массива, кроме первого, следует сравнивать с предыдущим
 */
