// >>> Prefer Promises to callbacks for better composability and type flow
// Callback hell example
fetchURL(url1, function (response1) {
  fetchURL(url2, function (response2) {
    fetchURL(url3, function (response3) {
      // ...
      console.log(1);
    });
    console.log(2);
  });
  console.log(3);
});
console.log(4);
// Logs:
// 4
// 3
// 2
// 1

const url1 = "example.com";
const url2 = "example.com";
const url3 = "example.com";

// ES2015 Promise example
const page1Promise = fetch(url1);
page1Promise
  .then((response1) => {
    return fetch(url2);
  })
  .then((response2) => {
    return fetch(url3);
  })
  .then((response3) => {
    // ...
  })
  .catch((error) => {
    // ...
  });

// >>> Prefer async and await to raw Promises when possible. They produce more concise, straightforward code and eliminate whole classes of error
// ES2017 async and await example
const fetchPages = async () => {
  try {
    const response1 = await fetch(url1);
    const response2 = await fetch(url2);
    const response3 = await fetch(url3);
    // ...
  } catch (e) {
    // ...
  }
};

// Running Promises in parallel
const fetchPagesParallel = async () => {
  const [response1, response2, response3] = await Promise.all([
    fetch(url1),
    fetch(url2),
    fetch(url3),
  ]);
  // ...
};
