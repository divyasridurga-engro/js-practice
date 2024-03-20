// sets- data structures
// sets is a collection of unique values that doesn't contain any duplicate values

let newset= new Set(['divya', 'sri', 'durga', 'divya', 'durga']);
for(var i of newset){
    // console.log(i, i.length)   // sets can be iterable
}
// console.log(newset);
let newset1= new Set('divya')
// console.log(newset1); // loop and then find the length
// console.log(newset.add('tholeti'))
// console.log(newset.delete('sri'), newset) // delete will return the true or false
// console.log(newset.has('divya')) // has method returns true if the value exists
// console.log(newset.entries()); 
// entries returns an object with arrays ([value, value])
// the repeated elements in the sets represents the key taken from itself
// for(var [key,value] of newset.entries()){
//     console.log(key,value)
// }
for(var i in  newset.entries()){
    // console.log(i,'<<< in operator')
}

// use case
let array=['developer', 'tester', 'architect', 'pmo', 'developer', 'tester']
// i want to remove all the duplicate elements in the above array
// console.log(...new Set(array))
let newArray=[...new Set(array)]
// console.log([...new Set(array)]); // removed all the duplicate elements and created a new array

let result= new Map([
    ['name','divya'],
    ['age',24]
])



// array.from method 
// let data='divya'
// console.log(Array.from(data));
// console.log(Array.from([{"name":"divya", "age":24}]))

// Array.from({length:20}, (_,index)=>{
//     console.log(+index+1)
// })
// let res= Array.from({length:20}, ()=>{
//     return "divyaa";
// });

// console.log(res);

// creating a list of 20 numbers
// Array.from({length:20}, (_, index)=>{
//     console.log(index+1)
// })


// array reduce method for increasing the element by 1
let arr=[1,2,4,5,7,8];
let data= arr.reduce((prev, curr)=>{
    prev.push(curr+1)
    return prev
},[]);

console.log(arr,'\n',data );

// sum of all the numbers in array using reduce
let sum= arr.reduce((acc, curr)=>{
    return acc+ curr
},0);
console.log(sum);

let Arr=['divyaa', 'srii', 'durgaa', 'divyaa', 'divyaa'];
let res=Arr.reduce((x, arr)=>{
    if(arr=='divyaa'){
        x.push(arr) 
    }
    return x
}, [])
console.log(res);