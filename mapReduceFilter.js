function double(arrayOfNumbers) {
    return arrayOfNumbers.map(number => number * 2);
}


console.log(double([1,2,3,4,5]));

// Output: [ 2, 4, 6, 8, 10 ]


function openOrSenior(data) {
    return data.map(item => (item[0] >= 55 && item[1] > 7) ? "Senior" : "Open");
}
  
console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]));

// Output: [ 'Open', 'Senior', 'Open', 'Senior' ]

// Chaining of methods
// Thrice and substract 2

function thriceSub(num) { 
  return num.map(element => element * 3)
            .map(element => element - 2);
}
console.log(thriceSub([1,2,3,4,5]));

//Filter

function even(arrayOfNumbers) {
    console.log(arrayOfNumbers.filter(number => number%2 ===0));
}

even([2,3,4,6,7,8,9])
//Output: [ 2, 4, 6, 8 ]

// Reduce Method

const array1 = [1, 2, 3, 4];

const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10
// 0 + 1 + 2 + 3 + 4

function sum(arrayOfNumbers) {
    console.log(arrayOfNumbers.reduce((a,b) => a + b));
}
//Here a is accumulator, b is current value and initial value is default value 0
sum([1,2,3,4,5]);

// Reduce one level up
// Write a function findEvenIndex(arr) function finds an index in an array of integers where the sum of the integers to the left of the index is equal.
// If the array has multiple answers, the function returns the lowest correct index.

function findEvenIndex(arr) {
    const halfTotalSum = arr.reduce((accumulator, currentValue) => accumulator + currentValue) / 2;
    let sum = 0; 
    const tolerance = 0.00000001;
  
    for (let k = 0; k < arr.length; k++) {
      sum += arr[k];
      if (Math.abs(sum - halfTotalSum) < tolerance) {
        return k;
      }
    }
  }
  
  console.log(findEvenIndex([1,2,3,3,2,1]));


// Sort
/* function sumTwoSmallestNumbers(numbers) {  
    numbers.sort( (a,b) => {return a-b});
    console.log(numbers);
    console.log(numbers[0] + numbers[1]);
  }

sumTwoSmallestNumbers([3,6,7,2,5]); */