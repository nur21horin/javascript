/**
 * a.var let const
 * 2.default parameter
 * 3.template string
 * 4.arrow function
 * 5.destructuring and Spread operator
 * Object.keys ,Object.values, Object.entries
 * for of used in array and string
 * for in used in object
 */
const a = 56;
const numbers = [56, 7, 8];
const person = {
  name: "Sakib khan",
};
if (true) {
}

const square = (x) => x * x;
const sum = (a, b) => a + b;

const { age, z, name, ...others } = {
  x: 2,
  y: 5,
  z: 3,
  name: "object",
  age: 23,
};

const [first, second, third, ...remaining] = ["Nur", "MOdhu", "kodhu"];

const data = [{ id: 1, name: "Abul", address: "Mirput" }];
console.log(data[0].id,data[0].name);
