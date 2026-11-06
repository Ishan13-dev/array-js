// 1. Declare the 'lunches' variable and initialize it as an empty array.
const lunches = [];

// 2. Add a lunch item to the end of the array.
function addLunchToEnd(arr, lunchItem) {
  // .push() appends 'lunchItem' to the end of the existing array in place.
  arr.push(lunchItem);
  console.log(`${lunchItem} added to the end of the lunch menu.`);
  return arr;
}

// 3. Add a lunch item to the start of the array.
function addLunchToStart(arr, lunchItem) {
  // .unshift() inserts 'lunchItem' at index 0, shifting other items right.
  arr.unshift(lunchItem);
  console.log(`${lunchItem} added to the start of the lunch menu.`);
  return arr;
}

// 4. Remove the last lunch item from the array.
function removeLastLunch(arr) {
  // Check if the array is empty BEFORE trying to remove an item.
  if (arr.length === 0) {
    console.log("No lunches to remove.");
  } else {
    // .pop() removes the last element AND returns that removed element so we can store and log it!
    const removedItem = arr.pop();
    console.log(`${removedItem} removed from the end of the lunch menu.`);
  }
  return arr;
}

// 5. Remove the first lunch item from the array.
function removeFirstLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
  } else {
    // .shift() removes the first element (index 0) AND returns that removed element.
    const removedItem = arr.shift();
    console.log(`${removedItem} removed from the start of the lunch menu.`);
  }
  return arr;
}

// 6. Pick and log a random lunch item without modifying the array.
function getRandomLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches available.");
  } else {
    // Random array index formula:
    // - Multiplying Math.random() by arr.length gives a decimal from 0 up to (arr.length - 0.001).
    // - Math.floor() rounds down to a valid integer index from 0 to (arr.length - 1).
    const randomIndex = Math.floor(Math.random() * arr.length);
    const randomItem = arr[randomIndex];
    console.log(`Randomly selected lunch: ${randomItem}`);
  }
}

// 7. Display all items on the menu separated by a comma and a space.
function showLunchMenu(arr) {
  if (arr.length === 0) {
    console.log("The menu is empty.");
  } else {
    // .join(", ") combines all array elements into a single string with ", " (comma + space) between each item.
    // Note: Simply doing `${arr}` would only put a comma (",") with NO space!
    console.log(`Menu items: ${arr.join(", ")}`);
  }
}

// Example Test Calls:
addLunchToEnd(lunches, "Tacos");
addLunchToStart(lunches, "Sushi");
showLunchMenu(lunches);       // Outputs: "Menu items: Sushi, Tacos"
getRandomLunch(lunches);      // Outputs: "Randomly selected lunch: Sushi" (or "Tacos")
removeLastLunch(lunches);     // Outputs: "Tacos removed from the end of the lunch menu."
removeFirstLunch(lunches);    // Outputs: "Sushi removed from the start of the lunch menu."
showLunchMenu(lunches);       // Outputs: "The menu is empty."
