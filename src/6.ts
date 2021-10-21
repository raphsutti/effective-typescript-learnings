// Syntax
type TState = {
  name: string;
  capital: string;
};
interface IState {
  name: string;
  capital: string;
}

// Index signature
type TDict = { [key: string]: string };
interface IDict {
  [key: string]: string;
}

// Function types
type TFn = (x: number) => string;
interface IFn {
  (x: number): string;
}
const toStrT: TFn = (x) => "" + x; // OK
const toStrI: IFn = (x) => "" + x; // OK

// Generics
type TPair<T> = {
  first: T;
  second: T;
};
interface IPair<T> {
  first: T;
  second: T;
}

// extend each other
interface IStateWithProp extends TState {
  population: number;
} // but not complex types eg. union
type UState = { address: string } | { addresses: string };
interface IStateWithProp extends UState {
  population: number;
}
type TStateWithProp = IState & { population: number };
type TStateWithProp2 = UState & { population: number };

// Interface can be augmented
interface IState {
  name: string;
  capital: string;
} // In a library
interface IState {
  population: number;
} // In our code base
const victoria: IState = {
  name: "Victoria",
  capital: "Melbourne",
  population: 5_000_000,
}; // OK
