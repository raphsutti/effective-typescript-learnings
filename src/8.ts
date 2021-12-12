// >>> Avoid writing type annotations when TypeScript can infer the same type
let dummy: number = 12; // Don't do this
let tummy = 12; // Type has been inferred

// Complex object inferred
const Partner = {
  name: "Ryanair International",
  partnerTier: "SUPER_PREMIUM" as const,
  headOfficeAddress: {
    addressLine1: "60 Cremorne street",
    addressLine2: undefined,
    suburb: "Cremorne",
  },
};

// Arrays
const square = (nums: number[]) => nums.map((x) => x * x);
const squares = square([1, 2, 3, 4]); // Type is number[]

// Preciseness
const bummy: string = "x"; // Type is string
const gummy = "y"; // Type is "y"
let yummy = "z"; // Type is string

// >>> Ideally, type annotations in function signatures but not on local variables in their bodies
interface PartnerInput {
  id: number; // Change this to string
  name: string;
}

const logPartner = (partner: PartnerInput) => {
  const id: number = partner.id;
  const name: string = partner.name;
  console.log(id, name);
};

// const InferredLogPartner = (partner: PartnerInput) => {
//   const id = partner.id;
//   const name = partner.name;
//   console.log(id, name);
// };

const DRYLogPartner = (partner: PartnerInput) => {
  const { id, name } = partner;
  console.log(id, name);
};

// // >>> Use explicit annotations for object literals and function return types
// const Partner1 = {
//   name: "JobAdder",
//   uuid: "202da638-7432-41f4-8c02-c7dc53f73ea5",
// };
// logPartner(Partner1);
// // ~~~~~ Argument .. is not assignable to parameter of type 'PartnerInput'
// //         Types of property 'uuid' are incompatible
// //         Type 'string' is not assignable to type 'number'

// const Partner2: PartnerInput = {
//   name: "Broadbean",
//   id: "d4681fce-d913-4aab-b929-e253abc889f2", // Catch this early
// };
// logPartner(Partner2);
