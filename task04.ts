// TODO-04: Write if/else if to check and print:
// Divisible by both 3 and 5 → "FizzBuzz"
// Divisible by only 3 → "Fizz"
// Divisible by only 5 → "Buzz"
// Otherwise → "Not divisible by 3 or 5"

// TODO BONUS: Rewrite with if

const num = 4;
const isDevisible3 = num % 3 == 0 ;
const isDevisible5 = num % 5 == 0 ;

// if(num === 0){console.log("You are No. 0 Plase stay away from us")}
// else if (num % 3 === 0 && num % 5 === 0) {
//     console.log("FizzBuzz")
// } else if (num % 3 === 0) {
//     console.log("Fizz")
// } else if (num % 5 === 0) {
//     console.log("Buzz")
// } else {
//     console.log("Not divisible by 3 or 5")
// }

switch(true){ case isDevisible3 && isDevisible5 : console.log("Fizzbuzz")
break;
case isDevisible3 : console.log("Fizz")
break;
case isDevisible5 : console.log("Buzz")
break;
default : console.log("Not divisible by 3 or 5")
}