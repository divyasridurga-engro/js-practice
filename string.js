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