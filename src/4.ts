// >>> Prefer type declaration over assertion
interface RecruitingManager {
  name: string;
} // <-- Declaration

const alice: RecruitingManager = { name: "Alice" }; // Type is RecruitingManager
const bob = { name: "Bob" } as RecruitingManager; // <-- Assertion. Type is RecruitingManager

const carol: RecruitingManager = {
  name: "Carol",
  occupation: "TypeScript developer",
  // ~~~~~~~~~ Object literal may only specify known properties
  //           and 'occupation' does not exist in type 'RecruitingManager'
};
const dan = {
  name: "Dan",
  occupation: "JavaScript developer",
} as RecruitingManager; // No error

// // >>> Know how to annotate return type of an arrow function
// type AddType = (a: number, b: number) => number;
// const addingFunction: AddType = (a, b) => a + b;

// const people = ["alice", "bob", "jan"].map((name) => ({ name }));
// // { name: string; }[]... but we want RecruitingManager[]

// interface RecruitingManager {
//   name: string;
// }
// const people2 = ["alice", "bob", "jan"].map((name) => {
//   const person: RecruitingManager = { name };
//   return person;
// }); // Type is RecruitingManager[]
