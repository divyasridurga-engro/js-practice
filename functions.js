// default values in functions

function getName( name,age, gender){ // parameters without passing default values
    return {
        name,
        age,
        gender
    }
}

console.log(getName()); // { name: undefined, age: undefined, gender: undefined }
// since there are no default values assigned to the function parameters it returns undefined

//  this case can be handled by passing default values to the parameters, so that when there is no value passed in to function it takes up default value

// ex
function getname(name='', age=0, gender=''){
    return {
        name,
        age,
        gender
    }
}

console.log(getname('divya', 24, 'female')); // { name: 'divya', age: 24, gender: 'female' } in case we pass a value

//  incase if we dont pass a value
console.log(getname('divya'));  // { name: 'divya', age: 0, gender: '' }
//  in above function it returns the default value we passed

// objects are of reference type , which are mutable where are strings are immutable
// if any manipulation done on object(copied obj) by creating a copy of the original value it will impact the original object since it doesnt create any memory for copied value
// there are 2 types of functions , first class funtions and higher order functions
// first class function refers- functions are considered as values just as objects
// higher order functions are -when a functions that is called inside the function , the parent func will ne higher order


// example for higher order function

let convertToUpperCase = function(str){
 return str.toUpperCase();
};

let getpersonNameame= function(str, fn){
   console.log(fn(str));
}
// console.log(getName('divya', convertToUpperCase));
getpersonNameame('divya', convertToUpperCase);

// in the above example getpersonNameame is an higher order function since it calls the another function
// we are passing function as an argument in the getpersonNameame function
// js has built-in higher order functions which are addEventlistener , it calls the function when any event is triggered



// closure functions - functions returing another functions

// let greet= function(greeting){
//     return function(name){
//         console.log(`${greeting} ${name}`);
//     }
// }

// let xyz= greet('hey')('divyaaa');
// console.log(xyz);

let GREET= (greeting)=>{
    return (name)=>{
        console.log(`>>>>>${greeting} ${name}`);
    }
}
GREET('hey')('divyaa')