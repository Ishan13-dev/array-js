# JavaScript Arrays 🚀

A beginner-friendly JavaScript practice repository focused on understanding arrays, array methods, and practical array manipulation through hands-on coding exercises.

## 📌 About the Project

This repository contains practical JavaScript exercises designed to build a strong understanding of arrays and their built-in methods.

It demonstrates how to create arrays, add and remove elements, access array values, build reusable functions, and solve simple programming problems using arrays.

The project also includes practical examples such as a Grocery Shopping List, Lunch Menu Manager, and Golf Score Calculator.

## 📂 Project Structure

```text
array-js/
│
├── alpha.js
├── beta.js
├── gamma.js
│
└── README.md
```

## 📚 Topics Covered

### 1. Array Basics
- Array creation and initialization.
- Empty arrays.
- Array indexing.
- Accessing and updating elements.
- Array length.
- Template literals with arrays.

### 2. JavaScript Array Methods

| Method | Description |
|---|---|
| `push()` | Adds elements to the end. |
| `pop()` | Removes the last element. |
| `unshift()` | Adds elements to the beginning. |
| `shift()` | Removes the first element. |
| `join()` | Combines array elements into a string. |

### 3. Array Manipulation
- Adding and removing elements.
- Updating array values.
- Working with array positions.
- Managing lists dynamically.
- Checking whether an array is empty.

### 4. Functions with Arrays
- Passing arrays as function arguments.
- Returning modified arrays.
- Creating reusable array functions.
- Using conditional statements with arrays.
- Generating random array indexes.

## 💻 Practical Exercises

### 1. Grocery Shopping List (`alpha.js`)

Practice managing a shopping list using JavaScript arrays.

**Concepts:**
- Creating an empty array.
- Adding groceries using `push()`.
- Inserting items using `unshift()`.
- Removing items using `pop()` and `shift()`.
- Updating elements using array indexing.
- Displaying array contents using template literals.

Example:

```javascript
const shoppingList = [];

shoppingList.push("Apples");
shoppingList.push("Grapes");
shoppingList.unshift("Vegetable Oil");

console.log(shoppingList);

shoppingList.pop();
shoppingList.shift();

console.log(shoppingList);
```

### 2. Lunch Menu Manager (`beta.js`)

Practice creating reusable functions to manage a lunch menu.

**Functions covered:**
- `addLunchToEnd()`
- `addLunchToStart()`
- `removeLastLunch()`
- `removeFirstLunch()`
- `getRandomLunch()`
- `showLunchMenu()`

Example:

```javascript
const lunches = [];

function addLunchToEnd(arr, lunchItem) {
    arr.push(lunchItem);
    console.log(`${lunchItem} added to the end of the lunch menu.`);
    return arr;
}

function showLunchMenu(arr) {
    if (arr.length === 0) {
        console.log("The menu is empty.");
    } else {
        console.log(`Menu items: ${arr.join(", ")}`);
    }
}

addLunchToEnd(lunches, "Tacos");
addLunchToEnd(lunches, "Pizza");

showLunchMenu(lunches);
```

### 3. Golf Score Calculator (`gamma.js`)

A practical exercise that determines a golf score nickname based on the expected score (par) and the actual number of strokes.

**Possible results:**

- Hole-in-one!
- Eagle
- Birdie
- Par
- Bogey
- Double Bogey
- Go Home!

Example:

```javascript
const names = [
    "Hole-in-one!",
    "Eagle",
    "Birdie",
    "Par",
    "Bogey",
    "Double Bogey",
    "Go Home!"
];

function golfScore(par, strokes) {
    if (strokes === 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes === par - 1) {
        return names[2];
    } else if (strokes === par) {
        return names[3];
    } else if (strokes === par + 1) {
        return names[4];
    } else if (strokes === par + 2) {
        return names[5];
    } else {
        return names[6];
    }
}

console.log(golfScore(4, 1));
// Output: Hole-in-one!

console.log(golfScore(4, 4));
// Output: Par
```

## 🛠️ Technologies Used

- JavaScript (Vanilla JavaScript)
- Node.js
- Visual Studio Code
- Git & GitHub

## ⚙️ How to Run

**Step 1: Clone the repository**

```bash
git clone https://github.com/Ishan13-dev/array-js.git
```

**Step 2: Navigate to the project directory**

```bash
cd array-js
```

**Step 3: Run the JavaScript files**

Using Node.js:

```bash
node alpha.js
```

Run the other exercises:

```bash
node beta.js
node gamma.js
```

## 🎯 Learning Objectives

- Understand JavaScript arrays.
- Learn commonly used array methods.
- Practice adding, removing, and updating array elements.
- Understand how arrays work with functions.
- Develop logical thinking using conditional statements.
- Work with random array elements.
- Build practical programming exercises.
- Improve problem-solving skills.

## 👨‍💻 Author

**Ishan Verma**

- GitHub: [@Ishan13-dev](https://github.com/Ishan13-dev)
- Repository: [array-js](https://github.com/Ishan13-dev/array-js)

## ⭐ Support

If you find this repository helpful, consider giving it a star ⭐ on GitHub.

---

**Developed by Ishan Verma**

*Learn. Practice. Build. Repeat. 💻🚀*
