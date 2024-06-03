/** ЗАДАЧА 12 - Создание объекта
 *
 * 1. Создайте объект с тремя свойствами:
 *  - name
 *  - surname
 *  - favoriteNumber
 *
 * 2. Выведите в консоль строку
 * "My name is <name> <surname> and my favorite number is <favoriteNumber>"
 */


const myObject = {
	name: 'Rita',
	surname: 'Sol',
	favoriteNumber: 5	
}

console.log(`My name is ${myObject.name} ${myObject.surname} and my favorite number is ${myObject.favoriteNumber}`)

const aboutMe = `My name is ${myObject.name} ${myObject.surname} and my favorite number is ${myObject.favoriteNumber}`;

console.log(aboutMe)