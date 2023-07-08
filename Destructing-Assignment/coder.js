/*
1. Count the occurrences.
You are building a word count generator that will take a large string of text as input and output the words and
the number of times they are present in the string. Your task is to write a function that can count the
occurrences of each word in the string and return a Map containing each word's count. For simplicity, you can
assume that the string only contains alphabetic characters and spaces.
*/
function countWords(text) {
  const words = text.split(" ");
  const wordCount = new Map();

  for (const word of words) {
    const count = wordCount.get(word) || 0; //logic is here
    wordCount.set(word, count + 1);
  }
  return wordCount;
}
// Example usage:
const text =
  "This is a sample text to test the word count functionality. This text contains repeated words like test and this.";
const result = countWords(text);
console.log(result);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
2. Only unique items are allowed.
You are building a program that takes an array of numbers as input and you need to remove all the duplicates
from the array. You want to write a function that can accomplish this task efficiently and returns a new set that
contains only the unique elements.
*/

function removeDuplicatePrintUniqueitem(input) {
  let createSet = new Set([...input]);
  return createSet;
}
let input = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5, 7, 8, 9,
  7, 5, 4, 5, 4, 2, 4, 2, 2, 2,
];
console.log(removeDuplicatePrintUniqueitem(input));
//Output => Set(10) { 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 }

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
3. Swap the values.
You are working on a project that requires you to swap the values of two variables without using a temporary
variable. You decide to write a function that takes two variables as input and swaps their values using
destructuring assignment with an array. The function should take the two variables as arguments, destructure
them into an array, and then swap their positions within the array. Finally, the function should return an array
with the swapped values. For example, if the function is called with the arguments x = 5 and y = 10, it should
return an array [10, 5] with x now equal to 10 and y equal to 5.
*/

function swapTheValue() {
  let args = Array.from(arguments);
  let finalArr = args.map((el) => el);
  return finalArr.reverse();
}
let x = 5;
let y = 10;

console.log(swapTheValue(x, y));

// Output = [10,5]

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
4. Access random elements.
You are building a program that takes an array of numbers as input and you need to extract the first, second,
and last elements of the array. You decide to write a function that can accomplish this task using destructuring
assignment with an array. The function should take the array as an argument, destructure it into three variables
representing the first, second, and last elements, and then return an array with these three values. For example,
if the input array is [1, 2, 3, 4, 5], the function should return an array [1, 2, 5].
*/

function accessRandomElement() {
  let args = Array.from(arguments);
  let finalArr = args.map((el) => el);
  return [finalArr[0], finalArr[1], finalArr[args.length - 1]];
}
console.log(accessRandomElement(1, 2, 3, 4, 5));

// Output => [ 1, 2, 5 ]

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
5. Min and max values.
You are building a program that needs to find the maximum and minimum values in an array of numbers. You
decide to write a function that can accomplish this task by taking an array of numbers as input and using the
spread operator with the Math methods max() and min(). The function should return an object with two
properties, max, and min, representing the maximum and minimum values in the input array, respectively. For
example, if the input array is [5, 2, 7, 1, 9], the function should return an object { max: 9, min: 1 }.
*/

function find_Min_And_Max(arr) {
  let spread = [...arr];
  let finalArr = spread.map((el) => el);
  return {
    max: Math.max(...finalArr),
    min: Math.min(...finalArr),
  };
}
let arr = [5, 2, 7, 1, 9];
console.log(find_Min_And_Max(arr));

// Output : { max: 9, min: 1 }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
6. Nested Objects.
Write a function that takes an object representing a person as input, and extracts the name and street
properties from a nested object using object destructuring. The function should return an object with these two
properties. A sample object is given below.
*/

function Nested_object(ob) {
  return {
    name: ob.name,
    Street: ob.address.street,
  };
}
const ob = {
  name: "Mithun",
  age: 21,
  address: {
    street: "B8 Block-B Industrial-Area",
    city: "sector- 62, noida",
    state: "UttarPradesh",
  },
};
console.log(Nested_object(ob));

//Output => { name: 'Mithun', Street: 'B8 Block-B Industrial-Area' }

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
