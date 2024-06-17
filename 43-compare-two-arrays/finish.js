/** ЗАДАЧА 43 - Сравнение двух массивов
 *
 * 1. Создайте функцию "areArraysEqual" с двумя параметрами "firstArray" и "secondArray"
 *
 * 2. Верните "true" если два массива равны, а именно:
 *  - имеют одинаковое количество элементов
 *  - все элементы совпадают, например, firstArray[0] === secondArray[0] и т. д.)
 *
 * 3. В противном случае верните "false"
 *
 * ВАЖНО: Исходите из того, что массивы содержат элементы примитивных типов
 */

const a = [1, 2, 3]
const b = [1, 2, 3]

console.log(a === b) // false (Почему?) сравниваются ссылки на обьектыБ а не их содержимое

const c = [2, 1, 3]
const d = [1, 2, 3, 4]

const areArraysEqual = (firstArray, secondArray) => {
	// проверка на равенство массивов по количеству элементов
	if (firstArray.length === secondArray.length 
		&& firstArray.every((_el, index) => firstArray[index] === secondArray[index])) {
			return true
	} 
	return false
}

console.log(areArraysEqual(a, b)) // true
console.log(areArraysEqual(a, c)) // false
console.log(areArraysEqual(a, d)) // false
