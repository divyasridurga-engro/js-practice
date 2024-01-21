// optional chaining operator is used to check whether the key exists before accessing the values
// example
let obj={
    name:'divya',
    age:24,
    gender:'female',
    marital_status:false,
    additional_information:{
        stay:'beeramguda',
        work_place:'hitech city',
        siblings:'no',
        single:'yes'
    }
}

// what if the key gender doesnot exist
// when we are not sure about the key exists or not we can go with optional chaining
console.log(obj?.gender?.length ?? 'no key exists');
 // it will return undefined insted throwing an error or else we can pass default value
console.log(obj?.additional_information?.stay)

// it will be same for arrays too
let array=[null, 'technologies', 'pvt', 'ltd'];
console.log(array?.[0] ?? 'no value');




