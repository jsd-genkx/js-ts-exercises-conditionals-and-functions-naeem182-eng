let score = 95;

// if (score >= 90) {
//   console.log("Grade: A")
// } else if (score >= 80) {
//   console.log("Grade: B")
// } else if (score >= 70) {
//   console.log("Grade: C")
// } else {
//   console.log("Grade: F")
// }

switch(true){ case score < 70 : console.log("Grade: F")
break;
case score <= 79 : console.log("Grade C")
break;
case score <= 89 : console.log("Grade B ")
break;
default : console.log("Grade A")
}