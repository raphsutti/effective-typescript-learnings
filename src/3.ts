// >>> There is no type safety with any type
let age: number;
age = "12";
// ~~~ Type '"12"' is not assignable to type 'number'

age = "12" as any; // OK
age += 1; // OK; at runtime, age is now "121"

// >>> Lose VS Code functionality
interface TalentSearchCandidate {
  first: string;
  last: string;
}

const formatName = (p: TalentSearchCandidate) => `${p.first} ${p.last}`;
const formatNameAny = (p: any) => `${p.first} ${p.last}`;
