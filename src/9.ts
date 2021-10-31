// >>> Understand how TypeScript infers a type from a constant by widening it
// >>> Familiarise with the way you can affect this behaviour: const, type annotations, context, and as const
// Minimise TypeScript widening by using const rather than let
type AdType = "Classic" | "Standout" | "SuperPremium";
const getPrice = (ad: AdType) => {
  switch (ad) {
    case "Classic":
      return 1;
    case "Standout":
      return 2;
    case "SuperPremium":
      return 9000;
  }
};
let inputAd = "Classic"; // change this to const
getPrice(inputAd);

// How to affect TypeScripts type widening behaviour
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
