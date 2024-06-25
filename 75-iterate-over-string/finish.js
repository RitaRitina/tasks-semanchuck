/** ЗАДАЧА 75 - Перебор символов строки
 *
 * Подсчитайте количество строчных гласных букв в строке.
 * Гласные буквы - a, e, i, o, u
 */

let vowelsCount = 0
const vowels = ['a', 'e', 'i', 'o', 'u']

const str = 'Today is the best day of my life'

// for (let i = 0; i < str.length; i ++) {
// 	if (vowels.includes(str[i])) {
// 		vowelsCount++
// 	}
// }

for (const char of str) {
	if (vowels.includes(char)) {
		vowelsCount += 1
	}
}

// Напишите код здесь

console.log(vowelsCount)
// 9
