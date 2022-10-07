/***********************************************************************
Write a function using fat arrow syntax, `arrowGetFullName(person)` that takes in
a person object and returns a string containing their full name.

Assign the below function to a variable using the const keyword. Using the const
keyword will allow any value assigned to that variable protection from being
reassigned within that scope.

Examples:
let p1 = {firstName: 'John', lastName: 'Doe'};
arrowGetFullName(p1); // => 'John Doe'
let p2 = {firstName: 'Charlie', lastName: 'Brown', age: 9};
arrowGetFullName(p2); // => 'Charlie Brown'

***********************************************************************/

const arrowGetFullName = (person) => {

  let firstName = person['firstName']; // = value of first name
  let lastName = person['lastName']; // =  value of last name
  let fullName = firstName + " " + lastName; // = value of first + space + value of last
  // console.log(fullName);
  return fullName;


}

let p1 = { firstName: 'John', lastName: 'Doe' };
// arrowGetFullName(p1); // => 'John Doe'
// let p2 = { firstName: 'Charlie', lastName: 'Brown', age: 9 };
// arrowGetFullName(p2); // => 'Charlie Brown'

// console.log(arrowGetFullName(p1))
// console.log(arrowGetFullName(p2))


// for (let key in p1) {     // for in loop with always give the key of an object, and with key can always get value
//   console.log("key: ", key)
//   console.log("value: ", p1[key])
//   return p1[key];
// }

console.log(p1.firstName)
console.log(p1["firstName"])
console.log(p1.firstName + " " + p1.lastName)






/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowGetFullName;
} catch (e) {
  module.exports = null;
}
