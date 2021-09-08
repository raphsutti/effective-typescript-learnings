// Is TypeScript a compiled or interpreted language?
const add = (x: number, y: number) => x + y;

// TypeScript tries to detect code that will fail an exception at runtime without running the code
// TypeScript can also detect errors as type annotations tell TypeScript what your intent is (see `interface` below)
interface Candidate {
  name: string;
  title: "Principal Developer" | "Associate Developer";
  favColour: string;
}

const candidates: Candidate[] = [
  { name: "James", title: "Associate Developer", favColour: "green" },
  { name: "John", title: "Principle Developer", favColor: "blue" },
];

// TypeScript models runtime behaviour of JavaScript
const x = 2 + "3";
const y = "2" + 3;

const a = null + 7;
const b = [] + 12;

alert("Hello", "SEEK");

// There are type checks that can still throw error at runtime
const names = ["Alice", "Bob"];
console.log(names[2].toUpperCase());
