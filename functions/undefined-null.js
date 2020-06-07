let name; // undefined, implicitly set

if (name === undefined) {
  console.log('Problem. Please provide a name.');
} else {
  console.log(name);
}

let nothing = function(num) {
  console.log(num);
}
console.log(nothing()) // leaving out function args --> they are implicitly set as undefined

// if nothing returned from a function, implicitly set as undefined, ex:
let result = nothing();
console.log(result);

// can also explicitly set something as undefined but not a great idea because hard to tell
// if it just was never set, or if it is actually intentionally an empty value

// instead use null
let age = 27;
age = null;
console.log(age);