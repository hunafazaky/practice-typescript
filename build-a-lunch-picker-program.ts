let lunches = ["Greens", "Corns", "Beans"];
const addLunchToEnd = (arr: string[], str: string): string[] => {
  arr.push(str);
  console.log(`${str} added to the end of the lunch menu.`);
  return arr;
}

const addLunchToStart = (arr: string[], str: string): string[] => {
  arr.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);
  return arr;
}

const removeLastLunch = (arr: string[]): string[] => {
  if (arr.length > 0) {
    let str = arr.pop();
    console.log(`${str} removed from the end of the lunch menu.`);
    return arr;
  } else {
    console.log("No lunches to remove.");
    return arr;
  }
}

const removeFirstLunch = (arr: string[]): string[] => {
  if (arr.length > 0) {
    let str = arr.shift();
    console.log(`${str} removed from the start of the lunch menu.`);
    return arr;
  } else {
    console.log("No lunches to remove.");
    return arr;
  }
}

const getRandomLunch = (arr: string[]): string | undefined => {
  if (arr.length > 0) {
    let random = Math.floor(Math.random() * (arr.length));
    console.log(`Randomly selected lunch: ${arr[random]}`);
    return arr[random];
  } else {
    console.log("No lunches available.");
    return undefined;
  }
}

const showLunchMenu = (arr: string[]): void => {
  if (arr.length > 0) {
    console.log("Menu items: " + arr.join(", "));
  } else {
    console.log("The menu is empty.");
  }
}