// Create a function that receives 3 numbers in 3 parameters and returns the sum of them

function sum(n1, n2, n3) {
  return n1 + n2 + n3;
}
console.log(sum(3, 2, 2));

// Create a function that receives a string and returns if the length of that string is even or odd

function checkEveOrOdd(string) {
  if (string.length % 2 === 0) {
    console.log("Its even");
  } else {
    console.log("It is odd");
  }
}

checkEveOrOdd("pedro");

// Create a function that receives a name in lowercase and returns the same name capitalized (example: carlos -> Carlos)

function capitalize(name) {
  let nameCapitalized = name[0].toUpperCase() + name.slice(1);
  console.log(nameCapitalized);
}

capitalize("pedro");
