// for of loop
let array=["divya", "sri", "durga", "divya sri", "divya sri durga", "tholeti"];
for(var i of array.entries()){
    // for of loop iterates through the values of the array
    // now i want to print the index for the values in for of array
    let [index, value]=i;
    // console.log(`${index+1}: ${value}`);
    // array.entries() method returns array with index and the value
}

// for in loop
for(var i in array){
    console.log(i,array[i])
}

// new syntax for objects in es6

let name='divya';
let age=24;
let gender='female';
let obj={
name,
age,
gender,
printName(){
   return 'function print name'
}
}
console.log(obj.printName());
