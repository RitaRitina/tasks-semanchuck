/** ЗАДАЧА 79 - Перебор свойств объекта
 *
 * 1. Создайте функцию "sumObjectValues", которая будет суммировть
 * все значения свойств, которые являются числами.
 *
 * 2. Сумму чисел необходимо вернуть из функции
 *
 * 3. Убедитесь, что итерация выполняется только
 * по собственным свойствам объекта
 */

const objectWithNumbers = {
  a: 10,
  b: 20,
  c: 'string',
  d: 12,
}

const sumObjectValues = (objectWithNumbers) => {
	let arrayNumbers = []

	for (key in objectWithNumbers) {
		if (objectWithNumbers.hasOwnProperty(key) && typeof objectWithNumbers[key] === 'number') {
			arrayNumbers.push(objectWithNumbers[key])
		}
	}
	console.log(arrayNumbers)
	return arrayNumbers.reduce((sum, num) => sum + num, 0)
}


// Создайте функцию здесь

const result = sumObjectValues(objectWithNumbers)
console.log(result)
//42
