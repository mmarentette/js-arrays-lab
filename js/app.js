// log something to make sure the file is being loaded
console.log('My app.js is being run!');

/*
Exercise 1:
  - Define an empty array named foods
*/

// Exercise 1 has been completed for you...

const foods = [];

console.log('Exercise 1 Result:\n', foods);

/*
Exercise 2:
  - Add the strings 'pizza' & 'cheeseburger' to the foods array such that 'pizza' comes before 'cheeseburger'.
*/

// Complete Exercise 2 below...

// Push method adds item(s) to the end of an array; in this case, 'pizza' and 'cheeseburger'
foods.push('pizza', 'cheeseburger');

// Output updated foods array to the console
console.log('Exercise 2 Result:\n',  foods);

/*
Exercise 3:
  - Add the string 'taco' to the foods array so that 'taco' is the first food in the array.
*/

// Complete Exercise 3 below...

// Unshift method adds item(s) to the beginning of an array; in this case, 'taco'
foods.unshift('taco');

// Output updated foods array to the console
console.log('Exercise 3 Result:\n', foods);

/*