/** ЗАДАЧА 23 - ИЛИ и И операторы
 *
 * Что будет выведено в консоль?
 */

console.log(3 || (true && null) || false) 
// 1. сначала будет выполняться выражение в скобкахб его результат - null
// 2. следуя ассоциативности оператора || - слева направо результатом будет 3


