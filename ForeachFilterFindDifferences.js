const numbers = [1, 2, 1, 31, 3];
const result = numbers.forEach((n) => console.log(n));
const r = numbers.forEach((n) => console.log(n * 2));

const players = [75, 65,  92, 54];
const selects = players.filter((p) => p > 70);
console.log(selects);

const s = players.filter((p) => p > 80);
console.log(s);

const oddfriends=['nur','sawon','toha','asfy'];
const ss=oddfriends.filter(f=>f.length >3);
console.log(ss);

const s1=players.find(players=>players>80)
console.log(s1);
