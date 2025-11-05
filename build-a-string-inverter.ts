// Build a string inverter function
const reverseString = function (str: string): string {
  return str.split("").reverse().join("");
};

console.log(reverseString("Hello"));
