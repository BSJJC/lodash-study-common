const _ = require("lodash");

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const newArr = _.chunk(arr, 1);
// console.log(newArr[0]);


// const arr = _.compact([1, null, false, undefined, {}, [], NaN, 9, "abc", new Object({ name: "Joe" })])
// console.log(arr);


// const arr1 = [{ msg: "OK" }, { msg: "OK" }];
// const arr2 = [2, 3];
// const newArr = _.concat(arr1, arr2);
// console.log(newArr);


// const arr1 = [1, 2, 3];
// const arr2 = [2, 3, 4, 1];
// const newArr = _.difference(arr1, arr2);
// console.log(newArr);


const arr1 = [3.1, 4.8, 9];
const arr2 = [4.3, 5];
const newArr = _.differenceBy(arr1, arr2, Math.floor);
console.log(_.differenceBy([{ 'y': 2 }, { 'y': 1 }], [{ 'x': 2 }], 'y'));
