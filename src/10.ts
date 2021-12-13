// >>> Understand how TypeScript narrows types based on conditionals other types of control flow

// [
//   {
//     name: "James",
//     email: "james.smith@gmail.com",
//     uuid: "123",
//     type: "APPLICATION_CREATED"
//   }
// ]

interface CandidateDetail {
  name: string;
  email: string;
  uuid: string;
}
interface CandidateApplicationCreated extends CandidateDetail {
  type: "APPLICATION_CREATED";
}
interface CandidateApplicationUpdated extends CandidateDetail {
  type: "APPLICATION_UPDATED";
}

const glenn: CandidateApplicationCreated = {
  name: "Glenn",
  email: "gcoco@seek.com.au",
  uuid: "a126ae22-9c67-45c2-ae14-e166189f74e9",
  type: "APPLICATION_CREATED",
};
const regina: CandidateApplicationUpdated = {
  name: "Regina",
  email: "rgeorge@seek.com.au",
  uuid: "b95d4d3d-3bb5-4164-b317-dfb65da9b3e3",
  type: "APPLICATION_UPDATED",
};

// Type narrow with truthy check conditionals
const eventsMapping1 = [glenn, regina, null].map((event) => {
  if (event) {
    return event.name; // event is CandidateApplicationCreated | CandidateApplicationUpdated
  }
  return event; // event is null
});

// >>> Use tagged/discriminated unions and user-defined type guards to help the process of narrowing
// Type narrow with discriminated union
const eventsMapping2 = [glenn, regina].map((event) => {
  switch (event.type) {
    case "APPLICATION_CREATED":
      event; // event is CandidateApplicationCreated
      break;
    case "APPLICATION_UPDATED":
      event; // event is CandidateApplicationUpdated
      break;
  }
});

// Type narrow with custom function (type guard)
const randomData = [1234, "hello!", undefined];
const randomDataMap = randomData.map((i) => {
  if (typeof i === "string") {
    return i; // i is string
  }
  if (typeof i === "number") {
    return i; // i is number
  }
  return i; // i is undefined
});

// const isString = (input: unknown): input is string => typeof input === "string";
// const isNumber = (input: unknown): input is number => typeof input === "number";
// const randomDataMap2 = randomData.map((i) => {
//   if (isString(i)) {
//     return i; // i is string
//   }
//   if (isNumber(i)) {
//     return i; // i is number
//   }
//   return i // i is undefined
// });

// Filtering with flatMap
// const randomDataFiltered = randomData.filter((i) => i !== undefined); // return type is still (string | number | undefined)[]
// const randomDataFiltered2 = randomData.flatMap((e) => (e ? [e] : []));
