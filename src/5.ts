function rollDice1(sides: number): number {
  return sides;
} // Statement
const rollDice2 = function (sides: number): number {
  return sides;
}; // Expression
const rollDice3 = (sides: number): number => {
  return sides;
}; // Expression

// We can apply type declaration to the whole function at once
type DiceRollFn = (sides: number) => number;
const rollDice: DiceRollFn = (sides) => {
  return Math.floor(Math.random() * sides) + 1;
};

// Examples of how to reduce repetition on several function
function add1(a: number, b: number) {
  return a + b;
}
function sub1(a: number, b: number) {
  return a - b;
}
function mul1(a: number, b: number) {
  return a * b;
}
function div1(a: number, b: number) {
  return a / b;
}
// To this
type BinaryFn = (a: number, b: number) => number;
const add2: BinaryFn = (a, b) => a + b;
const sub2: BinaryFn = (a, b) => a - b;
const mul2: BinaryFn = (a, b) => a * b;
const div2: BinaryFn = (a, b) => a / b;