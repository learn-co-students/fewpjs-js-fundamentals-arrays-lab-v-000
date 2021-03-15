const append = ["Milo", "Otis", "Garfield"];
const prepend = [...append];
const removeLast = append.slice();
const removeFirst = append.map(x => x);
append.push("Odie");
prepend.unshift("Odie");
removeLast.pop("Garfield");
removeFirst.shift("Milo");