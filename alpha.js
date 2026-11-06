console.log("Grocery shopping list");

// Array initialization: Creates an empty array [] to store shopping items in order.
const shoppingList = [];

console.log("It will be nice to have some fruit to eat.");

// .push(): Adds one or more items to the END of the array.
// shoppingList is now: ["Apples"]
shoppingList.push("Apples");

// Array interpolation in template literals: When an array (${arr}) is placed inside 
// a template literal (`...`), JavaScript automatically converts the array into a 
// comma-separated string (equivalent to calling arr.toString()).
function getShoppingListMsg(arr) {
  return `Current Shopping List: ${arr}`;
}

console.log(getShoppingListMsg(shoppingList)); 
// Outputs: "Current Shopping List: Apples"

// Adds "Grapes" to the END of the array.
// shoppingList is now: ["Apples", "Grapes"]
shoppingList.push("Grapes");
console.log(getShoppingListMsg(shoppingList)); 
// Outputs: "Current Shopping List: Apples,Grapes"

console.log("It looks like we need to get some cooking oil.");

// .unshift(): Adds one or more items to the BEGINNING (index 0) of the array,
// shifting all existing elements one index higher.
// shoppingList is now: ["Vegetable Oil", "Apples", "Grapes"]
shoppingList.unshift("Vegetable Oil");
console.log(getShoppingListMsg(shoppingList)); 
// Outputs: "Current Shopping List: Vegetable Oil,Apples,Grapes"

// Multiple arguments in .push(): You can pass multiple comma-separated items 
// into .push() to append all of them to the END at once.
// shoppingList is now: ["Vegetable Oil", "Apples", "Grapes", "Popcorn", "Beef Jerky", "Potato Chips"]
shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips");
console.log(getShoppingListMsg(shoppingList)); 
// Outputs: "Current Shopping List: Vegetable Oil,Apples,Grapes,Popcorn,Beef Jerky,Potato Chips"

console.log("This looks like too much junk food.");

// .pop(): Removes the single LAST item ("Potato Chips") from the END of the array.
// shoppingList is now: ["Vegetable Oil", "Apples", "Grapes", "Popcorn", "Beef Jerky"]
shoppingList.pop();
console.log(getShoppingListMsg(shoppingList)); 
// Outputs: "Current Shopping List: Vegetable Oil,Apples,Grapes,Popcorn,Beef Jerky"

console.log("It might be nice to get a dessert.");

// .unshift(): Adds "Chocolate Cake" to the very BEGINNING (index 0).
// shoppingList is now: ["Chocolate Cake", "Vegetable Oil", "Apples", "Grapes", "Popcorn", "Beef Jerky"]
shoppingList.unshift("Chocolate Cake");
console.log(getShoppingListMsg(shoppingList)); 
// Outputs: "Current Shopping List: Chocolate Cake,Vegetable Oil,Apples,Grapes,Popcorn,Beef Jerky"

console.log("On second thought, maybe we should be more health conscious.");

// .shift(): Removes the single FIRST item ("Chocolate Cake") from the BEGINNING of the array,
// shifting all remaining items back down by one index ("Vegetable Oil" returns to index 0).
shoppingList.shift();

// Bracket notation reassignment: Directly targets the element at index 0 ("Vegetable Oil") 
// and overwrites it with "Canola Oil".
shoppingList[0] = "Canola Oil";

console.log(getShoppingListMsg(shoppingList)); 
// Outputs: "Current Shopping List: Canola Oil,Apples,Grapes,Popcorn,Beef Jerky"
