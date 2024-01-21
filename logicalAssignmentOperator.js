// generally logical assignment operator refers to && || ?? and !
// example for logical OR
let name='';
// name = name || 'no name'; // this piece of line can also be written in short hand format
name ||= 'no name';
console.log(name);

// example for logical &&
let age=24;
// age = age && 'no defined age';
// the above code can be written as
age &&= 'no age defined'
console.log(age)

// example for nullish operator
let gender=null;
gender ??= 'no gender defined';
console.log(gender);


