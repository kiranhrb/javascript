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