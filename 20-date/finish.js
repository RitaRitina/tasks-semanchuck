/** ЗАДАЧА 20 - Дата
 *
 * 1. Создайте переменную и присвойте ей текущее время в миллисекундах
 *
 * 2. Выведите значение в консоль
 */


const time = new Date()

const newTime = time.getTime()
const newTime2 = time.getTimezoneOffset()
const newTime3 = time.getMonth()
const newTime4 = time.getUTCDate()
const newTime5 = time.getFullYear()

console.log(time)
console.log(newTime)
console.log(newTime2)
console.log(newTime3)
console.log(newTime4)
console.log(newTime5)