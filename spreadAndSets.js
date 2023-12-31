/*The spread (...) syntax allows an iterable, such as an array or string, 
to be expanded in places where zero or more arguments (for function calls) 
or elements (for array literals) are expected.*/

//Spread syntax "expands" an array into its elements.

function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(numbers);
//Output: [ 1, 2, 3 ]

console.log(...numbers);  
//Output: 1 2 3
  
console.log(sum(...numbers));
// Expected output: 6


// A JavaScript Set is a collection of unique values.
// Each value can only occur once in a Set.
// A Set can hold any value of any data type.

/*You can create a JavaScript Set by:
Passing an Array to new Set()
Create a new Set and use add() to add values
Create a new Set and use add() to add variables */

// Create a Set
const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");
letters.add("c");
letters.add("c");
//Output: { 'a', 'b', 'c' }
//If you add equal elements, only the first will be saved

console.log(letters);

//New array with unique elements in an array

let arr = [1,2,2,3,3,3,4,3,3,3,2,2,1];
let newArr = new Set(arr);
console.log(newArr);
//Output: {1, 2, 3, 4}

newArr = [...newArr];
console.log(newArr);
//Output: [1, 2, 3, 4]

//Program to find the count of each element in the array

let countObj = {};

for (let i = 0; i < newArr.length; i++) {
  let count = 0;

  for (let j = 0; j < arr.length; j++) {
    if (newArr[i] === arr[j]) {
      count++;
    }
  }

  countObj[newArr[i]] = count;
}

console.log(countObj);
// Output: Object { '1': 2, '2': 4, '3': 6, '4': 1 }