const actor = {
  name: "Ananta",
  age: 30,
  phone: "01301084180",
};



const { phone, age } = actor;

console.log(phone,age);

// const phone = actor.phone;
// const name = actor.name;
// const age = actor.age;

// console.log(actor.name);
// console.log(name);
// console.log(age);
// console.log(phone);


function doubleIt(a,b){
    return [a*2,b*2];
}

const [first,second]=doubleIt(6,9);

console.log(first,second);