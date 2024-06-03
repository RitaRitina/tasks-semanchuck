/** ЗАДАЧА 14 - Строка заглавными буквами
 *
 * 1. Создайте переменную и присвойте ей любую строку
 *
 * 2. Убедитесь что значение этой переменной НЕ является экземпляром String
 * Используйте для этого оператор "instanceof"
 *
 * 3. Убедитесь что значение этой переменной имеет тип "string"
 *
 * 4. Создайте другую переменную и ее значением должно быть значение
 * первой переменной заглавными буквами
 *
 * 5. Выведите в консоль значение второй переменной
 */


const myString = 'orange'
const myString2 = new String(myString)

console.log( myString instanceof String) 
console.log( myString2 instanceof String)

console.log( typeof myString)
console.log( typeof myString2)

const newString = myString.toUpperCase()
const newString2 = myString2.toUpperCase()

console.log(myString)
console.log(myString2)

console.log(newString)
console.log(newString2)