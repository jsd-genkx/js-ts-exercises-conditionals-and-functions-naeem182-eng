// TODO-02: Use if/else to check if it's a number
// (hint: typeof or isNaN)

const userInput = "15";
// Try changing to "hello", 10, null, NaN

console.log(typeof userInput);

// if (typeof userInput === "number" && !isNaN(userInput)){
//     console.log("True:You are The number")} else
// {console.log("False: You are not number")};

switch(true){ case typeof userInput === "number" && !isNaN(userInput) : console.log("True:You are The number")
break;
default : console.log("False: You are not number")
}