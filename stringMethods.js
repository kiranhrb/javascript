let text = "Hello World World World";
console.log(text.length);
console.log("Hello World".length);
//for .length you are not passing any argument 

console.log(text.indexOf("orld"));
//The indexOf() method returns the position of the first occurrence of a value in a string.
//The indexOf() method returns -1 if the value is not found.
//The indexOf() method is case sensitive.

//Find the first occurrence of "e", starting at position 7:
let string = "Hello world, welcome to the universe.";
console.log(string.indexOf("e",7)); //Output: 14
console.log(string.indexOf("e")); //Output: 1


console.log(text.lastIndexOf("World"));
//The lastIndexOf() method returns the index (position) of the last occurrence of a specified value in a string.
//The lastIndexOf() method searches the string from the end to the beginning.
//The lastIndexOf() method returns the index from the beginning (position 0).
//The lastIndexOf() method returns -1 if the value is not found.
//The lastIndexOf() method is case sensitive.

let newText = "Life is beautiful";
console.log(newText.slice(0, 6)); //Output: Life i
//Includes 0th character, does not include the 6th character [0,6)
console.log(newText.slice(6)); //Output: s beautiful
//Starting at index 6 till end
//The slice() method returns the extracted part in a new string
//The slice() method does not change the original string

console.log(newText.replace("Life", "Javascript")); //Output: Javascript is beautiful

console.log(newText.split(" ")); //Output: [ 'Life', 'is', 'beautiful' ]
//The delimiter used was space. The output is array

let anotherText = "      Kiran Kumar     "
console.log(anotherText.trim()); //Output: Kiran Kumar
//The trim() method removes whitespace from both sides of a string.
//The trim() method does not change the original string.
//Does not remove the spaces that are in between

//parseInt is a global merhod. We need not pass it in the .function form
console.log(parseInt("10"));
console.log(parseInt("10.00"));
console.log(parseInt("10.33"));
console.log(parseInt("34 45 66"));
console.log(parseInt(" 60 "));
console.log(parseInt("50 years"));
console.log(parseInt("He was 40"));

//The parseInt method parses a value as a string and returns the first integer.
//A radix parameter specifies the number system to use:
//2 = binary, 8 = octal, 10 = decimal, 16 = hexadecimal.
//If radix is omitted, JavaScript assumes radix 10. If the value begins with "0x", JavaScript assumes radix 16.

console.log(parseFloat("10"));
console.log(parseFloat("10.00"));
console.log(parseFloat("10.33"));
console.log(parseFloat("34 45 66"));
console.log(parseFloat(" 60.1 "));
console.log(parseFloat("50 years"));
console.log(parseFloat("He was 40"));



//In JavaScript, strings are immutable, which means that methods like toUpperCase() or slice() don't modify the original string;
//they return a new string instead.

function jadenCase(str) {
    str = str.toLowerCase();
    str = str[0].toUpperCase() + str.slice(1);
    return str;
  }

const stri = "How Can Mirrors Be Real If Our Eyes Aren't Real";
console.log(jadenCase(stri));

const str = "How Can Mirrors Be Real If Our Eyes Aren't Real";
const words = str.split(' ');

words.forEach((word, index) => {
  words[index] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
});

const newStr = words.join(' ');
console.log(newStr);


