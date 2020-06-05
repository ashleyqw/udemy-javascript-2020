// Function parts: input/argument, code, output/return value

let greetUser = function() {
  console.log('Welcome user!');
}
greetUser();
greetUser();
greetUser();

let square = function(num) {
  return num * num;
}
console.log(square(3));

let convertFahrenheitToCelsius = function(fah) {
  return 5 / 9 * (fah - 32);
}
console.log(convertFahrenheitToCelsius(32));
console.log(convertFahrenheitToCelsius(68));