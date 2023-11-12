/*Alarm  Mon - 6 AM, Tue - 7 AM, Wed, Thu, and Fri - 6:30 AM, Sat, and Sun - 9 AM*/
//We can use if else. But, switch is a better alternnative

let day = 'Friday';

/* switch(day) {
    case 'Monday': 
        console.log('6 AM');
    case 'Tuesday': 
        console.log('7 AM');
    case 'Wednesday': 
    case 'Thursday': 
    case 'Friday': 
        console.log('6:30 AM');
    case 'Saturday': 
    case 'Sunday': 
        console.log('9 AM');
} */

//Output : 6:30 AM 9 AM
//The switch statement without break runs through all cases from the point it matched the first case condition

//With break

day = 'Holiday';

switch(day) {
    case 'Monday': 
        console.log('6 AM');
        break;
    case 'Tuesday': 
        console.log('7 AM');
        break;
    case 'Wednesday': 
    case 'Thursday': 
    case 'Friday': 
        console.log('6:30 AM');
        break;
    case 'Saturday': 
    case 'Sunday': 
        console.log('9 AM');
        break;
    default: console.log('sleep');
}

//Output : sleep

function switchItUp(number){
    switch(number) {
        case 1 : return "One";
        case 2 : return "Two";
        case 3 : return "Three";
        case 4 : return "Four";
        case 5 : return "Five";
        case 6 : return "Six";
        case 7 : return "Seven";
        case 8 : return "Eight";
        case 9 : return "Nine";
    }
   }

   let words = switchItUp(6);
   console.log(words);

   //https://www.codewars.com/kata/5808dcb8f0ed42ae34000031/solutions/javascript

   //In your switchItUp function, when a matching case is found, it returns the corresponding string and exits the function. 
   //Therefore, if number is 3, the case 3 block is executed, "Three" is returned, and the function terminates. 
   //The subsequent case statements are not evaluated because the function has already returned a value.
   //This is different from the behavior of a switch statement where the break statement is used to exit the switch block and prevent further execution.