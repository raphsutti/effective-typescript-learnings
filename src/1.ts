const addNumbers = (a, b) => a + b;

declare const loggedInUsername: string;
const users = [
  { name: "Oby", age: 12 },
  { name: "Heera", age: 32 },
];

const loggedInUser = users.find((u) => u.name === loggedInUsername);
console.log(loggedInUser.age);
// Object is possibly 'undefined'.
