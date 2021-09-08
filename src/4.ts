interface HiringManager {
  name: string;
} // <-- Declaration

const alice: HiringManager = { name: "Alice" }; // Type is Person
const bob = { name: "Bob" } as HiringManager; // <-- Assertion. Type is Person

const carol: HiringManager = {
  name: "Carol",
  occupation: "TypeScript developer",
  // ~~~~~~~~~ Object literal may only specify known properties
  //           and 'occupation' does not exist in type 'Person'
};
const dan = {
  name: "Dan",
  occupation: "JavaScript developer",
} as HiringManager; // No error

const people = ["alice", "bob", "jan"].map((name) => ({ name }));
// { name: string; }[]... but we want HiringManager[]

interface HiringManager {
  name: string;
}
const people2 = ["alice", "bob", "jan"].map((name) => {
  const person: HiringManager = { name };
  return person;
}); // Type is HiringManager[]
