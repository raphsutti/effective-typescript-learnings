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

// DRY - use extends to avoid repeating fields
interface IHiringManagerWithBirthDate extends HiringManager {
  birthdate: Date;
}
type THiringManagerWithBirthDate = HiringManager & { birthdate: Date };

// Pick fields
interface Job {
  id: string;
  title: string;
  contractType: "CASUAL" | "SALARY";
  minSalary: number;
  maxSalary: number;
  location: string;
}

// Use indexing, maptypes, Pick
type JobBrief = {
  title: Job["title"];
  location: Job["location"];
};
type MJobBrief = {
  [k in "title" | "location"]: Job[k];
};
type PJobBrief = Pick<Job, "title" | "location">;

// Making fields optional
interface Options {
  width: number;
  height: number;
  color: string;
  label: string;
}
interface OptionsUpdate {
  width?: number;
  height?: number;
  color?: string;
  label?: string;
}
// class UIWidget {
//   constructor(init: Options) {}
//   update(options: OptionsUpdate) {}
// }
// DRY - mapped types to turn them to optionals
type DRYOptionsUpdate = { [k in keyof Options]?: Options[k] };

// Get type from an object
const INIT_OPTIONS = {
  width: 640,
  height: 480,
  color: "#00FF00",
  label: "VGA",
};
interface Options {
  width: number;
  height: number;
  color: string;
  label: string;
}
type DRYOptions = typeof INIT_OPTIONS;

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

// Constraining Generic
interface Developer {
  name: string;
  speciality: "FRONTEND" | "BACKEND";
}
type PairingDuo<T extends Developer> = [T, T];

const pair1: PairingDuo<Developer> = [
  { name: "Ron", speciality: "BACKEND" },
  { name: "Hermione", speciality: "FRONTEND" },
]; // OK
const pair2: PairingDuo<{ name: string }> = [
  { name: "Harry" },
  { name: "Ginny" },
];
