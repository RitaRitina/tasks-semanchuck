/** ЗАДАЧА 63 - Зона видимости функции
 *
 * Что будет выведено в консоль?
 * Ответьте на вопрос без запуска кода
 */

// const b = 2
// let d = 15

// function myFn1(a) {
//   let b
//   let d = 10
//   myFn2(b)
// }

// function myFn2(a) {
//   let c = 5
//   console.log(a, b, c, d)
//   //a - undefined, b - 2, c - 5, d - 15
// }

// function myFn1(a) {
// 	function myFn2(a) {
// 		let c = 5
// 		console.log(a, b, c, d)
// 		//a - undefined, b - undefined, c - 5, d - 10
// 	}
// 	let b
// 	let d = 10
// 	myFn2(b)
// }



// myFn1()

function foo() {
	const x = 10;
	return {
		x: 20,
		bar: () => {
				console.log(this.x);
		},
		baz: function() {
				console.log(this.x);
		}
	}
}

const obj1 = abc();
obj1.bar(); // undefined
obj1.baz(); // 20

const obj2 = foo.call({x: 30});

let y = obj2.bar; 
let z = obj2.baz;
y(); // 30
z(); // undefined 

obj2.bar(); // 30
obj2.baz(); // 20
