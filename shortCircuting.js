// logical OR operator (returns true even one of the value is true) - use cases

// the below syntax is called short circuting
console.log(3|| '')  // prints 3 , since the first value is the truthy value it doesnot evaluate the second one
console.log("divya" || 'durgaa') // prints divya, since it is the first truthy value
console.log(0|| ''||'divya') // prints divya, since 0 and '' are falsy values
console.log(undefined|| false || 0|| null) // prints null, since all the values before are null
// true aiyye daka chusi aa truthy value ni return chesthadi okavela mundhe truthy value osthe inka next step ki velladhu

// it can also be used for setting default values

let name;

// name= name ? name:"no name given " // terinary operator for validating

name= name || 'no name given'

console.log(name)   // prints - no name given since it is the default value



// logical AND operator (retruns true only if all the values are true)
console.log(3 && 'divya' && undefined);  // it returns the value which is false
// AND operator usually checks whether all the values are true
// if the value is true then it validates for next value and if the value is false then it returns
console.log(null && 'divyaa' && 2) // prints null, since it is the first falsy value



// nullish coalescing

let petName=null;
petName= petName ?? 'divyaa' // prints the static value given only when the value is null or undefined

console.log('petName',petName)





