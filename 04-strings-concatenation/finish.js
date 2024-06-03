/** ЗАДАЧА 4 - Объединение строк
 *
 * 1. Объявите три переменные с значениями:
 *  - ваше имя
 *  - ваша фамилия
 *  - ваша профессия
 *
 * 2. Создайте еще одну переменную. Ее значение должно быть, например
 * "Меня зовут <Имя> <Фамилия> и я <Профессия>"
 *
 * 3. Выведите значение последней переменной в консоль
 */

const myName = 'Rita';
const myLastname = 'Sol';
const myProfession = 'Developer';

const aboutMe = `Меня зовут ${myName} ${myLastname} и я ${myProfession}`;

const aboutMe2 = 'My name is ' + myName + ' ' + myLastname + ', and i am ' + myProfession;

console.log(aboutMe)
console.log(aboutMe2)