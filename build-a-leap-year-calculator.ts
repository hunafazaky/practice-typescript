// Build a leap year calculator function
let year = 2025;
const isLeapYear = (year: number) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    ? `${year} is a leap year.`
    : `${year} is not a leap year.`;
};

let result = isLeapYear(year);
console.log(result);
