let user = {     // an object
    name: "John",  // by key "name" store value "John"
    surName: "David",
    age: 30,       // by key "age" store value 30    
    "likes birds": true  // multiword property name must be quoted
  };

console.log(user);
console.log(user.name);
console.log(user.age);

//Adding a key value pair to the object using dot notation
user.isAdmin = true;
console.log(user);

//Deletng a key value pair to the object using dot notation
delete user.age;
console.log(user);

//Changing the value in the pair
user.surName = "Paul";
console.log(user.surName);
console.log(user);

//For multiword properties, the dot access doesn’t work:
//user.likes birds = true (would give a syntax error)
//JavaScript doesn’t understand that.
//It thinks that we address user.likes, and then gives error when it comes across unexpected birds
//Square bracket notation helps here
console.log(user['likes birds']);
console.log(user['surName']);
console.log(user['name']);

/*Square brackets also provide a way to obtain the property name as the result of any expression 
– as opposed to a literal string – like from a variable*/ 

let key1 = "likes birds"; // same as user["likes birds"] = true;
user[key1] = false;
console.log(user);
console.log(user["likes birds"]);

let key3 = "age";
user[key3] = 45;
console.log(user);

let key2 = "name";
user.key2 = "Malan"; //This does not work. However user[key2] = "Malan" works
console.log(user); 

/*We can use square brackets in an object literal, when creating an object.
That’s called computed properties.*/

let fruit0 = "apple";
let bag0 = {
    [fruit0]: 5,
}

console.log(bag0);

//The meaning of a computed property is simple: [fruit] means that the property name should be taken from fruit.
//So, if a visitor enters "apple", bag will become {apple: 5}

let fruit1 = "orange";
let bag1 = {};

bag1[fruit1] = 5;

console.log(bag1);

//We can use more complex expressions inside square brackets:

let fruit = 'apple';
let bag = {
  [fruit + 'Computers']: 5 // bag.appleComputers = 5
};

console.log(bag);
console.log(bag.appleComputers);
console.log(bag['appleComputers']);

//There’s also a special operator "in".
//The syntax is:"key" in object

let user1 = { name: "John", age: 30 };
console.log( "age" in user1 ); // true, user.age exists
console.log( "blabla" in user1 ); // false, user.blabla doesn't exist

//Note that on the left side of in there must be a property name. That’s usually a quoted string.
//If we omit quotes, that means a variable should contain the actual name to be tested. For instance:

let user2 = { age: 50 };

let key4 = "age";
console.log( key4 in user ); // true, property "age" exists

//for..in loop
//syntax is "key" in object

let userNew = {
    name: "John",
    age: 30,
    isAdmin: true
  };
console.log("for..in loop started")
for (let key in userNew) {
     // keys
    console.log( key );  // name, age, isAdmin
    // values for the keys
    console.log( userNew[key] ); // John, 30, true
  }

//Writing a function isEmpty(obj) which returns true if the object has no properties, false otherwise

function isEmpty(obj) {
    for (let key in obj) {
        return false; // if the loop has started, there is a property
    }
    return true;
} 

console.log(isEmpty(userNew));

//Sum of Salaries

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

function sumOfSalaries(obj) {
    let sum = 0;
    for (let employee in obj) {
        sum += obj[employee];   
    }
    return sum;
}

console.log(sumOfSalaries(salaries));

/*In the above code why doesn't dot notation work. I mean, why does sum += obj.employee does not work?

The dot notation is used to access properties of an object when you know the name of the property at the time you are writing the code. 
When you use a for...in loop to iterate over the properties of the obj object, the loop variable (employee in this case) contains the property name, not the actual property itself.
So, when you use obj[employee], you are correctly accessing the property using the bracket notation, where employee is the variable containing the property name.
If you were to use dot notation like obj.employee, it would be looking for a property named "employee" in the object, 
not using the value of the employee variable to dynamically access the property.*/

//Multiply numeric property values by 2

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
  console.log(menu);
}