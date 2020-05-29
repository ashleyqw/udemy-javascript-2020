/* BOOLEAN OPERATORS
===   equal
!==   not equal
<     less than
<=    less than or equal to
>     greater than
>=    greater than or equal to
&&    logical and
||    logical or
*/

let temp = 91;
let isFreezing = temp === 31;
console.log(isFreezing);
if (temp < 40) {
  console.log('It is cold. Far too cold.');
} else if (temp < 80) {
  console.log('It is real pleasant. Live your life.');
} else {
  console.log('It is steamy out there.');
}

let age = 21;
let isChild = age <= 7;
let isSenior = age >= 65;
console.log(isChild);
console.log(isSenior);

let isGuestOneVegan = true;
let isGuestTwoVegan = false;
if (isGuestOneVegan && isGuestTwoVegan) {
  console.log('Ahhh only vegans');
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log('Need some vegan options');
} else {
  console.log('Give em the meats');
}