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

// Type narrow with truthy check
const eventsMapping1 = [glenn, regina, null].map((event) => {
  if (event) {
    return event.name; // event is CandidateApplicationCreated | CandidateApplicationUpdated
  }
  return event; // event is null
});

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
const isString = (input: unknown): input is string => typeof input === "string";
const isNumber = (input: unknown): input is number => typeof input === "number";

const randomData = [1234, "hello!", undefined];
const randomDataMap = randomData.map((i) => {
  if (isString(i)) {
    i; // i is string
  }
  if (isNumber(i)) {
    i; // i is number
  }
});

const randomDataFiltered = randomData.filter((i) => i !== undefined); // return type is still (string | number | undefined)[]
const randomDataFiltered2 = randomData.flatMap((e) => (e ? [e] : []));
