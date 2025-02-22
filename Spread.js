const max = Math.max(9, 24, 292, 2919, 19, 199, 292, 3);
console.log(max);
const number = [3, 45, 2, 1, 3, 34];
const arrayMax1 = Math.max(...number);
console.log(arrayMax1);

//use spread operator to copy

const nums=[4,5,87,0];
const nums2=nums;
nums2.push(12);
console.log(nums2);
console.log(nums);
