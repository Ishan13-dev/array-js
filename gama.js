/**
 * Golf Score Calculator
 * Determines the golf nickname for a player's score on a hole 
 * based on the hole's par and the total number of strokes taken.
 */

// Lookup array storing all possible golf score nicknames in order of best to worst
const names = [
  "Hole-in-one!", // Index 0: 1 stroke
  "Eagle",        // Index 1: 2 or more under par
  "Birdie",       // Index 2: 1 under par
  "Par",          // Index 3: Equal to par
  "Bogey",        // Index 4: 1 over par
  "Double Bogey", // Index 5: 2 over par
  "Go Home!"      // Index 6: 3 or more over par
];

/**
 * Evaluates the golf score nickname based on par and strokes.
 *
 * @param {number} par - The expected number of strokes for the hole (e.g., 1 to 7).
 * @param {number} strokes - The actual number of strokes the player took (e.g., 1 to 7).
 * @returns {string} The corresponding golf score nickname.
 */
function golfScore(par, strokes) {
  // PRIORITY 1: Always check for a "Hole-in-one!" first.
  // If we checked for "Eagle" (strokes <= par - 2) first, a score of 1 stroke 
  // on a Par 4 would falsely return "Eagle" because 1 is less than or equal to (4 - 2).
  if (strokes === 1) {
    return names[0];
  } 
  // PRIORITY 2: Check if strokes are 2 or more under par.
  // Since strokes === 1 was already caught above, this only triggers for 2+ strokes.
  else if (strokes <= par - 2) {
    return names[1];
  } 
  // Check if strokes are exactly 1 under par
  else if (strokes === par - 1) {
    return names[2];
  } 
  // Check if the player matched the par exactly
  else if (strokes === par) {
    return names[3];
  } 
  // Check if strokes are 1 over par
  else if (strokes === par + 1) {
    return names[4];
  } 
  // Check if strokes are 2 over par
  else if (strokes === par + 2) {
    return names[5];
  } 
  // FALLBACK: If none of the above conditions are met, the player took 
  // 3 or more strokes over par (strokes >= par + 3).
  else {
    return names[6];
  }
}

// ==========================================
// Example Usage & Test Cases (Inputs 1 to 7)
// ==========================================

// Passing two numbers (Par, Strokes) between 1 and 7 into golfScore() inside console.log:
console.log("Par 4, Strokes 1 ->", golfScore(4, 1)); // Expected Output: Hole-in-one!
console.log("Par 5, Strokes 2 ->", golfScore(5, 2)); // Expected Output: Eagle
console.log("Par 4, Strokes 3 ->", golfScore(4, 3)); // Expected Output: Birdie
console.log("Par 4, Strokes 4 ->", golfScore(4, 4)); // Expected Output: Par
console.log("Par 4, Strokes 5 ->", golfScore(4, 5)); // Expected Output: Bogey
console.log("Par 4, Strokes 6 ->", golfScore(4, 6)); // Expected Output: Double Bogey
console.log("Par 3, Strokes 7 ->", golfScore(3, 7)); // Expected Output: Go Home!
