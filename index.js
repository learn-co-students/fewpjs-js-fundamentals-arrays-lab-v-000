// Write your solution here!
var pets = ["Milo", "Otis", "Garfield"];
const append = ["Milo", "Otis", "Garfield"];
const prepend = ["Milo", "Otis", "Garfield"];
const removeLast = ["Milo", "Otis", "Garfield"];
const removeFirst = ["Milo", "Otis", "Garfield"];
append.push("Odie");
prepend.unshift("Odie");
removeLast.pop("Garfield");
removeFirst.shift("Milo");

// First, we're going to create four arrays of pets. Define 4 `const` called:
// `append`, `prepend`, `removeLast` and`removeFirst`, and set all to an initial
// value of`["Milo", "Otis", "Garfield"]`.These are the`array`s that we'll work
// with for each exercise.