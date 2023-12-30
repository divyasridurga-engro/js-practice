// spreading an array
// expands an array by extracting individual elements from an array

let array=[1,2,3,4,5];
let array1=[...array, 6,7,8]; // expands an array
// console.log(array1);
//  console.log(...array1) // extracts individual elements from an array   || op- 1 2 3 4 5 6 7 8


// example
let names=['divya','sri'];
let expandedArray=[...names, "durga", "tholeti"]; // here we are creating a new array not manipulating it
let anotherArray=["tholeti",...names, "durga"];

// console.log(expandedArray);
// console.log(anotherArray);
// it can be used to make a copy of an array
// it can also be used to merge two arrays

// it is applicable for strings too

let Name="divya";
// console.log(...Name)   // op- d i v y a

// iterables- datatypes that can be looped like arrays, strings, maps, sets
//  non- iterables - objects || spread operator is applicable for objects too
let obj={name:"divya", age:24}; 
// console.log({ gender:"female",married:false, ...obj});


// combining both the array and objects
let arrayObj=[...array1, {...obj}]  // [ 1, 2, 3, 4, 5, 6, 7, 8, { name: 'divya', age: 24 } ]
// console.log(arrayObj);
let objArray={...obj, arr:[...array1]}
// console.log(objArray)
// console.log(objArray.arr[0])


// function that returns a number of arguments passed to the function

function argumentNumberCount(...args){ // ...args is an rest a parameter that accepts any number of arguments passed when function called
    console.log(args.length)

}
argumentNumberCount(1,2,3,4,5,6,7,"jdfhg")



