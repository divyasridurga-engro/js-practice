// rest parameter is same as spread operator incase of syntax but does the oppsite functionality 

// spread operator - unpack all the elements form an array

// rest operator- pack all the elements an forms a new array

// syntax will be the same for both rest operator and spread operator  (...)

// syntax that is used at RHS side of the = is spread operator

// syntax that is used LHS of the = is rest operator

// example

let array=[1,2,3,4,5,6,7];

let [one, two, ...others]=array;   // ...others will return an array

// collects the elements that are unused and creates an array (while destructuring)
// it doesnot include any skipped elements 
//and it will be implemented always after the last variable
// it should always be the last one  and there should be only one destructuring 

console.log(one, two, others);   // op- 1 2 [ 3, 4, 5, 6, 7 ]

//  rest parameters for objects

let {name, ...wasteFellow}={name:'divya', age:24, gender:'female'};

console.log(wasteFellow) // op-   { age: 24, gender: 'female' }
console.log(name) //  divya

// want only "gender" key from the object and rest of them in object

let obj={
    full_name:"divya sri",
    age:24,
    gender:'female'
}

let {gender,...rest }= obj;
console.log(rest, gender) 


// rest parameters in functions
// when there are multiple arguments that need to be passed inside function we can use rest parameters

function restUsage(...args){
    console.log(args)  // [ 'divya', 'sri', 'durgaa', 'tholeti' ]

}
restUsage("divya", "sri", "durgaa", "tholeti");

// suppose you want only one value in the function and rest of them in the array

function firstParamRestUsage(firstVar, ...remainingVar){  // rest parameter should always be at the last
    console.log(firstVar);
    console.log(remainingVar)
}

firstParamRestUsage('hii','hello', 'namasthe');

// since the syntax is same for both rest and spread
// (...) which are used for the variables are called rest 
// (...) which are used for the values are called spread






