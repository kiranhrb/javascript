/*let globalAge = 23; 

// This is a function - and hey, a curly brace indicating a block
function printAge (age) {
  var varAge = 34; // This is a function scoped variable

  // This is yet another curly brace, and thus a block
  if (age > 0) {
    // This is a block-scoped variable that exists
    // within its nearest enclosing block, the if's block
    const constAge = age * 2;
    console.log(constAge);
  }

  // ERROR! We tried to access a block scoped variable
  // not within its scope
  console.log(constAge);
}

printAge(globalAge);

// ERROR! We tried to access a function scoped variable
// outside the function it's defined in
console.log(varAge);*/


/*let globalAge = 23;

function printAge (age) {    
    if (age > 0) {
        const constAge = age * 2;
        console.log(constAge);
      }

}

printAge(23);*/

function likes(names) {
    let count = 0;
    names.forEach(() => count++);
    if (count === 0) {return 'no one likes this'}
    if (count === 1) {return `${names[0]} likes this`}
    if (count === 2) {return `${names[0]} and ${names[1]} like this`}
    if (count === 3) {return `${names[0]} and ${names[1]} and ${names[2]}like this`}
    if (count > 4) {return `${names[0]} and ${names[1]} and ${count-2} others like this`}

}

console.log(likes(['Kiran','Peter']));

function findNb(m) {
    if (Number.isInteger((-1 + Math.sqrt(1 + 8 * Math.sqrt(m))) / 2) ) {
        return (-1 + Math.sqrt(1 + 8 * Math.sqrt(m))) / 2;
    } else {
        return -1;
    }
}

console.log(findNb(4183059834009));