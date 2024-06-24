/** ЗАДАЧА 62 - Разница в объявлении функций
 *
 * 1. Объясните разницу между двумя вариантами объявления функций
 *
 * 2. Покажите эту разницу, добавив дополнительный код под функциями
 *
 * 3. Также вызовите обе функции
 */

console.log(firstFunction(10, 10))

function firstFunction(a, b) {
	return a + b
}

firstFunction = 352

// console.log(firstFunction(10, 10))

// console.log(secondFunction(20, 20))

const secondFunction = function (a, b) {
	console.log(arguments)
	return a + b
}

// secondFunction = 325   //Assignment to constant variable.

console.log(secondFunction(20, 20))