// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ====
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1, mmelloy0@psu.edu, Mitzi, F
// 2, kdiben1@tinypic.com, Kennan, M
// 3, kmummery2@wikimedia.org, Keven, M
// 4, gmartinson3@illinois.edu, Gannie, M
// 5, adaine5@samsung.com, Antonietta, F

// Example format of an intern object: 1, examples@you.edu, Example, F
const example = {
  id: 0,
  name: "Example",
  email: "examples@you.edu",
  gender: "F"
};

// Write your intern objects here:

getId = (_ => {
  let id = -1;
  return (increase = false) => {
    if (increase) ++id;
    return id;
  };
})();

const interns = [
  ["mmelloy0@psu.edu", "Mitzi", "F"],
  ["kdiben1@tinypic.com", "Kennan", "M"],
  ["kmummery2@wikimedia.org", "Keven", "M"],
  ["gmartinson3@illinois.edu", "Gannie", "M"],
  ["adaine5@samsung.com", "Antonietta", "F"]
];

const internArr = [];
const generateIntern = intern => {
  intern = {
    id: getId(true),
    email: intern[0],
    name: intern[1],
    gender: intern[2]
  };
  internArr.push(intern);
};
interns.forEach(e => generateIntern(e));

// ==== Challenge 2: Reading Object Data ====
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
findByName = input => {
  let result = {};
  result = internArr.find(({ name }, i, arr) => {
    if (name === input) return arr[i];
  });
  if (!result) {
    console.log(`Name: ${input} not Found`);
  }
  return result;
};
console.log(findByName("Mitzi").name);

// Kennan's ID
console.log(findByName("Kennan").id);

// Keven's email
console.log(findByName("Keven").email);

// Gannie's name
console.log(findByName("Gannie").name);

// Antonietta's Gender
console.log(findByName("Antonietta").gender);

// ==== Challenge 3: Object Methods ====
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
// console.log(kennan.speak());
findByName("Kennan").speak = () => {
  console.log("Hello, my name is Kennan!");
};
findByName("Kennan").speak();

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
//console.log(antonietta.multiplyNums(3,4));
findByName("Antonietta").multiplyNums = (num1, num2) => {
  if (isNaN(num1) || isNaN(num2)) console.log("input error");
  result = num1 * num2;
  console.log(`${num1} * ${num2} = ${result}`);
};
findByName("Antonietta").multiplyNums(3, 4);

// === Great work! === Head over to the the arrays.js. You may come back and attempt the Stretch Challenge once you have completed the challenges in arrays.js and function-conversion.js.

// ==== Stretch Challenge: Nested Objects and the this keyword ====

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.

const parent = {
  name: "Susan",
  age: 70,
  child: { name: "George", age: 50, grandchild: { name: "Sam", age: 30 } }
};

// Log the parent object's name
console.log(`parent object's name is ${parent.name}`);

// Log the child's age
console.log(`child's age is ${parent.child.age}`);
// Log the name and age of the grandchild
console.log(
  `grandchild's name and age are ${parent.child.grandchild.name} ${parent.child.grandchild.age}`
);

function ability() {
  console.log(`My name is ${this.name}`);
}
// Have the parent speak
parent.speak = ability;
parent.speak();

// Have the child speak
parent.child.speak = ability;
parent.child.speak();

// Have the grandchild speak
parent.child.grandchild.speak = ability;
parent.child.grandchild.speak();