const pets = ["Milo", "Otis", "Garfield"];

const append = [...pets.slice(), 'Odie'];
const prepend = ['Odie', ...pets.slice()];
const removeLast = pets.slice(0, pets.length - 1);
const removeFirst = pets.slice(1);