// Minimise TypeScript widening by using const rather than let
interface Vector3 {
  x: number;
  y: number;
  z: number;
}
function getComponent(vector: Vector3, axis: "x" | "y" | "z") {
  return vector[axis];
}
let coordinateX = "x"; // change this to const
let vec = { x: 10, y: 20, z: 30 };
getComponent(vec, coordinateX);
// ~ Argument of type 'string' is not assignable to
//   parameter of type '"x" | "y" | "z"'

// Declare specific type
const wide1 = {
  x: 1,
}; // Type is { x: number }

const narrow1: { x: 1 | 3 | 5 } = {
  x: 1,
}; // Type is { x: 1 | 3 | 5; }

// Use const assertion
const wide2 = {
  x: 1,
  y: 2,
}; // Type is { x: number; y: number; }

const narrow2 = {
  x: 1 as const,
  y: 2,
}; // Type is { x: 1; y: number; }

const superNarrow2 = {
  x: 1,
  y: 2,
} as const; // Type is { readonly x: 1; readonly y: 2; }

// Tuple
const a1 = [1, 2, 3]; // Type is number[]
const a2 = [1, 2, 3] as const; // Type is readonly [1, 2, 3]
