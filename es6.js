// // /**
// //  * a.var let const
// //  * 2.default parameter
// //  * 3.template string
// //  * 4.arrow function
// //  * 5.destructuring and Spread operator
// //  * Object.keys ,Object.values, Object.entries
// //  * for of used in array and string
// //  * for in used in object
// //  */
// // const a = 56;
// // const numbers = [56, 7, 8];
// // const person = {
// //   name: "Sakib khan",
// // };
// // if (true) {
// // }

// // const square = (x) => x * x;
// // const sum = (a, b) => a + b;

// // const { age, z, name, ...others } = {
// //   x: 2,
// //   y: 5,
// //   z: 3,
// //   name: "object",
// //   age: 23,
// // };

// // const [first, second, third, ...remaining] = ["Nur", "MOdhu", "kodhu"];

// // const data = [{ id: 1, name: "Abul", address: "Mirput" }];
// // console.log(data[0].id, data[0].name);

// // const products = {
// //   count: 5000,
// //   data: [
// //     { id: 1, name: "lenovo", price: 6500 },
// //     { id: 2, name: "Maxkbook", price: 31991 },
// //   ],
// // };

// // console.log(products.data[1]);

// // const user = {
// //   id: 501,
// //   name: "Shoriful Raj",
// //   address: {
// //     street: {
// //       first: "54/1 uttor side",
// //       second: "poribag er goli",
// //       third: "No dorai",
// //     },
// //     city: "Dhaka",
// //   },
// // };
// //? is a optional chaining=>if the next statement is exit then go or not
// console.log(user.address.street?.first);

const numb = [5, 4, 6, 7, 10];

// const doubled = [];

// for (const num of numb) {
//   const double = num * 2;
//   doubled.push(double);
// }

// console.log(doubled);

function doubleItt(num) {
  console.log("Num now", num);
  return num * 2;
}
const result = numb.map(doubleItt);
console.log(result);

const abc = [10, 20, 20, 30];
const doubled = abc.map((n) => n * 2);
console.log(doubled);
const fiveBonus = abc.map((n) => n + 5);
console.log(fiveBonus);
const divide=abc.map(n=>n/2);
console.log(divide);

const firedns=['tom','rafa','chondis'];
const length=firedns.map(f=>f.length);
console.log(length);
console.log(first=firedns.map(f=>f[0]));
