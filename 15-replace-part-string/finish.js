/** ЗАДАЧА 15 - Замена части строки
 *
 * 1. Создайте переменную и присвойте ей строку "Good Morning"
 *
 * 2. Замените "Morning" на "Evening" и присвойте результат новой переменной
 *
 * 3. Выведите значение второй переменной в консоль
 */

// const myString = 'Good Morning'

// const newString = myString.replace('Morning', 'Evening')

// console.log(newString)


const a = /morning/gi

const myString = 'Good Morning'

const newString = myString.replace(a, 'Evening')

console.log(newString)