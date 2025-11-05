// truncate a string based on limit given
const truncateString = (text: string, limit: number): string => {
  return text.length > limit ? text.slice(0, limit) + "..." : text;
};

console.log(truncateString("hello", 3));
