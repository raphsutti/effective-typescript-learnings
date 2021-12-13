// >>> DRY - don't repeat yourself applies to types. Name types rather than repeating them. Use extends to avoid repeating fields
// Not DRY - add middleName to Candidate, CandidateWithBirthDate1 deviates
interface HiringManager {
  firstName: string;
  lastName: string;
}
interface NotDRYHiringManagerWithBirthDate {
  firstName: string;
  lastName: string;
  birthdate: Date;
}

// DRY
interface IHiringManagerWithBirthDate extends HiringManager {
  birthdate: Date;
}
type THiringManagerWithBirthDate = HiringManager & { birthdate: Date };

// >>> Use `keyof`, `typeof`, indexing, mapped types
interface Job {
  id: string;
  title: string;
  contractType: "CASUAL" | "SALARY";
  minSalary: number;
  maxSalary: number;
  location: string;
}

// Indexing
type JobBrief = {
  title: Job["title"];
  location: Job["location"];
};
// Maptypes
type MJobBrief = {
  [k in "title" | "location"]: Job[k];
};
// Pick
type PJobBrief = Pick<Job, "title" | "location">;

// Making fields optional
interface Address {
  line1: string;
  line2: string;
}
interface AddressOptional {
  line1?: string;
  line2?: string;
}

// DRY - mapped types to turn them to optionals
type DRYAddressOptional = { [k in keyof Address]?: Address[k] };

// Examples of how to reduce repetition on several function
function add1(a: number, b: number) {
  return a + b;
}
function sub1(a: number, b: number) {
  return a - b;
}

// To this
type BinaryFn = (a: number, b: number) => number;
const add2: BinaryFn = (a, b) => a + b;
const sub2: BinaryFn = (a, b) => a - b;

// >>> Generics are functions for types. Use them to map between types instead of repeating types. Use `extends` to constrain generic types
interface Developer {
  name: string;
  speciality: "FRONTEND" | "BACKEND";
}
type PairingDuo<T> = [T, T]; // Add extends Developer

const pair1: PairingDuo<Developer> = [
  { name: "Ron", speciality: "BACKEND" },
  { name: "Hermione", speciality: "FRONTEND" },
]; // OK
const pair2: PairingDuo<{ name: string }> = [
  { name: "Harry" },
  { name: "Ginny" },
];
