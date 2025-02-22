const gals = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true
};
console.log(gals);

const keys = Object.keys(gals); // Corrected the object name here
console.log(keys);

const entries=Object.entries(gals);
console.log(entries);

// delete gals.isCleaned;

// const entries1=Object.entries(gals);
// console.log(entries1);

const {isCleaned,...shortGlass}=gals;
console.log(shortGlass);
