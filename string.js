//  strings

// finding out whether the seat is middle or corner based on the ticket number of an plane

function findoutSeat(seat){
// B & E refers to middle seat 
let seatNum=seat.slice(-1);   // this is how we can use the slice(-1) to get the last element
if(seatNum=='B'|| seatNum=='E'){
    console.log('you got the middle seat')
}
else{
    console.log('you got the window seat');
}
}

findoutSeat('76F')

// convert all the first letters to uppercase 
// divyaSriDurga
// divyasri
// divyaSri
// divyaSRI

let word1= 'divyaSriDurga';
let lowercaseWord1= word1.toLowerCase();
let finalword1=lowercaseWord1[0].toUpperCase()+ lowercaseWord1.slice(1);
console.log(finalword1);

let word2='divyasri';
let finalword2= word2[0].toUpperCase()+ word2.slice(1);
console.log(finalword2);

let word3='divyaSri';
let lowercaseword3=word3.toLowerCase();
let finalword3= lowercaseword3[0].toUpperCase()+ lowercaseword3.slice(1)
console.log(finalword3);

let word4= 'divyaSRI';
let lowercase4= word4.toLowerCase();
let finalword4= lowercase4[0].toUpperCase()+ lowercase4.slice(1)
console.log(finalword4);

let w='ThoLeti';
let c= w.toLowerCase();
let f= c[0].toUpperCase()+ c.slice(1);
console.log(f);

// ******trim() method can be used to remove all the white spaces form the string**********;

// lets comapare emails 
let email='divyasridurga.t@gmail.com';
let inputEmail=' divYAsRi Durga . t @gMail.Com';
let x= inputEmail.toLowerCase();
console.log(x.trim()); // trim method removes white spaces only at the starting or the end of the string not in between
console.log(inputEmail.toLowerCase().trim(), '\n', email==inputEmail.toLowerCase().trim());


// incase if we want to remove white space from the middle of the text we can use replace method
// by default replace method works only for the first occurance incase to replace all the matched conditions /g regular expression will work
console.log(inputEmail.toLowerCase().replace(/ /g,''));

// methods in js that returns boolean
// includes() check whether the letter or word is included in a string, if yes it returns true else false
// startsWith() check whether the word starts with given letter or word, if yes it returns true else false
// endsWith() check whether the word ends with given letter or word, if yes it returns true else false


//  split method
// split method splits string with the divider string and returns an array
let str='Divy-asri-durga';
console.log(str.split('-')[1])  // [ 'Divy', 'asri', 'durga' ]
str= 'Divyasridurga';
console.log(str.split('-')?.[1] ||'')  // [ 'Divyasridurga' ] str.split('-')[1] - undefined
// incase if doesnt find any divider string to split it returns string in an array;


// join method
// join method joins the string with the divider string 
// join prototype is used on arrays which returns string
let j=['divya', 'sri', 'durga'];
console.log(j.join(' '));

// concat method - it is used to concat 2 arrays or strings
// we can also add a divider strings which is added between all the concatenated strings

let cs='divya';
let cs2='sri';
let cs3='durga';

console.log(cs.concat(cs2, cs3))  // divyasridurga
// if i want to specify divider string or delimeter
console.log(cs.concat('-', cs2,'-', cs3));

// convert all the first letters to uppercase in a string

function convertUpper(name){
    let namesplit= name.split(' ');
    let arr=[]
    for(let n of namesplit){
        // arr.push(n[0].toUpperCase()+ n.slice(1));
        //another method of converting the first letter to uppercase
        arr.push(n.replace(n[0], n[0].toUpperCase()))
    }
   let finalName= arr.join(' ')
    console.log(finalName)
}
convertUpper('divya sri durga')
convertUpper('engro technologies')

// convert strings with snake case to camel case 

let xy=`Engro_technologies
     Divya_sri_durga
     Associate_Development_Engineer
     Divya_Sri_Durga
     Associate_Development_engineer
     Divya_sri_durga
     Associate_Development_Engineer
     Divya_Sri_Durga
     Associate_Development_engineer`;
let z=xy.split('\n');
for(var i in z){
let a=z[i].trim().toLowerCase().split('_');
let [one,...two]=a;
let arr=[]
for(var s of two){
    arr.push(s.replace(s[0], s[0].toUpperCase()))
}
arr.unshift(one);
console.log(arr.join('').padEnd(30)+ `${'🧠'.repeat(+i+1)}`);
}

