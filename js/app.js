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
Exercise 4:
  - Access the string 'pizza' (based upon its known position) in the foods array and assign to a variable named favFood.
*/

// Complete Exercise 4 below...

// Declare a new variable 'favFood' and assign it the element of the foods array at index 1 (i.e. the second element)
const favFood = foods[1];

// Output the value of the favFood variable to the console
console.log('Exercise 4 Result:\n', favFood);

/*
Exercise 5:
  - Insert the string 'tofu' in the foods array between 'pizza' & 'cheeseburger'
*/

// Complete Exercise 5 below...

// Splice method starts at index 2 (after 'pizza'), deletes 0 elements, and inserts a new element 'tofu'
foods.splice(2, 0, 'tofu');

// Output updated foods array to the console 
console.log('Exercise 5 Result:\n', foods);

/*
Exercise 6:
  - Replace the string 'pizza' in the foods array with the strings 'sushi' & 'cupcake'.
*/

// Complete Exercise 6 below...

// Splice method starts at index 1 (after 'taco'), deletes 1 element ('pizza'), and inserts two new elements ('sushi' & 'cupcake')
foods.splice(1, 1, 'sushi', 'cupcake');

// Output updated foods array to the console
console.log('Exercise 6 Result:\n', foods);

/*
Exercise 7:
  - Use the slice method on the foods array to create a new array containing 'sushi' & 'cupcake'.
  - Assign the new array to a variable named yummy.
*/

// Complete Exercise 7 below...

// Declare a new variable (yummy) and assign it to elements in the foods array starting at index 1 ('sushi'), up to but not including index 3 ('tofu')
const yummy = foods.slice(1, 3);

// Output the value of the yummy variable to the console
console.log('Exercise 7 Result:\n', yummy);

/*
Exercise 8:
  - Using the indexOf method on the foods array, assign the index of the 'tofu' string to a variable named soyIdx.
*/

// Complete Exercise 8 below...

// Declare a new variable (soxIdx) and assign it to the index of the 'tofu' element (index 3)
const soyIdx = foods.indexOf('tofu');

// Output the value of the soyIdx variable to the console
console.log('Exercise 8 Result:\n', soyIdx);

/*
Exercise 9:
  - Assign to a variable named allFoods the result of joining the strings in the foods array such that the result is the following single string:
    'taco -> sushi -> cupcake -> tofu -> cheeseburger'
*/

// Complete Exercise 9 below...

// Join method concatenates all elements of the foods array into a single string, separated by the argument in the parentheses (in this case ' -> ')
const allFoods = foods.join(' -> ');

// Output the value of the allFoods variable to the console
console.log('Exercise 9 Result:\n', allFoods);

/*
Exercise 10:
  - Assign a boolean to a variable named hasSoup depending upon whether or not the foods array includes the string 'soup'.
*/

// Complete Exercise 10 below...

// Declare a new variable (hasSoup) and assign it to true or false using the includes method, which checks whether the value 'soup' is found in the foods array
const hasSoup = foods.includes('soup');

// Output the value of the hasSoup variable to the console
console.log('Exercise 10 Result:\n', hasSoup);

/*
Exercise 11:
  - Use the forEach method to iterate through the provided nums array and add each odd number to a new array named odds.
  - Hint: Initialize the odds variable to an empty array before the iteration.
*/

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

// Complete Exercise 11 below...

// Declare a new variable odds and assign it to an empty array
const odds = [];
// forEach method executes the provided function for each element in the nums array; this function shovels the num onto the odds array if the num is not evenly divisible by 2 (i.e. it is odd) using a one-line if statement
// TDIL (from Jim's answer), we can simply use num % 2 instead of num % 2 !== 0 for the conditional in the if statement because if num % 2 evaluates to 0, then 0 is falsy and the if statement will not execute the code block
nums.forEach(function(num) {
  if (num % 2) odds.push(num);
});

// Output the updated odds array to the console
console.log('Exercise 11 Result:\n', odds);

/*
Exercise 12:
  - Use the forEach method to iterate through the same nums array and add the number to **one** of the following arrays: fizz, buzz or fizzbuzz - based upon the following:
  	- Add to the fizzbuzz array if the number is evenly divisible by 3 & 5.
  	- Add to the fizz array if the number is evenly divisible by 3.
  	- Add to the buzz array if the number is evenly divisible by 5.
*/

// Complete Exercise 12 below...

// Declare three new variables (fizzbuzz, fizz, buzz) and assign them to empty arrays
const fizzbuzz = [];
const fizz = [];
const buzz = [];

// forEach method executes the provided function for each element in the nums array; this function shovels the num onto the: fizzbuzz array if num is not evenly divisible by 3 & 5; fizz array if num is evenly divisible by 3 or buzz array if num is evenly divisible by 5, by using an if statement with three branches
nums.forEach(function(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    fizzbuzz.push(num);
  } else if (num % 3 === 0) {
    fizz.push(num);
  } else if (num % 5 === 0) {
    buzz.push(num);
  };
});

console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);

/*
Exercise 13:
  - Given the below numArrays array of arrays (two-dimensional array), assign the last nested array to a variable named numList.
  - Assume you don't know how many nested arrays numArrays contains.
*/

const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];

// Complete Exercise 13 below...

// Declare a new variable numList and assign it to the last element in the numArrays array (in this case, the last element is another array!); we access this element through its index by finding the length of the 2D array and subtracting 1 since arrays are 0-based
const numList = numArrays[numArrays.length - 1];

// Output the numList array to the console
console.log('Exercise 13 Result:\n', numList);

/*
Exercise 14:
  - Given the above numArrays array, access the number 66 and assign to a variable named num.
*/

// Complete Exercise 14 below...

// Declare a new variable num and assign it to... first, access the nested array at index 2 ([45, 66]), and second, access the nested array's element at index 1 (66)
num = numArrays[2][1];

// Output the value of the num variable to the console
console.log('Exercise 14 Result:\n', num);

/*
Exercise 15:
  - Given the above numArrays array, use nested forEach methods to sum up all the numbers contained within numArrays and assign to a variable named total.
  - Hint: Be sure to declare and initialize the total variable before the iterations.
*/

// Complete Exercise 15 below...

// Declare a variable total and assign it to 0 (we need to assign this before the forEach method to give it global scope so that total can be accessed both inside and outside the method)
let total = 0;

// forEach method iterates through each nested array, and within that nested array, forEach iterates through all of the numbers and adds them to total's value; this summing function happens for each nested array to yield a grand total
numArrays.forEach(function(numArray) {
  numArray.forEach(function(num) {
    total += num;
  });
});

// Output the value of the total variable to the console
console.log('Exercise 15 Result:\n', total);