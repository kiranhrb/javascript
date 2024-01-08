function countSheeps(sheep) {
    let count = 0;
    sheep.forEach(countFunc);
    
    function countFunc(value)  {
        if (value === true) {
                count +=1;
        }
    }
  return count;
}

let sheep = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]

console.log(countSheeps(sheep));


let text = "How are you doing today?";
const myArray = text.split(" ");
console.log(myArray);
//Output: [ 'How', 'are', 'you', 'doing', 'today?' ]

function twiceAsOld(dadYearsOld, sonYearsOld) {
    let yearsAgo = 2*(sonYearsOld) - dadYearsOld;
    console.log(Math.abs(yearsAgo));
  }

twiceAsOld(50,20);

/*function twiceAsOld(dadYearsOld, sonYearsOld) {
return Math.abs(dadYearsOld - 2 * sonYearsOld);
}*/
