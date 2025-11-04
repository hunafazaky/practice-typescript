// Implement a function that checks if a string ends with a given target string.
const confirmEnding = (long: string, short: string) => {
  return long.slice(-short.length) === short;
};

console.log(confirmEnding("test", "s"));
